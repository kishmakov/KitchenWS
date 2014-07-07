from django.shortcuts import render

def about_legal(request):
    return render(request, 'about/legal.html')

def about_doc(request, num):
    return render(request, 'about/legal.html')