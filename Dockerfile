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

ARG DB_HOST
ENV DB_HOST $DB_HOST
ARG DB_USER
ENV DB_USER $DB_USER
ARG DB_PASSWORD
ENV DB_PASSWORD $DB_PASSWORD
ARG DB_NAME
ENV DB_NAME $DB_NAME

WORKDIR /app
COPY package.json ./
COPY --from=appbuild /app .
EXPOSE 3000
CMD [ "yarn", "build" ]