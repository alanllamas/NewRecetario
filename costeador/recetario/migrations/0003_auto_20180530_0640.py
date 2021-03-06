# Generated by Django 2.0.5 on 2018-05-30 06:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('recetario', '0002_product_meassure'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default='../static/harina.jpeg', max_length=50, upload_to='../static/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='provider',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='provider', to='recetario.Provider'),
        ),
    ]
