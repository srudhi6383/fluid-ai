# Task Managment Backend-API

It's RESTful API made for simple Task management with CRUD operations and have a JWT token based authentication for basic security  


## EndPoint 

https://fluid-ai-rmdb.onrender.com/


## API Reference

#### Register user

```http
  POST /api/auth/register
```

| body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`| `string` | **Required**. username     |
| `password`| `string` | **Required**. must of length 8|

```http
  POST /api/auth/login
```

| body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`| `string` | **Required**. username     |
| `password`| `string` | **Required**. must of length 8|


#### Create Task

```http
  POST /api/tasks/
```

| Header   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. your JWT Token recivied after login successfully done |


| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title for Task |
| `description`| `string`| **Required** description |
|`dueDate` | `string` |  dueDate |
| `priority`| `string` | High, Low and Urgent _Default_:- Low |
|`status` | `string` | Pending, In Progress and Completed _Default_ :- Pending |





#### Get all Task

```http
  GET /api/task
```

| Header   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. your JWT Token recivied after login successfully done |


#### Get Task by Id

```http
  GET /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

| Header   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. your JWT Token recivied after login successfully done |

#### Update task

```http
  PUT /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

| Header   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. your JWT Token recivied after login successfully done |

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title for Task |
| `description`| `string`| **Required** description |
|`dueDate` | `string` |  dueDate |
| `priority`| `string` | High, Low and Urgent _Default_:- Low |
|`status` | `string` | Pending, In Progress and Completed _Default_ :- Pending |


#### Delete task

```http
  Delete /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to Delete |

| Header   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `string` | **Required**. your JWT Token recivied after login successfully done |



## Installation



```bash
  npm install (In root folder)
```

```start server
  npm run dev 
```
    

  ## Testing 



```bash
  npm test (In root folder)
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/srudhi6383/fluid-ai
```

Go to the project directory

```bash
  cd fluid-ai
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

