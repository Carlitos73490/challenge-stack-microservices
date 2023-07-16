FROM node:18

WORKDIR /app

ADD . /app/

RUN npm install

CMD npm run dev -- --host

EXPOSE 5173
VOLUME /app
