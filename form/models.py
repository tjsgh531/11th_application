from django.db import models

# Create your models here.
class formmodel(models.Model):
    name = models.CharField(max_length=100)
    major = models.CharField(max_length=50)
    grade = models.IntegerField()
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=40)
    git = models.CharField(max_length=200, blank=True, null=True)
    question1 = models.TextField()
    question2 = models.TextField()
    question3 = models.TextField()
    question4 = models.TextField()
    question5 = models.TextField()

    def __str__(self):
        return self.name
