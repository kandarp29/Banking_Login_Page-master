from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from .models import ActiveDirectory
from django.contrib import messages

def index(request):
    context = {}
    return render(request,'login_page\index.html',context)

def home(request):
    context = {}
    return render(request,'login_page\home.html',context)

def signup(request):
    context_instance = {}
    if request.method == 'POST':
        data = request.POST
        firstname = data['fname']
        lastname = data['lname']
        username = data['username']
        password = data['password']
        email = data['email']
        phonenumber = data['phone']
        address = data['address']
        city = data['city']

        exit_user_list = ActiveDirectory.objects.all().values_list('Username',flat=True)
        if username not in exit_user_list:
            store_data = ActiveDirectory(FirstserNName=firstname,LastName=lastname,UserName=username,Password=password,
                                         Email=email,Phonenumber=phonenumber,Address=address,City=city)
            store_data.save()
            messages.success(request,'Create account Successfully,Please Log In to go to Home page')
            return redirect('index')
        else:
            messages.error(request,'Username already exits,Please try again')
            return render('index.html',context_instance)
    else:
        messages.error(request,'Data is not entered properly, Try again')
        return render(request,'login_page\index.html',context_instance=RequestContext(request))


def login(request):

    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['pass']

        try:
            my_uname = ActiveDirectory.objects.get(Username=username)
            context = {
                'userdata': my_uname,
            }

            if my_uname.Password == password:
                return render(request,'login_page\home.html',context)
            else:
                messages.error(request,'Invalid Password,Please try again')
                return redirect('index')
        except:
            messages.error(request,'Invalid Username,Please try again')
            return redirect('login_page\home.html',context)

