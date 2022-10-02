from fastapi import FastAPI
from router.router import api
from config.db_connection import Base

app = FastAPI()
app.include_router(api)
