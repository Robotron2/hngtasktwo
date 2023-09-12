---

# Person API Documentation

## Introduction

The Person API is a simple yet powerful RESTful web service that allows you to manage information about individuals, or "persons." This API provides endpoints for creating, retrieving, updating, and deleting person records. It is designed to be user-friendly and can be integrated into various applications that require basic person management functionality.

## API Features

The Person API offers the following features:

1. **Create a Person**:
   - Create a new person record with a name and age.

2. **Retrieve Persons**:
   - Retrieve a list of all persons stored in the database.

3. **Update Person Information**:
   - Update a person's age by providing their unique ID.

4. **Delete Person**:
   - Delete a person's record by specifying their unique ID.

## Prerequisites

Before you start using the Person API, ensure you have the following:

- Node.js and npm installed on your system.
- MongoDB installed and running (if you are using MongoDB as your database).
- Basic knowledge of RESTful API concepts.

## Getting Started

To begin using the Person API, follow these steps:

1. Clone the GitHub repository: `https://github.com/Robotron2/hngtasktwo.git`
2. Install project dependencies using `npm install`.
3. Configure your MongoDB connection settings in the `app.js` file.
4. Start the API server using `node app.js`.

## API Endpoints

### Create a Person

- **HTTP Method**: POST
- **Endpoint**: `https://theophilus-hng-task-two.onrender.com/api`
- **Description**: Create a new person with a name and age.
- **Request Body**:
  ```json
  {
    "name": "Mark"
  }
  ```
- **Response**:
  - Status Code: 200 Created
  - Body:
    ```json
    {
      "name": "John"
      "_id": "uniqueId123" 
    }
    ```

### Retrieve Persons

- **HTTP Method**: GET
- **Endpoint**: `https://theophilus-hng-task-two.onrender.com/api/:userId`
- **Description**: Retrieve the record of person stored in the database.
- **Response**:
  - Status Code: 200 OK
  - Body:
    ```json
    
      {
        "name": "John",
        "_id": "uniqueId123"
      },
      
    
    ```

### Update Person Information

- **HTTP Method**: PUT
- **Endpoint**: `https://theophilus-hng-task-two.onrender.com/api/:userId`
- **Description**: Update a person's name by providing their unique ID.
- **Request Body**:
  ```json
  {
    "newName": "John Doe"
  }
  ```
- **Response**:
  - Status Code: 200 OK
  - Body:
    ```json
    {
      "name": "John Doe"
      "_id": "uniqueId123"
    }
    ```

### Delete Person

- **HTTP Method**: DELETE
- **Endpoint**: `https://theophilus-hng-task-two.onrender.com/api/:userId`
- **Description**: Delete a person's record by specifying their unique ID.
- **Response**:
  - Status Code: 200 OK
  - Body:
    ```json
    {
    "success": true,
    "message": "Person deleted successfully!"
    }
    ```

**More documentation can be found on** `https://documenter.getpostman.com/view/23278903/2s9YC2ztsR`

## Testing

To ensure the proper functioning of the API, automated tests have been implemented. You can run these tests using the following command:

```
npm test
```

## Conclusion

The Person API simplifies the process of managing person records within your application. Whether you're building a personal information management system, a contact list, or any other application that requires person-related data, the Person API can help you get started quickly.




---


