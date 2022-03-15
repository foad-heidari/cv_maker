# Generated by Django 4.0.3 on 2022-03-14 13:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CVModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('status', models.CharField(choices=[('ACTIVE', 'Active'), ('ARCHIVE', 'Archive')], default='ACTIVE', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('level', models.CharField(choices=[('0', '0%'), ('20', '20%'), ('40', '40%'), ('60', '60%'), ('80', '80%'), ('100', '100%')], default='0', max_length=20)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('description', models.TextField(blank=True)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('full_name', models.CharField(blank=True, max_length=150)),
                ('subtitle', models.CharField(blank=True, max_length=150)),
                ('address', models.CharField(blank=True, max_length=150)),
                ('email_address', models.EmailField(blank=True, max_length=150)),
                ('phone_number', models.CharField(blank=True, max_length=150)),
                ('website', models.CharField(blank=True, max_length=150)),
                ('linkedin', models.CharField(blank=True, max_length=150)),
                ('github', models.CharField(blank=True, max_length=150)),
                ('twitter', models.CharField(blank=True, max_length=150)),
                ('career_profile', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('cv', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('level', models.CharField(choices=[('0', '0%'), ('20', '20%'), ('40', '40%'), ('60', '60%'), ('80', '80%'), ('100', '100%')], default='0', max_length=20)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Experiences',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('company', models.CharField(blank=True, max_length=150)),
                ('location', models.CharField(blank=True, max_length=150)),
                ('start_at', models.CharField(blank=True, max_length=150)),
                ('end_at', models.CharField(blank=True, max_length=150)),
                ('description', models.TextField(blank=True)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('order', models.IntegerField(default=1, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('company', models.CharField(blank=True, max_length=150)),
                ('start_at', models.CharField(blank=True, max_length=150)),
                ('end_at', models.CharField(blank=True, max_length=150)),
                ('cv', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
    ]
