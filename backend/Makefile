up:
	docker-compose up -d

down: 
	docker-compose down

slam: 
	docker-compose down -v
	docker image rm backend-db

reset: 
	docker-compose down -v
	docker image rm backend-db
	docker-compose up -d

