# CST-391 Milestone 4: Inventory Tracker for Tech Supplies and Consumables

### **Cover Sheet:**
- **Class Number and Title:** CST-391
- **Application Name:** Inventory Tracker for Tech Supplies and Consumables
- **Author:** Trevor Marr


----

### Loom Video
https://www.loom.com/share/322ed85be8db4d8ca492ae7187e2333f?sid=674598cd-154d-4f86-9f77-d03acbfa4ac3

---
---

### **Instructor Feedback and Revisions**

#### **Instructor Feedback:**
1. Ensure the API follows RESTful principles and includes at least four endpoints.
2. Expand on security considerations for user authentication and authorization.
3. Improve database structure by considering additional relationships between entities.
4. Provide more details on how Angular and React versions will be implemented.

#### **Revisions Based on Feedback and New Things Learned:**
- Defined four API endpoints that adhere to REST conventions.
- Enhanced authentication security details, including JWT-based authentication.
- Refined the database structure by adding relationships between products and users.
- Clarified how both Angular and React implementations will function with the same backend.

---

### **Introduction:**
This web application is designed to help manage an inventory of tech supplies and consumables. It allows users to track various items, such as cables, devices, office supplies, and other technology-related products. The system will support functionality to list, add, edit, and remove products from inventory. It will integrate with a backend Express API to store and manage the inventory data in a MySQL database. The web application will be built using both Angular and React to demonstrate proficiency in both front-end frameworks.

### **Functionality Requirements:**
- **As a user, I want to view all inventory items so that I can see the current stock and their details.**
- **As a user, I want to add new inventory items to the system so that I can keep track of new products.**
- **As a user, I want to edit existing inventory items so that I can update their details (e.g., quantity, condition).**
- **As a user, I want to delete inventory items from the system so that I can remove obsolete or sold-out products.**
- **As an admin, I want to access a login page and authenticate myself to perform actions on the inventory (CRUD).**
- **As a user, I want the application to display the product details, including name, category, quantity, condition (new/used), and price.**
- **As an admin, I want to see the history of inventory changes (e.g., additions, deletions, updates) to maintain an audit trail.**


## REST API Documentation

### Postman Documentaion (If Perferred)
https://documenter.getpostman.com/view/21732810/2sAYdcsCgM

### Base URL
```
http://localhost:{port}/api
```

## **Products API**

### **1. Get All Products**
**Endpoint:**
```
GET /products
```
**Description:** Retrieves a list of all products in the inventory.

**Response Example:**
```json
[
  {
    "product_id": 1,
    "name": "USB-C Cable",
    "description": "Fast charging cable",
    "category": "Cables",
    "quantity": 50,
    "condition": "new",
    "price": 12.99,
    "added_date": "2025-01-19T12:00:00Z"
  }
]
```

---

### **2. Get Product by ID**
**Endpoint:**
```
GET /products/{id}
```
**Description:** Retrieves a single product by its ID.

**Response Example:**
```json
{
  "product_id": 1,
  "name": "USB-C Cable",
  "description": "Fast charging cable",
  "category": "Cables",
  "quantity": 50,
  "condition": "new",
  "price": 12.99,
  "added_date": "2025-01-19T12:00:00Z"
}
```

---

### **3. Add a New Product**
**Endpoint:**
```
POST /products
```
**Description:** Adds a new product to the inventory.

**Request Body:**
```json
{
  "name": "HDMI Cable",
  "description": "High-speed HDMI cable",
  "category": "Cables",
  "quantity": 30,
  "condition": "new",
  "price": 15.99
}
```

**Response Example:**
```json
{
  "message": "Product added successfully",
  "product_id": 2
}
```

---

### **4. Update a Product**
**Endpoint:**
```
PUT /products/{id}
```
**Description:** Updates an existing product in the inventory.

**Request Body:**
```json
{
  "quantity": 40,
  "price": 13.99
}
```

**Response Example:**
```json
{
  "message": "Product updated successfully"
}
```

---

### **5. Delete a Product**
**Endpoint:**
```
DELETE /products/{id}
```
**Description:** Deletes a product from the inventory.

**Response Example:**
```json
{
  "message": "Product deleted successfully"
}
```

---

## **User API**

### **6. User Login**
**Endpoint:**
```
POST /users/login
```
**Description:** Authenticates a user and returns an access token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### **7. Get Inventory Change History**
**Endpoint:**
```
GET /history
```
**Description:** Retrieves the inventory change history.

**Response Example:**
```json
[
  {
    "history_id": 1,
    "product_id": 1,
    "action": "add",
    "quantity_change": 50,
    "timestamp": "2025-01-19T12:00:00Z"
  }
]
```

---

### **8. Get Product Change History by ID**
**Endpoint:**
```
GET /history/{product_id}
```
**Description:** Retrieves the change history for a specific product.

**Response Example:**
```json
[
  {
    "history_id": 2,
    "product_id": 1,
    "action": "update",
    "quantity_change": -10,
    "timestamp": "2025-01-20T15:30:00Z"
  }
]
```


### **Database Design Updates:**
- **Entities:**
  - **Product**
    - product_id (PK)
    - name (string)
    - description (string)
    - category (string)
    - quantity (integer)
    - condition (enum: 'new', 'used')
    - price (decimal)
    - added_by (FK to User)
    - added_date (timestamp)
  - **User**
    - user_id (PK)
    - username (string)
    - password (hashed string)
    - role (enum: 'admin', 'user')
    - added_date (timestamp)
  - **Inventory History**
    - history_id (PK)
    - product_id (FK to Product)
    - user_id (FK to User)
    - action (enum: 'add', 'update', 'delete')
    - quantity_change (integer)
    - timestamp (timestamp)

### **Security Considerations:**
- **JWT Authentication:**
  - Users authenticate via a login endpoint that returns a JWT token.
  - All protected endpoints require the JWT token for access.
- **Role-Based Access Control (RBAC):**
  - Only admins can perform product creation, edits, and deletions.
  - Regular users can view products but cannot modify them.
- **Password Security:**
  - Passwords are hashed before being stored in the database.

### **Front-End Implementation:**
- **Angular Version:**
  - Uses Angular services to communicate with the Express API.
  - Utilizes Angular Material for UI components.
- **React Version:**
  - Uses Express? for API requests.
  - Implements React Router for navigation.

### **Risks:**
- **Authentication Security:** Ensuring JWT tokens are secure and properly validated.
- **Data Integrity:** Ensuring proper validation and sanitization of user inputs.
- **UI Consistency Across Frameworks:** Maintaining a similar look and feel between Angular and React implementations.

---

This proposal refines the original milestone by incorporating instructor feedback, detailing the REST API structure, and strengthening security considerations.

