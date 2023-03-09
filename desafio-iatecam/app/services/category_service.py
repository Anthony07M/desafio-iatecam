from sqlalchemy.orm import Session
from schemas.category_schema import CategorySchema
from models.models import Category

def create_category(db: Session, category: CategorySchema):
    _category = Category(**category.dict())

    db.add(_category)
    db.commit()
    db.refresh(_category)

    return _category


def list_categories(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Category).offset(skip).limit(limit).all()


def get_category_by_id(db: Session, category_id: int):
    return db.query(Category).filter(Category.id == category_id).first()


def update_category(db: Session, category_id: int, name: str, description: str):
    _category = get_category_by_id(db, category_id)
    
    _category.name = name
    _category.description = description

    db.commit()
    db.refresh(_category)

    return _category


def remove_category(db: Session, category_id):
    _category = get_category_by_id(db, category_id)

    db.delete(_category)
    db.commit()

    return