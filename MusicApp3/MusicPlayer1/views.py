import datetime
from django.shortcuts import render


from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request,"MusicPlayer1/index.html")


def greet(request,name):
    return render(request,'MusicPlayer1/greet.html',{
        "name": name.capitalize()
    })
    

def christmas(request):
    now = datetime.datetime.now()
    return render(request,"MusicPlayer1/christmas.html",{
        "christmas":now.month==3
    })







