#Stage: 1 - Build project
FROM node:10 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Stage: 2 - Serve project
FROM nginx:1.15.8-alpine

COPY --from=node /usr/src/app/dist/web /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
