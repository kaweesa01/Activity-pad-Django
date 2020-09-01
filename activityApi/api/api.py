from activityApi.models import activity
from rest_framework import viewsets
from .serializer import ActivitySerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = activity.objects.all()
    serializer_class = ActivitySerializer
