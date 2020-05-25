FROM node:lts-alpine AS appbuild
LABEL 'maintainer'='omar' 
WORKDIR /app
COPY package.json ./
RUN yarn --frozen-lockfile
COPY . .

FROM node:lts-alpine
LABEL 'maintainer'='omar' 
WORKDIR /app
COPY package.json ./
COPY --from=appbuild /app .
EXPOSE 3000
CMD [ "yarn", "build" ]