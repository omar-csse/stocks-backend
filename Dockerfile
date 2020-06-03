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

ARG MYSQL_HOST
ENV MYSQL_HOST $MYSQL_HOST
ARG MYSQL_USER
ENV MYSQL_USER $MYSQL_USER
ARG MYSQL_ROOT_PASSWORD
ENV MYSQL_ROOT_PASSWORD $MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE
ENV MYSQL_DATABASE $MYSQL_DATABASE
ARG JWTSECRET
ENV JWTSECRET $JWTSECRET

WORKDIR /app
COPY package.json ./
COPY --from=appbuild /app .
EXPOSE 3000
CMD [ "yarn", "build" ]