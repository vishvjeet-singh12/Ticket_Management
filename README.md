# Ticket Management System

A simple ticket management system that allows users to create, read, update, and delete (CRUD) support tickets using Node.js, Express, and MongoDB.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
  - [Create Ticket](#create-ticket)
  - [Retrieve All Tickets](#retrieve-all-tickets)
  - [Retrieve Single Ticket](#retrieve-single-ticket)
  - [Update Ticket](#update-ticket)
  - [Delete Ticket](#delete-ticket)

## Features
- Create new support tickets.
- Retrieve all or a single ticket.
- Update existing tickets.
- Delete tickets.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **HTTP Client:** Postman (for testing APIs)

## Setup Instructions

### Prerequisites
- **Node.js**
- **MongoDB** (local or MongoDB Atlas)

#### 6. **API Documentation**

##### Create Ticket

### Create Ticket

- **Method:** `POST`
- **Endpoint:** `/api/ticketpost`
- **Description:** Creates a new support ticket.
- **Request Body:**
  ```json
  {
    "title": "Issue with login",
    "description": "User cannot log in with correct credentials",
  }
  
  - **Response:**
  {
    "message": "Successful",
    "data": {
        "title": "Issue with login",
        "description": "User cannot log in with correct credentials",
        "status": "open",
        "_id": "66ef8bc37905f9dd019b8370",
        "createdAt": "2024-09-22T03:15:15.218Z",
        "lastUpdatedAt": "2024-09-22T03:15:15.218Z",
        "__v": 0
    }
}

  ### Retrieve All Tickets

- **Method:** `GET`
- **Endpoint:** `/api/ticketget`
- **Description:** Retrieves all tickets.
- **Response:**
  ```json
  {
    "message": "All Tickets",
    "data": [
        {
            "_id": "66ef8bc37905f9dd019b8370",
            "title": "Issue with login",
            "description": "User cannot log in with correct credentials",
            "status": "open",
            "createdAt": "2024-09-22T03:15:15.218Z",
            "lastUpdatedAt": "2024-09-22T03:15:15.218Z",
            "__v": 0
        }
    ]
}

### Retrieve Tickets By Identifier

- **Method:** `GET`
- **Endpoint:** `/api/ticketById/:id`
- **Description:** Retrieves tickets by id.
- **Response:**
  ```json
  {
    "message": "Ticket",
    "data": {
        "_id": "66ef8bc37905f9dd019b8370",
        "title": "Issue with login",
        "description": "User cannot log in with correct credentials",
        "status": "open",
        "createdAt": "2024-09-22T03:15:15.218Z",
        "lastUpdatedAt": "2024-09-22T03:15:15.218Z",
        "__v": 0
    }
}


  ### Update Ticket

- **Method:** `PATCH`
- **Endpoint:** `/api/ticketupdate/:id`
- **Description:** Updates ticket information.
- **Request Body:**
  ```json
  {
    "title": "Updated ticket title",
    "description": "Updated description",
    "status":"Closed"
  }
- **Response:**
{
    "message": "Ticket is updated",
    "data": {
        "_id": "66ef8bc37905f9dd019b8370",
        "title": "Issue with login",
        "description": "User cannot log in with correct credentials",
        "status": "closed",
        "createdAt": "2024-09-22T03:15:15.218Z",
        "lastUpdatedAt": "2024-09-22T03:18:44.371Z",
        "__v": 0
    }
}

  ### Delete Ticket

- **Method:** `DELETE`
- **Endpoint:** `/api/ticketdelete/:id`
- **Description:** Deletes a ticket.
- **Response:**
  ```json
  {
    "success": true,
    "message": "Ticket deleted successfully"
  }
- **Response:**
{
    "message": "Successfully deleted"
}