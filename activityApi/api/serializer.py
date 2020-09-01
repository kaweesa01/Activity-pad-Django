from rest_framework import serializers
from activityApi.models import activity

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = activity
        fields = '__all__'