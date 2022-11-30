FROM node:16 AS build

WORKDIR /app

COPY . .
RUN npm i && npm run build

FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/dist/ng-telegram-chat-listener .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
