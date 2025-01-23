
# CST-391 Milestone 1 Proposal: Inventory Tracker for Tech Supplies and Consumables

### **Cover Sheet:**
- **Class Number and Title:** CST-391
- **Application Name:** Inventory Tracker for Tech Supplies and Consumables
- **Author:** Trevor Marr

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

### **Initial Database Design:**
- **Entities:**
  - **Product**
    - product_id (PK)
    - name (string)
    - description (string)
    - category (string)
    - quantity (integer)
    - condition (enum: 'new', 'used')
    - price (decimal)
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
    - action (enum: 'add', 'update', 'delete')
    - quantity_change (integer)
    - timestamp (timestamp)

- **ER Diagram:** 
![alt text](<Screenshot 2025-01-19 at 5.29.57 PM.png>)

### **Initial UI Sitemap:**
- **Home Page**
  - List of Inventory Items (View all items with CRUD options if admin)
  - Search Bar to filter inventory by name or category
- **Add Product Page**
  - Form to add new inventory item (name, description, category, etc.)
- **Edit Product Page**
  - Form to update product details
- **Login Page**
  - User login form (username and password)
- **Admin Dashboard**
  - Overview of inventory (total products, low-stock items, etc.)
  - View inventory change history (actions: add, update, delete)

### **Initial UI Wireframes:**
- **Home Page:**
  ![Home Page Wireframes](<Screenshot 2025-01-21 at 7.39.57 AM.png>)
- **Add Product Page:**
  - Form fields for adding product details.
  - Submit button to save new product.
- **Edit Product Page:**
  - Form similar to the "Add Product" page, but pre-filled with the current product data.
  - Save button to update the product.
- **Login Page:**
  - Username and password input fields.
  - Login button to authenticate.
- **Admin Dashboard:**
  - Summary stats of the inventory (total items, low-stock warnings, etc.)
  - Table of inventory history showing actions performed on products.

### **Initial UML Classes:**
- **Product Class:**
  - `product_id` (int)
  - `name` (string)
  - `description` (string)
  - `category` (string)
  - `quantity` (int)
  - `condition` (string: 'new' | 'used')
  - `price` (float)
  - `added_date` (date)
  
- **User Class:**
  - `user_id` (int)
  - `username` (string)
  - `password` (string)
  - `role` (string: 'admin' | 'user')

- **InventoryHistory Class:**
  - `history_id` (int)
  - `product_id` (int)
  - `action` (string: 'add' | 'update' | 'delete')
  - `quantity_change` (int)
  - `timestamp` (datetime)

### **Risks:**
- **User Authentication Security:** The app relies on user authentication, and ensuring the security of login credentials and role management (admin vs. user) could be a challenge.
- **UI Consistency Across Frameworks:** Ensuring that the UI design remains consistent when transitioning from Angular to React might pose some challenges in design adaptation.
