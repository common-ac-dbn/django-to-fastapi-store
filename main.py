import uvicorn

from fastapi import FastAPI, Path
from fastapi.middleware.cors import CORSMiddleware
# from typing import Literal


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/{n}')
# async def home(n:Literal[0, 1, 2])
async def home(
    n:int = Path(..., ge=0, le=2, description='Index must be 0-2.')):
    data = ('a', 'b', 'c')
    return data[n]

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)