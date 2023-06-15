FROM node:alpine

WORKDIR /app
EXPOSE 8545

RUN npm install -g ganache-cli

CMD ["ganache-cli", "-h", "0.0.0.0"]
