from adrf.serializers import ModelSerializer

from .models import Post, Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["name","parent_category"]

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ["name", "description", "slug", "content", "image", "jlast_update"]
        

class PostsSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ["name", "description", "slug", "jlast_update", "image"]


class SearchSerializer(ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = ["name", "slug", "jlast_update", "image", "category"]