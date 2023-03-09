from pydantic import BaseModel
from typing import Union


class ProductSchema(BaseModel):
    id: Union[int, None] = None
    name: str = None
    description: str = None
    price: float = None
    in_stock: Union[int, None] = None
    minimum_stock: Union[int, None] = None
    category_id: int
    

    class Config:
        orm_mode = True