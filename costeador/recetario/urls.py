from recetario.views import ProductViewSet, ProviderViewSet, CategoryViewSet

from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register(r'products', ProductViewSet)
router.register(r'providers', ProviderViewSet)
router.register(r'categories', CategoryViewSet)

urls = router.urls
