import cloudinary
import cloudinary.uploader
import config.messages as msg
from fastapi import File, UploadFile
from config.db_connection import Session
from model.images_model import Image as ImageModel


connexion = Session()


class ImageController:
    image: UploadFile = File(...)
    name: str
    preferred: bool
    id: int

    def __init__(self, image: UploadFile = File(...), name: str = None, preferred: bool = None,
                 image_id: int = None):
        self.image = image
        self.name = name
        self. preferred = preferred
        self.id = image_id

    def create_image(self):
        result = cloudinary.uploader.upload(self.image)
        url = result.get("url")
        new_image = ImageModel(image=url, name=self.name, preferred=self.preferred)
        try:
            connexion.add(new_image)
            connexion.commit()
            message = msg.IMAGE_CREATED_OK
        except ConnectionError:
            message = msg.IMAGE_CREATED_KO
        return new_image, message

    def list_one_image(self):
        image = connexion.query(ImageModel).filter(ImageModel.id == self.id).first()
        return image

    def list_all_images(self):
        images = connexion.query(ImageModel).all()
        return images

    def edit(self):
        image_to_update = connexion.query(ImageModel).filter(ImageModel.id == self.id).first()
        image_to_update.name = self.name
        image_to_update.preferred = self.preferred
        connexion.commit()
        return image_to_update

    def delete(self):
        image = connexion.query(ImageModel).filter(ImageModel.id == self.id).first()
        connexion.delete(image)
        connexion.commit()
        return {'message': 'image deleted', 'id': self.id}
