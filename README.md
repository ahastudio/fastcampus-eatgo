# EatGo

[![Build Status](https://travis-ci.org/ahastudio/fastcampus-eatgo.svg?branch=master)](https://travis-ci.org/ahastudio/fastcampus-eatgo)

“Fast Campus 올인원 패키지: Java 웹 개발 마스터” 실전 프로젝트.

## Test all

```bash
SPRING_PROFILES_ACTIVE=test ./gradlew cleanTest test
```

## Build JAR

```bash
./gradlew bootJar
```

## Run with Docker

```bash
docker-compose up
```

- Admin: <http://localhost:8082/>
- Customer: <http://localhost:8083/>
- Restaurant: <http://localhost:8084/>
