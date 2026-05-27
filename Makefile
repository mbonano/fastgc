.PHONY: up down logs

up: setup
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f
