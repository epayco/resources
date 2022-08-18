FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm install -g npm@8.18.0

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]