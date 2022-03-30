#!/usr/bin/env bash
# Check if there is instance running with the image name we are deploying
CURRENT_INSTANCE=$(docker ps -a -q --filter ancestor="$IMAGE_NAME" --format="{{.ID}}")

#If an instance does exist, stops the instance
if [ "$CURRENT_INSTANCE" ]
then
    docker rm $(docker stop $CURRENT_INSTANCE)
fi

# Pull down the instance from dockerhub
docker pull $IMAGE_NAME

# Check if a docker container exists with the name of node_app ud ut does, removers the container
CONTAINER_EXISTS=$(docker ps -a | grep $CONTAINER_NAME)
if [ "$CONTAINER_EXISTS" ]
then
    docker rm node_app
fi

# Create a container called node_app that is available on port 3223 from our docker image
docker create -p 3223:3223 --name node_app $IMAGE_NAME
# Write the private key to a file
echo $PRIVATE_KEY > privatekey.pem
# Write the server key to a file
echo $SERVER > server.crt
# Add the private the private key to the node_app  docker container
docker cp ./privatekey.pem node_app:/privatekey.pem
# Add the server key to the node_app docker container
docker co ./server.crt node_app:/server.crt
# Starts the node_app container
docker start node_app