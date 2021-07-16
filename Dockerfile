### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/ngemail
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/ngemail/dist/ng-email /usr/share/nginx/html
