FROM node:lts-alpine AS appbuild
LABEL 'maintainer'='omar'
WORKDIR /app
COPY package.json ./
RUN yarn --frozen-lockfile
COPY . .

FROM node:lts-alpine
LABEL 'maintainer'='omar'
ENV TZ=Australia/Brisbane
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
COPY package.json ./
COPY --from=appbuild /app .
EXPOSE 3000
CMD [ "yarn", "build" ]