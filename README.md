# Projekt:
Aplikacja ma na celu pomoc mistrzowi gry DnD w prowadzeniu elementów walki.
Dzieli się na dwa panele:
- Panel walki, który może być udostępniany graczom,
- Panel administracyjny, uzupełniany danymi przez mirastrza gry,

Obie mają wspólny cel: ułatwić i przyspieszyć prowadzenie scen walki.

## Szczegóły panelu administracyjnego:
- w panelu administracyjnym MP określa listę przeciwników i losuje się do nich inicjatywa
- MP określa graczy biorących udział w walce

## Szczegóły panelu walki:
- aplikacja prowadzić przez inicjatywę każdego z uczestników walki
- aktywny gracz jest wyświetlany jako duży, gówny kafelek
- mniejsze kafelki to cele jakie bohater może wybrać jako cel
- lista celów zawiera w sobie znacznik, który określa, czy przeciwnik może wykonać akcję w ramach tury gracza, np. atak okazyjny, dodatkowy pancerz, czy inne reakcje. Reakcja może być wykonana tylko raz między turami.
- można napisać notatkę o przebiegu rundy lub notatkę na przyszłe akcje do każdego uczestnika walki
- są gotowe oznaczenia takie jak: uniki, ukryty, niewidzialny
- odejmowanie obrażeń przeciwnikom jest łatwe i szybkie nawet kiedy trzeba odjąć obrażenia wielu przeciwnikom na raz
- jeśli MP to wcześniej przygotował, w teruchłach zabitych będzie można znaleźć jakieś przedmioty lub złoto

# Szczegóły teczniczne:
## Docker:
Dockerfile przechowuje konfigurację php. Można tam dodać biblioteki jeśli będa jakieś potrzebne.
Natomiast docker-compose.yaml przechowuje ogóln konfigurację kontenerów.

## Uruchomienie projektu:
1. Po zainstalowaniu dockera wykonaj komendę:
```bash
docker-compose up -d
```

**Jeśli coś niedziała**:
Sprawdź logi kontenerów:
```bash
docker-compose logs
```
```bash
docker-compose down && docker-compose up -d
```

2. Aplikacja powinna być dostępna pod takimi adresami:
- aplikacja:
[app_url](http://localhost:8080/)
- phpmyadmin:
[db_url](http://localhost:8081/)

### Informacje szczegółowe:
- Jesli dodajesz biblioteke, przebuduj obraz, a najlepiej wpierw go wyłacz:
```bash
docker-compose down &&
docker-compose build
```

- Sprawdzenie poprawności zainstalowanych modułów:
```bash
docker exec -it apache_php php -m
```

### PHPUnit:
Jeśli chcesz użyć PHPUnit pobierz następnujc wersję:
- phpunit-10.5.40

```bash
wget https://phar.phpunit.de/phpunit-10.5.phar
```

- Uruchom testy poleceniem:
```
php phpunit.phar
```

### Debugowanie testów:
Uruchomienie phpunit z kontenera aby xdebug mógł przechwycić połczenie:
1. Włcz nasłuchiwanie xdebug na porcie 9003,
2. wykonaj poniższe polecenie aby uruchomić testy z kontenera:
```bash
docker exec -it apache_php php -dxdebug.mode=debug ./phpunit.phar
```

