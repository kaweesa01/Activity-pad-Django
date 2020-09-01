from django.db import models

# Create your models here.
class activity(models.Model):
    activity = models.CharField(max_length=100)
    complete = models.BooleanField()