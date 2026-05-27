.PHONY: up down logs deploy

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

deploy:
	docker compose down
	git pull
	docker compose up -d