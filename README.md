# Target recreation 
---

## Description
---
> The System Design Capstone (SDC) is designed to take an existing project, FEC-Capstone-Bullseye, and optimize one of three components of a full-stack project. For the SDC, I took on optimizing the server side of the project. 

![Target](https://live.staticflickr.com/65535/52851032957_e4e39b90ff_b.jpg)

## Table of Contents
---
- [Target recreation](#target-recreation)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Tech](#tech)
  - [License](#license)


## Installation
---
 - Inside the server folder open a new terminal and run npm install
 - After the dependencies are install run: docker-compose up --build
 - Open a new terminal window and run: node faker.js
 - Open a new terminal window and run: node server.js
 - Inside the bullseye folder open a new terminal window and run: npm start
 - Go into the SDC subfolder inside the server folder 
 - In new terminal window run: k6 run script.js

## Usage
---
> This project is designed for educational purposes to teach the optimazation of one of the three components of full-stack project. Working to optimize the server side of the application ran the project through a Redis Docker container and validated the results using K6.

## Screenshot
---

![K6](https://live.staticflickr.com/65535/52851074097_5031f80a3a.jpg)

## Tech
---
- Front End: React,
- Backend: Express.js, Faker.js
- Database: Postgresql
- Tools: Thunder Client, Docker, Redis, K6, GitHub
  
## License
---
The license used for this project is MIT.
