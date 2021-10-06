####################################################### 
FROM node:14.17.3-alpine
ENV TZ Asia/Seoul
RUN apk --no-cache add tzdata
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime
WORKDIR /usr/app
COPY node_modules ./node_modules
COPY .next ./.next
COPY public ./public
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
