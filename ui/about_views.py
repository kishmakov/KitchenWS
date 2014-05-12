from django.shortcuts import render

def about_legal(request):
    return render(request, 'about/legal.html')