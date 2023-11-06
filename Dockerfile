FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./


RUN yarn 
RUN yarn global add prisma 

COPY . .

RUN prisma generate --schema ./prisma/schema.prisma

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
