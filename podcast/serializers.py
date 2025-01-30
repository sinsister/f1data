from rest_framework import serializers

from .models import Podcast


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ["name", "description", "slug", "content", "image", "jlast_update", "sound"]
        

class PodcastsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = ["name", "description", "slug", "jlast_update", "image"]