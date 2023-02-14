from django.db import models

# Create your models here.
class formmodel(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    grade = models.IntegerField()
    phone = models.CharField(max_length=20)
    mail = models.CharField(max_length=40)
    github = models.CharField(max_length=200, blank=True, null=True)
    que1 = models.TextField()
    que2 = models.TextField()
    que3 = models.TextField()
    que4 = models.TextField()
    que5 = models.TextField()
