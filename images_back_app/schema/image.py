from typing import Optional
from pydantic import BaseModel


class Image(BaseModel):
    id: Optional[int]
    image: Optional[str]
    name: str
    preferred: Optional[bool]

    class Config:
        orm_mode = True
