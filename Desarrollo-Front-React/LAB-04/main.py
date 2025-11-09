from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Modelo para la creación de tareas
class TaskCreate(BaseModel):
    description: str

# Lista de tareas simulada
tasks = [
    {"id": 1, "description": "Hacer la compra", "completed": False},
    {"id": 2, "description": "Pagar las facturas", "completed": False},
]

# GET /tasks/ - obtener todas las tareas
@app.get("/tasks/")
def get_tasks():
    return tasks

# GET /tasks/{task_id} - obtener tarea por ID
@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            return task
    raise HTTPException(status_code=404, detail="Tarea no encontrada")

# POST /tasks/ - crear nueva tarea
@app.post("/tasks/")
def create_task(task: TaskCreate):
    new_id = max([t["id"] for t in tasks], default=0) + 1
    new_task = {"id": new_id, "description": task.description, "completed": False}
    tasks.append(new_task)
    return new_task

# PUT /tasks/{task_id} - marcar tarea como completada
@app.put("/tasks/{task_id}")
def complete_task(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            return task
    raise HTTPException(status_code=404, detail="Tarea no encontrada")

# DELETE /tasks/{task_id} - eliminar tarea
@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    for index, task in enumerate(tasks):
        if task["id"] == task_id:
            deleted_task = tasks.pop(index)
            return deleted_task
    raise HTTPException(status_code=404, detail="Tarea no encontrada")
