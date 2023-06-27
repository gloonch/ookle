FROM node

WORKDIR /

COPY package.json package.json 
COPY package-lock.json package-lock.json

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]