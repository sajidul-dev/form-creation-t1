# Bit Code Technologies Task

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies](#technologies)
3. [Requirements](#requirements)
4. [Getting Started](#getting-started)
   - [Task-1](#task-1)
   - [Task-2](#task-2)
5. [API Endpoints](#api-endpoints)
6. [Approach](#approach)
7. [Database Design](#database-design)
8. [Database Schema](#database-schema)

---

## 📋 Project Overview

This application automates report generation and simplifies form creation. Built using Node.js with Express.js for backend API management, it leverages MySQL for handling database operations. Users can design custom forms, submit responses, and generate detailed reports through an intuitive and dynamic user interface.

---

## 🚀 Technologies

### **Backend**

- **Node.js & Express.js**: For robust API creation and business logic management.

### **Database**

- **MySQL**: A relational database for efficient storage and retrieval of form and report data.

### **Tools**

- **VS Code**: Code editor.
- **GitHub**: Version control.
- **XAMPP**: For MySQL and Apache server management.
- **Postman**: For API testing.

---

## 🛠️ Getting Started

### Task-1

- Step 1: Visit form.app form live link [here](https://xldx9wlr.forms.app/my-fabulous-form)
- Step 2: Submit the form.
- Step 3: Login 123formbuilder [here](https://app.123formbuilder.com/index.php?p=login). Credential (email: sajidul150764@gmail.com password: 12345678Aa@)
- Step 4: Check the dashboard.

### Task-2

### **Prerequisites**

Ensure the following tools are installed on your system:

- Node.js (v18 or higher)
- MySQL
- XAMPP (with MySQL and Apache enabled)

---

### **Steps to Set Up**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sajidul-dev/genrate-report-server.git
   cd genrate-report-server
   ```
2. **Install Dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **_Run XAMPP: Ensure both MySQL and Apache are running in XAMPP._**
4. **Set Up Environment Variables: Copy .env.example to .env and configure the necessary values:**
   ```bash
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   FORM_BUILDER_EMAIL=sajiul150764@gmail.com
   FORM_BUILDER_PASSWORD=12345678Aa@
   DB_NAME=E-commerce
   DB_USER=root
   DB_PASSWORD=
   DB_HOST=localhost
   ```
5. **Database Setup: Use Sequelize migrations to generate and apply the database schema:**
   ```bash
   # Generate migrations
   yarn migrate:up
   # or
   npm run migrate:up
   ```
   To undo migrations:
   ```bash
   yarn migrate:down
   # or
   npm run migrate:down
   ```
6. **Start the Development Server:**
   ```bash
   yarn start
   # or
   npm run start
   ```

## **API Endpoints**

- **Webhook**
  `POST /api/v1/get-form-data/webhook`
  This endpoint will work on

- **Create User**  
  `POST /api/v1/users/create-user`

  **Postman Example:**

  ```json
  {
    "user": {
      "name": "Alam h",
      "phone": "012555653"
    }
  }
  ```

- **Create Product**

  `POST /api/v1/products/create-product`

  **Postman Example**

  ```json
  {
    "product": {
      "product_name": "Laptop",
      "product_code": "Elect",
      "product_price": 100
    }
  }
  ```

- **Create Order**

  `POST /api/v1/purchase/create-purchase`

  **Postman Example**

  ```json
  {
    "purchase": {
      "order_no": 300,
      "user_id": 2,
      "product_id": 2,
      "purchase_quantity": 5
    }
  }
  ```

- **Insert data from API**

  `POST /api/v1/report/insert-data`

  **Postman Example**

  ```json
  {
    "data": {
      "user": {
        "name": "customer name",
        "phone": "Customer phone"
      },
      "product": {
        "product_code": "Product code",
        "product_name": "Product name",
        "product_price": 500
      },
      "order": {
        "order_no": 1,
        "purchase_quantity": 1
      }
    }
  }
  ```

- **Get Users**

  `GET /api/v1/users/get-users`

- **Get Products**

  `GET /api/v1/products/get-products`

- **Get Order/Purchase History**

  `GET /api/v1/purchase/get-purchases`

## **📝 Approach**

The project was developed using a modular approach:

1. **Frontend:** Built dynamic and reusable components in React.js.
2. **Backend:** Designed RESTful APIs with Express.js and Node.js.
3. **Database:** Normalized database schema for efficient data retrieval and management.
4. **Architecture:** MVC (Model-View-Controller) pattern to separate concerns and improve code maintainability.

## **📊 Database design**

You can view the complete database design [here](https://dbdiagram.io/d/Report-Database-Design-6744d9a7e9daa85acaabfe7f).

## **Database Schema**

**USERS (User Table)**

| Column Name  | Type        | Description          |
| ------------ | ----------- | -------------------- |
| `user_id`    | Primary Key | Unique ID for user   |
| `name`       | String      | User's name          |
| `phone`      | String      | User's phone number  |
| `created_at` | Timestamp   | Record creation time |
| `updated_at` | Timestamp   | Last update time     |

**Products (Products Table)**

| Column Name     | Type        | Description           |
| --------------- | ----------- | --------------------- |
| `product_id`    | Primary key | Unique ID for product |
| `product_code`  | String      | Product code          |
| `product_name`  | String      | Product name          |
| `product_price` | Decimal     | Product price         |
| `created_at`    | Timestamp   | Record creation time  |
| `updated_at`    | Timestamp   | Last update time      |

**PURCHASE HISTORY (Purchase History Table)**

| Column Name         | Type        | Description                      |
| ------------------- | ----------- | -------------------------------- |
| `order_id`          | Primary key | Unique ID for order              |
| `order_no`          | Integer     | Order number                     |
| `user_id`           | Foreign Key | References `Users.user_id`       |
| `product_id`        | Foreign Key | References `Products.product_id` |
| `purchase_quantity` | Integer     | Quantity purchased               |
| `total_price`       | Decimal     | Total price of the purchase      |
