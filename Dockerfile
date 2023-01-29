FROM node:16.3.0-alpine

RUN npm install -g pnpm

COPY entrypoint-dev.sh /opt/entrypoint.sh

RUN chmod +x /opt/entrypoint.sh

WORKDIR /app

ENTRYPOINT ["sh", "/opt/entrypoint.sh"]
EXPOSE 3000
