# PropSpace Fullstack App

## Overview

PropSpace is a full-stack property listing application built with:

- Angular (Frontend)
- Node.js + Express (Backend)
- MongoDB (Database)
- JWT Authentication

---

## Features

- User registration and login
- JWT authentication system
- Create, read, update, delete properties
- Property filtering (city, price, type)
- Owner-based access control
- Secure REST API

---

## API Endpoints

### Auth Routes

- POST /api/auth/register
- POST /api/auth/login

### Property Routes

- GET /api/properties
- POST /api/properties
- GET /api/properties/my
- PUT /api/properties/:id
- DELETE /api/properties/:id

---

## Tech Stack

- Angular
- Node.js
- Express.js
- MongoDB
- JWT
- Mongoose

---

## Project Setup

### Backend

```bash
cd backend
npm install
npm run dev

### Frontend

```bash
cd frontend
npm install
ng serve
