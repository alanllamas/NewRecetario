from rest_framework.serializers import ModelSerializer
from recetario.models import Product, Provider, Category

class CategorySerializer(ModelSerializer):
    """
        category serializer
    """
    model = Category
    fields = ['name']

class ProviderSerializer(ModelSerializer):
    """
        serialize the provider model fields:
            ['store','address','location','phone','category','contact']

    """

    class Meta:
        model    = Provider
        fields   = ['store','address','location','phone','category','contact']

class ProductSerializer(ModelSerializer):
    """
        serialize the product model fields:
        ['provider', 'name', 'quantity', 'price', 'category','meassure']
    """

    class Meta:
        model   = Product
        fields  = ['id','provider', 'name', 'quantity','meassure', 'price', 'category','image','url']
