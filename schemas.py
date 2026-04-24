from pydantic import BaseModel, EmailStr
from typing import Optional

class UserBase(BaseModel):
    name: str
    age: int
    email: str
    domain: str

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    email: Optional[str] = None
    domain: Optional[str] = None

class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True