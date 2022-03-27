FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend

COPY ./Pipfile ./Pipfile.lock ./


# Update pip
RUN python -m pip install --upgrade pip

# install packages
RUN pip install pipenv
RUN pipenv install

COPY ./ ./

EXPOSE 8000