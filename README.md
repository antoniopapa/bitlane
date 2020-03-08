## Instructions

### Requirements
There is a real estate company „Maklertest GmbH“ located in Musterstraße 123, 12345 Berlin. They want to have a website where they can login and store excel, word and pdf-documents. Even if they have different coworkers, there is only one login needed.
Task: use an MVC-Framework of your choice to solve this request.
The CI-Colors of the company are #241a48 as main color and #ff650b as highlightcolor.

### Description 
The following is a Single Page Application built with Angular 7 and Laravel 7

### Building
```bash
docker-compose up
```
### Database
After docker compose has finished open a new terminal tab and run the following commands:

```bash
docker-compose run backend php artisan migrate
docker-compose run backend php artisan passport:install
docker-compose run backend php artisan db:seed
```

### Login
Go to `http://localhost:8080/login` and the credentials to login are 
- email: antoniopapa1991@gmail.com
- password: password

After you login you can insert and delete files and update the company data