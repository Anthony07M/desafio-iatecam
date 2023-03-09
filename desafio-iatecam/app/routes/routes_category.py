from fastapi import APIRouter, Depends
from config.database import get_db
from sqlalchemy.orm import Session
from schemas.category_schema import Response, CategorySchema
from services.category_service import create_category, list_categories, remove_category, update_category, get_category_by_id

router_category = APIRouter()


@router_category.post('/')
async def create(category: CategorySchema, db: Session=Depends(get_db)):
   print('category ', category)
   res = create_category(db, category)

   return Response(
        result=res
    ).dict(exclude_none=True)


@router_category.get('/')
async def list_category(db: Session=Depends(get_db)):
   lista =  list_categories(db, 0, 10)
   return Response(
      result=lista
   ).dict(exclude_none=True)


@router_category.get('/{category_id}')
async def get_category(category_id: int, db: Session=Depends(get_db)):
   return get_category_by_id(db, category_id)

@router_category.delete('/{category_id}')
async def remove(category_id: int, db: Session=Depends(get_db)):
   remove_category(db, category_id)
   return { "message": "Category deleted"}


@router_category.patch('/{category_id}')
async def update(category: CategorySchema, category_id: int, db: Session=Depends(get_db)):
  return update_category(
    db, category_id, 
    name=category.name, 
    description=category.description
   )
