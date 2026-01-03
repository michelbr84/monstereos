FROM node:16-alpine

ARG SERVICE

# Install Global Depedencies
RUN apk add --no-cache yarn git bash dos2unix vim postgresql-client
RUN npm install -g pm2 ts-node typescript

# Create app directory
WORKDIR /opt/application

# Install application dependencies
ENV TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}'
COPY package.json ./
COPY yarn.lock ./
RUN yarn

EXPOSE 3030

# Copy app source -- required for CI/CD, overwritten by docker compose mounting 
COPY . .

RUN dos2unix ./migrate.sh ./start.sh && chmod +x ./migrate.sh ./start.sh

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then use pm2-dev to start the app with live reload
CMD /wait && ./start.sh