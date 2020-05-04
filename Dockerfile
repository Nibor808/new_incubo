FROM node:alpine
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
RUN npm run production

#resulting folder is /app/build-prod

FROM nginx:alpine
COPY --from=0 /app/build-prod /usr/share/nginx/html
EXPOSE 80
