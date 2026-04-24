from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List

import models
import schemas
import database

# This line creates the tables in PostgreSQL automatically when the app starts
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

@app.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = models.User(
        name=user.name, 
        age=user.age, 
        email=user.email, 
        domain=user.domain
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/", response_model=List[schemas.UserResponse])
def get_users(db: Session = Depends(database.get_db)):
    return db.query(models.User).all()