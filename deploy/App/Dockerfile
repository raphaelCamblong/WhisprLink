FROM node:alpine

EXPOSE 3000

RUN apk add --no-cache git

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install --frozen-lockfile

RUN yarn add --dev eslint sass

COPY ../blockchain/build/contracts/ /usr/src/app/blockchain/build/contracts/
COPY . /usr/src/app

RUN yarn build

CMD ["yarn", "start"]
