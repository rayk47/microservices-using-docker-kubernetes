FROM node:latest

COPY . /src

WORKDIR /src

RUN npm ci --only=production

EXPOSE 3001

CMD npm start