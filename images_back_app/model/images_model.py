from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy_utils import URLType
from config.db import Base, engine


class Image(Base):
    __tablename__ = 'images'
    id = Column(Integer, primary_key=True)
    image = Column(String(1000), nullable=True)
    name = Column(String(250), nullable=False)
    preferred = Column(Boolean, nullable=True)


Base.metadata.create_all(engine)
