# Docker - Symfony 5 starter made by Cedric Milius

![screenshot](/screenshot-starter.PNG)

## Prérequis

Avoir docker 😉 qui tourne sur sa machine (vm ou wsl).

```
docker -v
Docker version 19.03.12, build 48a66213fe
```

- Docker : https://www.docker.com/get-started
- Docker-compose: https://docs.docker.com/compose/install/

#### Commandes à exécuter pour démarrer :

- `docker-compose up -d` pour lancer tous les containers
- `docker-compose exec apache bash` pour entrer en BASH dans le container
- `composer install`
- `chmod -R 777 *` depuis le container peux être necessaire

### Pour se connecter à PhpMyAdmin :

- `http://localhost:8081/`

#### MySQL Error: : 'Access denied for user 'root'@'localhost'

- Run `docker-compose exec db bash` pour se connecter en root
- Run `mysql -u root -p` avec password à rentrer ou directement `mysql --user=root --password=root`
- Run mysql> `flush privileges;`
- Set new password by ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

#### Créér une base de donnée

- Dupliquer le fichier .env.dist en .env
- `php bin/console doctrine:database:create`
- `select user,host from mysql.user;` pour voir les utilisateurs disponibles
- `show databases;` pour voir nos bases de données
- `show grants for "root"@"localhost"` pour voir les droits d'un utilisateur sur les bases de données
- `CREATE DATABASE newmarket;` pour créer la base de donnée
- ` GRANT ALL PRIVILEGES ON newmarket.* TO 'root'@'%' WITH GRANT OPTION;` pour le rendre superuser

#### Pour parametrer sa base dans phpstorm :

- créer une base avec mysql
- Nom : `newmarket@localhost`
- host `localhost`
- port `3036`exit
- url `jdbc:mysql://localhost:3306/newmarket`

#### Pour déployer :
