from fastapi import APIRouter, Depends, HTTPException
from schemas.product_schema import ProductSchema
from sqlalchemy.orm import Session
from config.database import get_db
from services.product_service import create_product, list_products, delete_product, get_product_by_id, update_product
from schemas.category_schema import Response

router_product = APIRouter()

@router_product.post('/')
async def create(product: ProductSchema, db: Session=Depends(get_db)):
    return create_product(db, product)


@router_product.get('/{product_id}')
async def get_product(product_id: int, db: Session=Depends(get_db)):
    _product = get_product_by_id(db, product_id)

    if _product is None:
        raise HTTPException(404, 'Product not found')
    
    return _product


@router_product.get('/')
async def list_product(db: Session=Depends(get_db)):
    products = list_products(db, 0, 10)

    return Response(
        result=products
    ).dict(exclude_none=True)


@router_product.delete('/{product_id}')
async def delete(product_id: int, db: Session=Depends(get_db)):
    delete_product(db, product_id)
    return { "msg": "Product Deleted"}


@router_product.patch('/{product_id}')
async def update(product_id: int, product: ProductSchema, db: Session = Depends(get_db)):
    _product = update_product(db, product_id, product)

    return Response(
        result=_product
    )