FROM node:10-alpine
WORKDIR /application
COPY . .
RUN npm install
RUN apk add --update graphicsmagick