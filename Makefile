.PHONY: up down logs deploy restart rebuild

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

deploy:
	docker compose down
	git pull
	docker compose up --build -d

restart:
	docker compose down
	docker compose up -d

rebuild:
	docker compose down
	docker compose up --build -d