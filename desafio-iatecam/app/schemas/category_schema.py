from pydantic import BaseModel
from typing import Union, TypeVar, Generic, Optional, List
from pydantic.generics import GenericModel

class CategorySchema(BaseModel):
    id: Union[int, None] = None
    name: str = None
    description: str = None

    class Config:
        orm_mode = True
        

class Response(GenericModel, Generic[TypeVar('T')]):
    result: Optional[TypeVar('T')] 