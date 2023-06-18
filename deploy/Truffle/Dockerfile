FROM node:alpine

RUN mkdir -p /home/app
WORKDIR /home/app

RUN npm install -g truffle

COPY . /home/app
RUN rm -rf build

RUN truffle compile

CMD ["truffle", "migrate", "--network", "development"]
