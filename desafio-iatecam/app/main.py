from fastapi import FastAPI
from config.database import Base, engine
from routes.routes_category import router_category
from routes.routes_product import router_product
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
     CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_category, prefix='/category', tags=['category'])
app.include_router(router_product, prefix='/product', tags=['product'])
