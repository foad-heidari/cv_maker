FROM python:3.8

ENV PYTHONUNBUFFERED 1

# Install python dependencies in /.venv
WORKDIR /app/backend

COPY ./Pipfile ./Pipfile.lock ./

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install

COPY ./ ./

EXPOSE 8000