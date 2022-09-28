from fastapi import APIRouter

api = APIRouter()


@api.get("/")
def root():
    return {"message": "Hello I'm FastAPI"}
