FROM php:8.4-apache

# Instalacja rozszerzenia PDO MySQL
RUN docker-php-ext-install pdo_mysql calendar

# Instalacja Xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN apt-get update && apt-get install -y libyaml-dev \
    && pecl install yaml \
    && docker-php-ext-enable yaml

# Konfiguracja Xdebug
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini