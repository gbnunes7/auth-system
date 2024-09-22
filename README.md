
# Authentication System

Welcome to my repository, Authentication System. The Auth System project provides secure and efficient user Authentication and authorization.


# Introduction

The **Auth System** is a complete authentication system that uses the MERN stack (MongoDB, Express, React, Node.js) in the backend to build the API. The frontend is developed with React, Vite, TypeScript, and Tailwind CSS focusing on creating a login page that consumes the backend functionalities to securely authenticate users.

This system is ideal for projects that require user authentication, with support for registration, login, and session management efficiently.
## Table of Content

- [Introduction](#introduction)
- [Key Features](#keys-feature)
- [Technologies Used](#technologies-used)
- [APIs used](#apis-used)
- [Installation](#installation)
- [Deployed Version](#deployed-version)
- [What's coming up](#whats-coming-up)
- [Conclusion](#conclusion)

## Key Features

- **Login:** Authenticate users by verifying their credentials (username/email and password) on MongoDB and create a session for them.

- **Signup:** Allow new users to create an account by providing necessary information (e.g., email, password, username) and storing this data securely in the database.

- **Logout:** End the user’s session and remove their authentication token, ensuring they can no longer access protected resources without logging in again.

- **Consistency:** The user is not logged out when the page is reloaded or similar actions occur, as a JWT token is stored in localStorage.

- **Delete User:** Permanently remove a user’s account and associated data from the system. **(Available only via Postman)**

- **Get All Users:** Retrieve a list of all registered users from the database. **(Available only via Postman)**

- **Get User By ID:** Fetch a user’s details based on their unique identifier (ID) for administrative or user management purposes. **(Available only via Postman)**

- **Update User:** Modify the existing user information (e.g., email, password) and save the changes to the database. **(Available only via Postman)**


## Technologies Used

**Back-end:** 

- **Node.JS**: JavaScript runtime environment for building scalable network applications. It allows you to run JavaScript on the server side.

- **Express**: A web application framework for Node.js that simplifies routing, middleware management, and handling HTTP requests and responses.
- **MongoDB**: NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with unstructured data and scale horizontally.
- **Bcrypt**: A library used for hashing passwords securely, helping to protect user credentials from unauthorized access.
- **Cors**: A middleware that enables Cross-Origin Resource Sharing, allowing your server to accept requests from different domains securely.
- **Dotenv**: A module that loads environment variables from a .env file into process.env, helping to manage configuration settings like API keys and database connections.
- **Jsonwebtoken**: A library for creating and verifying JSON Web Tokens (JWT), which are used for secure authentication and information exchange.
- **Nodemon**: A utility that automatically restarts your Node.js application when file changes are detected, making the development process smoother.


**Front-end:** 

- **React**: Library for building the user interface.

- **TypeScript**: Adds type safety to JavaScript code.
- **Vite**: Fast build tool with minimal configuration for front-end projects.
- **React Router DOM**: Library for managing navigation and routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive and styled interfaces quickly.
- **Axios**: Library for making HTTP requests and handling API data.
- **React Icons**: Library for easily using icons in React projects.
- **Framer Motion**: Library for animations and transitions in React.

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/gabrielkrapp/auth-system.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd auth-system
   ```

3. **Install the dependencies**:

   - For Frontend:
   
     ```bash
     cd frontend && npm install
     ```

   - For Backend:

     ```bash
     cd backend && npm install
     ```

## Running the Application

- **To run the frontend**:

  ```bash
  npm run dev
  ```

  This starts the React application on `http://localhost:5173` (or another available port).

- **To run the backend**:

  ```bash
  npm start
  ```

  This initializes the Express server, typically on `http://localhost:3000`.

- **To run both simultaneously**:

  ```bash
  npm run start
  ```

  This will invoke `concurrently` to start both the front and back ends.

Ensure that the frontend and backend are configured to run on separate ports to avoid conflicts.

## Deployed Version

You can also visit the deployed version of the application [here](https://auth-system-pi-one.vercel.app).


## What's coming up

In the next version, new features will be added:

- an admin position


## Conclusion

This project showcases the effectiveness of combining front-end and back-end technologies, focusing on security, usability, and data management. Thank you for exploring the Authentication System. Feel free to contribute or provide feedback to help enhance its capabilities further.

---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/gbnunes7/budget-manager/issues).

**Made by [Gabriel Melo](https://github.com/gbnunes7)**.
