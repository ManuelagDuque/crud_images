from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.orm import sessionmaker, declarative_base
# from configs import Settings
import cloudinary

meta_data = MetaData()
Base = declarative_base()

engine = create_engine("mysql+pymysql://root:root@localhost:8889/images_repository")
connection = engine.connect()

cloudinary.config(
    cloud_name='dqnn9lztw',
    api_key='548324252741441',
    api_secret='bDqzhAisdOldsd5A2jXV74XJ5as'
)


Session = sessionmaker(autocommit=False, bind=engine)

# Create DB if it doesn't exist
if not database_exists(engine.url):
    create_database(engine.url)
