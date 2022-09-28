from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.orm import sessionmaker, declarative_base
# from configs import Settings
import cloudinary

engine = create_engine("mysql+pymysql://root:root@localhost/images_repository")
meta_data = MetaData()

connection = engine.connect()

Base = declarative_base()

Session = sessionmaker(autocommit=False, bind=engine)

# Create DB if it doesn't exist
if not database_exists(engine.url):
    create_database(engine.url)

