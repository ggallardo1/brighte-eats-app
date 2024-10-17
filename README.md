# Take home exercise

<p>Brighte would like to provide a system to accept expressions of interest for a new product and to view those leads in a dashboard. The new product is called Brighte Eats. We would like to know which of the following services customers are interested in:</p>

- delivery
- pick-up
- payment

**Requirements**
- <input type="checkbox" checked />Relational Database
- <input type="checkbox" checked />GraphQL API written in Typescript to run on NodeJs
- <input type="checkbox" checked />1. mutation: register - will accept name, email, mobile, postcode, and which services they are interested in.
- <input type="checkbox" checked />2. queries: leads and lead, to provide all the data.
- <input type="checkbox" checked />Code should be on github. We would prefer to see commits as you go. A README is a must.
- <input type="checkbox" checked />We should be able to check out and run the solution.
- <input type="checkbox" checked />We would like to see some unit tests.
<br/>
---
<br/>
<h1 align="center">BRIGHTE EATS APP</h1>
<br/>
<p align="center">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/typeorm-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
</p>

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running with Docker](#running-with-docker)
- [Testing](#testing)

## Features

- Register leads with their contact details and service interests.
- Query all leads or a specific lead by ID.
- Easy-to-use GraphQL API for interaction.

## Prerequisites
- Docker ([download here](https://www.docker.com/products/docker-desktop/))

## Technologies Used
- Node.js
- TypeScript
- Express
- GraphQL
- TypeORM
- PostgreSQL
- Docker

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ggallardo1/brighte-eats-app.git
   cd brighte-eats-apps
   cp .env.example .env

2. **Install dependencies:**  
Using Docker, make sure [docker desktop](https://www.docker.com/products/docker-desktop/) is installed:
    ```bash
    docker-compose up --build

3. **Testing**  
    ```bash
    npm test
