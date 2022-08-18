FROM node:lts

WORKDIR /app

COPY . .

RUN ["npm", "install"]

EXPOSE 80

CMD [ "node", "/app/server.js" ]
