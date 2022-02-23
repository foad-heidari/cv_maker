# Generated by Django 4.0.2 on 2022-02-22 17:54

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150)),
                ('order', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='CVModel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='cv_maker.basemodel')),
                ('company', models.CharField(max_length=150)),
                ('start_at', models.CharField(max_length=150)),
                ('end_at', models.CharField(max_length=150)),
            ],
            bases=('cv_maker.basemodel',),
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='cv_maker.basemodel')),
            ],
            bases=('cv_maker.basemodel',),
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='cv_maker.basemodel')),
                ('level', models.CharField(choices=[('0', '0%'), ('20', '20%'), ('40', '40%'), ('60', '60%'), ('80', '80%'), ('100', '100%')], default='0', max_length=20)),
            ],
            bases=('cv_maker.basemodel',),
        ),
        migrations.AddField(
            model_name='basemodel',
            name='cv',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cv_maker.cvmodel'),
        ),
    ]
