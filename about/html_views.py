from django.shortcuts import render

def legal_view(request):
    return render(request, 'about/legal.html')