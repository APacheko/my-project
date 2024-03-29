FROM node:20.10.0-alpine

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

EXPOSE 80

CMD ["npm", "run", "start"]

