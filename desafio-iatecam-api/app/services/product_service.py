from sqlalchemy.orm import Session
from models.models import Product
from schemas.product_schema import ProductSchema

def create_product(db: Session, product: ProductSchema):
    _product = Product(**product.dict())
    
    db.add(_product)
    db.commit()
    db.refresh(_product)
    
    return _product


def list_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Product).offset(skip).limit(limit).all()


def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()


def delete_product(db: Session, product_id):
    _product = get_product_by_id(db, product_id)

    db.delete(_product)
    db.commit()

    return


def update_product(db: Session, product_id, product: ProductSchema):

    _product = get_product_by_id(db, product_id)
    _product.name = product.name
    _product.description = product.description
    _product.category_id = product.category_id
    _product.price = product.price
    _product.in_stock = product.in_stock

    db.commit()
    db.refresh(_product)

    return _product