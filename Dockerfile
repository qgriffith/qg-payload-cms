FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install --legacy-peer-deps
RUN npnm run build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package*.json  ./

RUN npm install --production --legacy-peer-deps

EXPOSE 3000

CMD ["node", "dist/server.js"]
