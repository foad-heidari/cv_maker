# cv_maker

### A Complete and simple CV builder:
___

### We are using:
- [React](https://reactjs.org/)
- [Django](https://www.djangoproject.com/) and [Django-rest-framework](https://www.django-rest-framework.org/)
- [Docker](https://www.docker.com/)
- [Redux](https://redux.js.org/)
- ...


## Installation

Use [Docker](https://www.docker.com/) to install the project.

```bash
docker-compose up --build
```

We need to run the migrations first:
```bash
docker exec -it backend pipenv run ./manage.py migrate
```

## Usage

You can go to [localhost:3000](http://localhost:3000/) and test the app.

### Create Superuser
```python
docker exec -it backend pipenv run ./manage.py createsuperuser
```


