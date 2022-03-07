from django.shortcuts import render, redirect, HttpResponse
from .models import *


def index(request):
    title = request.POST.get("title")
    if request.method == "POST":
        Todo.objects.create(title=title)
    context = {
        "AllTodo": Todo.objects.all()
    }
    return render(request, "index.html", context)


def update(request, todo_id):
    title = request.POST.get("title")
    if request.method == "POST":
        Todo.objects.filter(id=todo_id).update(title=title)
        return redirect("home")
    context = {
        "todo": Todo.objects.get(id=todo_id)
    }
    return render(request, "update.html",context)


def delete(request, todo_id):
    Todo.objects.get(id=todo_id).delete()
    return redirect("home")
