from fastapi import FastAPI
from router.router import api

app = FastAPI()
app.include_router(api)
