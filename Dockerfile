FROM node:15.5.1-alpine3.10

RUN mkdir -p /home/HelloErmine-PR/app && chown -R node:node /home/HelloErmine-PR/app

RUN apk update && apk upgrade


WORKDIR /home/HelloErmine-PR/app
COPY . /home/HelloErmine-PR/app
RUN yarn install

#USER node

EXPOSE 80

CMD [ "yarn", "install" ]
CMD [ "yarn", "start" ]
