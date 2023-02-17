# Generated by Django 4.1.7 on 2023-02-17 04:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='formmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('major', models.CharField(max_length=50)),
                ('grade', models.IntegerField()),
                ('phone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=40)),
                ('git', models.CharField(blank=True, max_length=200, null=True)),
                ('question1', models.TextField()),
                ('question2', models.TextField()),
                ('question3', models.TextField()),
                ('question4', models.TextField()),
                ('question5', models.TextField()),
            ],
        ),
    ]