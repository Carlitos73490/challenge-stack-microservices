FROM node:18

WORKDIR /app

ADD . /app/

RUN npm i --force

RUN npm run build

CMD npm run start:prod

EXPOSE 5010 5000
VOLUME /app
