from sqlalchemy import Table, Column, Integer, String, Boolean
from config.db import Base


class Image(Base):
    __tablename__ = 'images'
    id = Column(Integer,primary_key=True),
    image = Column(String(1000)),
    name = Column(String(250))
    preferred = Column(Boolean, nullable=True)
