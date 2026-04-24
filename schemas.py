from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    name: str
    age: int
    email: str
    domain: str

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True