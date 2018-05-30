from django.db import models
from django.conf import settings

class Category(models.Model):
    """
    this models defines the category to every ingredient or recepie
    """
    name = models.CharField(max_length=25, default="abarrotes")

    def __str__(self):
        return self.name

class Provider(models.Model):
    """

        this model defines the provider, linked with the products list
        so you can know where you`re getting your products

    """

    store = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    phone = models.CharField(max_length=12)
    category = models.ForeignKey(Category, related_name="provider_category", on_delete=models.PROTECT)
    contact = models.CharField(max_length=50 , blank=True)

    # text = models.CharField(max_length=200)
    # owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.store


class Product(models.Model):
    """

        this models defines the product, it need the following:
        ['provider', 'name', 'quantity', 'price', 'category']

    """

    name = models.CharField(max_length=200)
    quantity = models.IntegerField()
    meassure = models.CharField(max_length=50)
    price = models.FloatField()
    category = models.ForeignKey(Category, related_name="product_category", on_delete=models.PROTECT)
    provider = models.ForeignKey(Provider, related_name="provider", on_delete=models.PROTECT)
    image = models.ImageField(max_length=50, default="../media/harina.jpeg")

    # body = models.TextField(max_length=200)
    # question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='responses')

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
