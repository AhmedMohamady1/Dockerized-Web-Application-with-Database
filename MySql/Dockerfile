FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password

ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=password

COPY database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306