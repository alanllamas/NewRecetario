from django.contrib import admin

from .models import Category, Product, Provider
# Register your models here.

admin.site.register(Provider)
admin.site.register(Product)
admin.site.register(Category)
