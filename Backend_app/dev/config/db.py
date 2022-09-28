from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.orm import sessionmaker, declarative_base
# from configs import Settings
import cloudinary

meta_data = MetaData()
Base = declarative_base()

engine = create_engine("mysql+pymysql://root:root@localhost/images_repository")
connection = engine.connect()

Session = sessionmaker(autocommit=False, bind=engine)

# Create DB if it doesn't exist
if not database_exists(engine.url):
    create_database(engine.url)
