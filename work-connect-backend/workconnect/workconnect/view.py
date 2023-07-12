from django.shortcuts import render

#root index function for rendering the react html page
def index(request):
    return render(request, 'index.html')