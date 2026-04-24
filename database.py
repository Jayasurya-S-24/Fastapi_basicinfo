import urllib.parse
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 1. Store your password in a variable
raw_password = "Zeus@PSQL"

# 2. Encode the password to handle special characters like '@'
encoded_password = urllib.parse.quote_plus(raw_password)

# 3. Use the encoded password in the URL
SQLALCHEMY_DATABASE_URL = f"postgresql://postgres:{encoded_password}@localhost:5432/user_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()