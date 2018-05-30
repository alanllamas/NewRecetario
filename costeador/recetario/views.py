from rest_framework.viewsets import ModelViewSet

from recetario.models import Product, Provider, Category
from recetario import  serializers

# Create your views here.
class CategoryViewSet(ModelViewSet):
    """

    """

    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer


class ProviderViewSet(ModelViewSet):
    """

    """

    queryset = Provider.objects.all()
    serializer_class = serializers.ProviderSerializer


class ProductViewSet(ModelViewSet):
    """

    """

    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer
