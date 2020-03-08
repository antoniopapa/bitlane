## Instructions

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