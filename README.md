# Placement Pilot

## Table of Contents
- [Description](#description)
- [Tech Stacks Used](#tech-stacks-used)
- [Configuration Steps](#configuration-steps)

## Description
The Placement Pilot is an innovative platform designed to streamline the recruitment process within educational institutions. It serves as a bridge between the Training and Placement (TnP) officer, companies seeking to recruit talent from the campus, and the students themselves. The portal provides a centralized hub where students can access crucial information about upcoming placement activities, company profiles, schedules, and application processes. Moreover, it facilitates seamless communication between stakeholders, automates administrative tasks, promotes transparency, and ensures equal access to employment opportunities for all students. With its user-friendly interface and comprehensive features, the Placement Pilot aims to enhance the efficiency, fairness, and effectiveness of campus placements.

## Tech Stacks Used
The Placement Pilot project utilizes the MERN Stack (MongoDB, Express.js, React.js, Node.js) for its development. MongoDB is used for handling the database.

## Configuration Steps
To configure this project locally, follow these steps:

1. *Install Node.js and npm*:
   - Download and install Node.js from the [official website](https://nodejs.org/en/download/).

2. *Create a New Directory for Your Project*:
   bash
   mkdir my-mern-project
   cd my-mern-project
   
3. *Initialize a New Node.js Project*:
   bash
   npm init -y
   
4. *Install Express.js*:
   bash
   npm install express
   
5. *Create a server.js File*:

This file will serve as the entry point for your Express.js server.

6. *Install React.js*:

React can be installed using create-react-app:
   bash
npx create-react-app client

7. *Install Dependencies for React Development*:
bash
cd client
npm install axios react-router-dom


8. *Set Up MongoDB*:

 Install MongoDB on your local machine or set up a cloud-hosted MongoDB service like MongoDB Atlas.
Obtain your MongoDB connection URI.

9. *Set Up Environment Variables*:

Create a .env file in the root directory of your project.
Add your MongoDB connection URI to the .env file.

10. *Run Your Project*:

Start your Express.js server:
bash
node server.js

Start your React development server:
bash
cd client
npm start


Access Your Application:

Open your web browser and navigate to http://localhost:3000 to access your site locally.
