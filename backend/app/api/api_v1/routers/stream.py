from fastapi import APIRouter, Request, Depends, Response, encoders
from fastapi import APIRouter
from pathlib import Path
from fastapi import Header
from fastapi import FastAPI, WebSocket

stream_router = r = APIRouter()


@r.websocket("/video")
async def video(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
