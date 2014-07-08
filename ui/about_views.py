from django.shortcuts import render
import sys

def about_legal(request):
    return render(request, 'about/legal.html')

def about_doc(request, num):
    print >> sys.stdout, num
    return render(request, 'about/doc/base.html')