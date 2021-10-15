#!/bin/bash

HOME_DIR=/home/ec2-user/next-tutorial
DOCKER_APP_NAME=tutorial
NGINX_FILE=${HOME_DIR}/nginx/docker-compose-nginx.yml

echo "nginx up"
sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-nginx -f ${NGINX_FILE} up -d --build
sleep 5
sudo /usr/bin/docker system prune -f

exit 0