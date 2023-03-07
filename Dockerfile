# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm i install 

COPY . .
RUN npm run build

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]

# To create docker image
# docker build -t lite-thinking:v1 .
# docker run --publish 80:80 lite-thinking:v1