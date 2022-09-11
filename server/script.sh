#!bin/bash
source ~/.bashrc
sh init_docker.sh 
npm install -f
docker compose  -f configuration/docker-compose.yml up  -d 