### STAGE 1: Build ###
FROM node:12.7-alpine AS buildngemail
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run buildngemail

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=buildngemail /usr/src/app/dist/ng-email /usr/share/nginx/html
