# blog-MERN-typescript

This is a blog about astronomy where everybody can add articles or contribute.

## Features

- Login/Register
- See a post
- See all posts
- See profile info
- Login/register
- Add post
- Add comment/reply
- Edit profile
- Edit post
- Delete post

## Tech

- React
- Node 
- Express
- Redux Toolkit
- Styled Components
- Typescript

## Demo
You can interact with the project
 [here](https://blog.chirilovnarcis.ro).


 
![alt text](https://chirilovnarcis.ro/img/blog-full.png)

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run and typescript.

### Install the dependencies

```sh
cd frontend
npm i
cd ../backend
npm i
```
### Add the enviromental variables
 - Create a .env file in the backend folder
 - The file must contatin the following: 
    - SECRET_JWT = [The jwt secret]
    - DATABASE_URL = [Your mongodb uri]
    - EMAIL_USER = [Your gmail user email]
    - EMAIL_PASSWORD = [Your gmail account password]
    - EMAIL_TO_SEND = [The email where the emails will be sent]
### Run the app
```sh
cd frontend
npm start
cd ../backend
npm start
```
## License
- MIT License
- Copyright 2022 © [Chirilov Narcis](https://chirilovnarcis.ro)