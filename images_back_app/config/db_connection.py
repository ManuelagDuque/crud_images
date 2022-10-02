from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.orm import sessionmaker, declarative_base
import config.constants as constants
import cloudinary

meta_data = MetaData()
Base = declarative_base()

engine = create_engine(constants.MYSQL_ENGINE)
connection = engine.connect()

cloudinary.config(
    cloud_name=constants.CLOUDINARY_ACCESS_DETAILS['cloud_name'],
    api_key=constants.CLOUDINARY_ACCESS_DETAILS['api_key'],
    api_secret=constants.CLOUDINARY_ACCESS_DETAILS['api_secret']
)


Session = sessionmaker(autocommit=False, bind=engine)

# Create DB if it doesn't exist
if not database_exists(engine.url):
    create_database(engine.url)
