# -*- coding: utf-8 -*-
import unittest
from config import constants_test, messages
from src.controllers.image_controller import ImageController
from fastapi import File
from model.images_model import Image as ImageModel


class TestImageController(unittest.TestCase):
    image = UploadFile = File(...)
    name: str
    preferred: bool
    id: int

    def test_create_image_in_data_base_ok(self):
        """
        Successful create:
            Given a file image resource,
            and name,
            and a preferred status,
            When the system performs the POST method to INSERT it in the database,
            Then it returns the message: "The image was successfully load"
            and create an instance of ImageModel.
        """
        self.image = constants_test.TEST_IMAGE_PATH
        self.name = constants_test.TEST_IMAGE_NAME
        self.preferred = constants_test.TEST_IMAGE_PREFERRED
        expected_response = messages.IMAGE_CREATED_OK
        image_object, response_message = ImageController(image=self.image, name=self.name, preferred=self.preferred).create_image()
        self.assertEqual(response_message, expected_response)
        self.assertIsInstance(image_object, ImageModel)
        return self

    def test_get_image_from_data_base_ok(self):
        """
        Successful create:
            Given aN image id,
            When the system performs the GET method to ASK about it in the database,
            Then it returns the message: "The image was successfully load"
            and create an instance of ImageModel.
        """
