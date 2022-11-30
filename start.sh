#!/bin/bash

docker build -t chat-listener .
docker run --rm -it -p 8080:80 chat-listener
