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

#Push into ECR
# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/p1g5b2e2
# docker tag lite-thinking:v1 public.ecr.aws/p1g5b2e2/think-lite:latest
# docker push public.ecr.aws/p1g5b2e2/think-lite:latest