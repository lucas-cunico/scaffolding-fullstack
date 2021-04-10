FROM node:lts

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /code

ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s \
  CMD node healthcheck.js

COPY . /code

CMD [ "npm", "run", "dev" ]
# CMD [ "node", "src/index.js" ]