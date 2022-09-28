from typing import Optional
from pydantic import BaseModel


class User(BaseModel):
    id: Optional[str]
    image: str
    name: str
    preferred: Optional[bool]

    class Config:
        orm_mode = True
