from django.shortcuts import render
import requests
from django.http import HttpResponse
import os

def index(request):
    return render(request, 'index.html')



