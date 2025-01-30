# Task Management Backend-API

This is a simple RESTful API for managing tasks. The API provides endpoints to register and login users, create, read, update, and delete tasks. It uses MongoDB for data storage and JWT for user authentication.

## Features
- User registration and login
- JWT-based authentication
- CRUD operations for tasks:
  - Create Task
  - Get all Tasks
  - Get Task by ID
  - Update Task
  - Delete Task
- Task attributes include title, description, due date, priority, and status

## EndPoint 

[https://fluid-ai-rmdb.onrender.com/](https://fluid-ai-rmdb.onrender.com/)

## Technologies Used
- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database to store user and task data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for user authentication.
- **Bcrypt.js**: Password hashing library.

## Installation

To install and run the server locally, follow the steps below.

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm run dev
```

### Run Locally

Clone the Project

```bash
git clone https://github.com/srudhi6383/fluid-ai
```

Go to the project directly

```bash
cd fluid-ai
```

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm run dev
```

## API Endpoints
1. **User Registration**
- POST ```/user/register```

  **Request Body:**
  ```
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
  }
  ```
  **Response:**
  - **Status**: ```201 Created```
  - **Body**
      ```
        { "msg": "User created successfully" }
      ```
2.  **User Login**
     - POST ```/user/login```

      **Request Body:**
  ```
  {
  "email": "john@example.com",
  "password": "password123"
  }
  ```
  **Response:**
  - **Status**: ```200 OK```
  - **Body**
      ```
        {
          "msg": "Login successful",
          "token": "your-jwt-token"
        }
      ```
3. **Create a Task**:
   - POST ```/task/create```

     Headers:
     Authorization: ```Bearer <your_jwt_token_here>```
   **Request Body**:
    ```
    {
      "title": "Complete Documentation",
      "description": "Finish writing the API documentation.",
      "dueDate": "2025-02-15T18:00:00Z",
      "priority": "High",
      "status": "Pending",
      "userId": "60f6c72a073e8e2a94e789dc"
    }
    ```
   **Response**:
      - **Status** : ```201 Created```
      - **Body**
        ```
           {
            "msg": "Task created successfully",
            "task": { ...task details... }
          }
        ```

  4. **Get All Task**:
       - GET ```/task/```

     Headers:
        Authorization: ```Bearer <your_jwt_token_here>```
    **Response:**
        - **Status**: ```200 OK```
        - **Body:**
            Array of tasks:

          ```
            [
              { ...task1 },
              { ...task2 }
            ]
          ```
   
   5.  **Get Task by ID**:
        - GET ```/task/:id```

       Headers:
         Authorization: ```Bearer <your_jwt_token_here>```
      **Response:**
        - **Status**: ```200 OK```
        - **Body:**
          ```
           { ...task details... }
          ```

  6. **Update Task**:
       - **PATCH** ```/task/update/:id```
          Headers:
           Authorization: ```Bearer <your_jwt_token_here>```
     
         - **Request Body**:
             ```
               {
                "title": "Updated Task",
                "description": "Updated task description",
                "dueDate": "2025-02-20T18:00:00Z",
                "priority": "Medium",
                "status": "In Progress"
              }
             ```
      - **Response:**
        - **Status**: ```200 OK```
        - **Body:**
          ```
               {
            "msg": "Task updated successfully",
            "task": { ...updated task details... }
                }
          ```
  7. **Delete Task**:
        - DELETE   ```/task/delete/:id```
        Headers:
           Authorization: ```Bearer <your_jwt_token_here>```

      - **Response:**
        - **Status**: ```200 OK```
        - **Body:**
          ```
              {
                "msg": "Task deleted successfully"
              }
         ```
