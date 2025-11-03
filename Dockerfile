#I have used alphine here instead of ubuntu b/c it's very lightweight and fast
FROM node:20-alpine
# create app folder
WORKDIR /app
# Copy package.json and package-json.lock into app folder
COPY package*.json ./
# we use --production flag b/c we dont want dev dependencies like nodemon
RUN npm install --production
# copy our application code into app folder
COPY app.js notes.js ./
# we create a data directory for persistent storage in container. -p makes sure no error is thrown if folder already present
RUN mkdir -p /data
# finally we change work directory to data
WORKDIR /data
# run our main file i.e app.js
ENTRYPOINT ["node", "/app/app.js"]