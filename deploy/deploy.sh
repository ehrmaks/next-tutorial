#!/bin/bash

HOME_DIR=/home/ec2-user/next-tutorial
DOCKER_APP_NAME=tutorial
BLUE_FILE=${HOME_DIR}/deploy/docker-compose-blue.yml
GREEN_FILE=${HOME_DIR}/deploy/docker-compose-green.yml

EXIST_BLUE=$(sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} ps | grep Up)

if [ -z "$EXIST_BLUE" ]; then
    echo "blue up"
    sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} up -d --build
    sleep 5
    sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-green -f ${GREEN_FILE} down
    sudo /usr/bin/docker system prune -f
else
    echo "green up"
    sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-green -f ${GREEN_FILE} up -d --build
    sleep 5
    sudo /usr/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} down
    sudo /usr/bin/docker system prune -f
fi
exit 0