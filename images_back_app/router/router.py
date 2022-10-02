from config.db import Session
from fastapi import APIRouter, Form, Path
from model.images_model import Image as ImageModel
import cloudinary
import cloudinary.uploader
from fastapi import File, UploadFile

api = APIRouter()
connexion = Session()


@api.get("/")
def root():
    return {"message": "Image management server V1"}


@api.post("/image")
def create(name: str = Form("name"), file: UploadFile = File(...), preferred: bool = Form("preferred")):
    result = cloudinary.uploader.upload(file.file)
    url = result.get("url")

    new_image = ImageModel(image=url, name=name, preferred=preferred)
    connexion.add(new_image)
    connexion.commit()
    return new_image


@api.get("/image/{id}")
def list_one(id: int = Path('id')):
    image = connexion.query(ImageModel).filter(ImageModel.id == id).first()
    return image


@api.get("/image")
def list_all():
    images = connexion.query(ImageModel).all()
    return images


@api.delete("/image/{id}")
def delete_image(id: int = Path('id')):
    image = connexion.query(ImageModel).filter(ImageModel.id == id).first()
    connexion.delete(image)
    connexion.commit()
    return {'message': 'image deleted', 'id': id}
