FROM node:16.13-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install 

COPY . ./
EXPOSE 3000
