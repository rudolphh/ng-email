### STAGE 1: Build ###
FROM node:14-alpine AS buildyrz
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.19.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=buildyrz /usr/src/app/dist/ng-email /usr/share/nginx/html
