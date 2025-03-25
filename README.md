# Hello Docker App

## Description
This is a simple Node.js application that returns a "Hello Dockers" message. It demonstrates how to create a basic RESTful API using Node.js and Express, and how to containerize the application using Docker.

## Features
- Simple GET API endpoint that returns a greeting message.
- Dockerfile for easy deployment in a container.
- .dockerignore file to exclude unnecessary files from the Docker build context.

## Installation Instructions
1. Ensure you have Node.js installed on your machine.
2. Clone the repository or download the project files.
3. Navigate to the project directory.
4. Install dependencies by running:
   ```
   npm install
   ```

## How to Run
1. Create a `.env` file in the root directory and set the `PORT` variable.
2. Start the application with:
   ```
   node src/app.js
   ```
3. Open your browser and navigate to `http://localhost:3000` to see the message.

## Usage
1. Run the application:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the message.

## Docker Commands
1. **Build the Docker image**:
   ```
   docker build -t hello-docker-app .
   ```
2. **Run the Docker container**:
   ```
   docker run -p 3000:3000 hello-docker-app
   ```
3. **Or use Docker compose only to do everything**:
   ```
      docker-compose up
   ```
4. **Access the application**: Open your browser and navigate to `http://localhost:3000` to see the message.

## License
This project is licensed under the MIT License.
