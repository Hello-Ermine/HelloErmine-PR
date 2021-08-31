FROM node:15.5.1-alpine3.10

RUN mkdir -p /home/HelloErmine-PR/app && chown -R node:node /home/HelloErmine-PR/app

RUN apk update && apk upgrade


WORKDIR /home/HelloErmine-PR/app
COPY . /home/HelloErmine-PR/app
RUN npm i
RUN npm build

#USER node

EXPOSE 80
