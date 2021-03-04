#!/bin/sh

cd client && docker build -t feedr:latest;
cd ..;
cd api && docker build -t feedr-api:latest;
cd ..;
docker-compose -f docker-compose.yml up;