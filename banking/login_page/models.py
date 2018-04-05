from django.db import models

# Create your models here.
class ActiveDirectory(models.Model):
    Firstname = models.CharField("First Name",max_length=25)
    Lastname = models.CharField("Last Name",max_length=25)
    Username = models.CharField("User Name",max_length=25)
    Password = models.CharField("Password",max_length=128)
    Email = models.EmailField("Email Address",max_length=70)
    Phonenumber = models.IntegerField()
    Addredd = models.CharField("Address line 1", max_length=1024)
    City = models.CharField("City", max_length=1024)


    def __str__(self):
        return self.Username
    

