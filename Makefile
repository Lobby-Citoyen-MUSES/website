.PHONY: up qa build offline deploy

up: 
	docker run -it --rm -p 8080:8080 -v `pwd`:/var/app -w /var/app node npm run dev

build:
	docker run -it --rm -v `pwd`:/var/app -w /var/app node npm run build

qa: build
	docker run -it --rm -p 3000:3000 -v `pwd`:/var/app -w /var/app serverless serverless offline

package: build
	docker-compose run serverless package

deployment: build
	docker-compose run serverless deploy && docker-compose run serverless client deploy --no-confirm --no-delete

static: 
	docker-compose run serverless client deploy --no-confirm --no-delete
	

