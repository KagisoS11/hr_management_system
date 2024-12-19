# HR Management System

This is a web-based HR Management System built with **Next.js**, **React**, and **TypeScript**. The application allows businesses to manage employee information, department details, and other HR functionalities efficiently. It includes features for creating, editing, and managing employee and department records.

---

## Features

1. **User Authentication**  
   - Secure login for accessing the system.
   
2. **Employee Management**  
   - Create, edit, and deactivate employees.  
   - List employees with filters (e.g., Status, Manager, Department).  

3. **Department Management**  
   - Add new departments, assign managers, and manage their status.  
   - View a list of departments with filters.

4. **Responsive Design**  
   - Optimized for desktop and mobile devices.

5. **Local Data Storage**  
   - Employee and department data are managed using `localStorage` for development purposes.

---

## Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v16+)
- **npm** (v8+) or **yarn**

---

## How to Run the Project Locally

Follow these steps to set up and run the project on your local machine:

### Step 1: Clone the Repository
```bash
git clone https://github.com/KagisoS11/hr_management_system.git
cd hr_management_system
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
### Step 4: Open the Application
Open your browser and navigate to http://localhost:3000.

---

Application Flow

### 1. Login Page
Users log in with their credentials to access the HR Management dashboard.
The system ensures only authenticated users gain access.

### 2. Dashboard
After logging in, users are presented with a dashboard containing two main sections:
Employees List: View a table of employees with filter options (e.g., Status, Department, Manager).
Departments List: View a table of departments with filter options (e.g., Status, Manager).

### 3. Employee Management
Create Employee: Add new employees by filling out their details (e.g., name, surname, phone, email, manager, and status).
Edit Employee: Modify existing employee details through the edit page.
Deactivate Employee: Deactivate an employee if they are no longer active in the organization.

### 4. Department Management
Create Department: Add new departments and assign managers.
Edit Department: Modify existing department details through the edit page.
Deactivate Department: Deactivate a department if it is no longer required.

### 5. Filters
Apply filters to refine the employee or department lists:
Filter employees by status, department, or manager.
Filter departments by status or manager.

### 6. Responsive Design
The application is fully responsive, ensuring it works well on both desktops and mobile devices.

---
# Application Examples

## 1. Login Page

![Screenshot 2024-12-19 174750](https://github.com/user-attachments/assets/e626ef6b-a9d0-4643-a6e9-32abe5f65d11)

## 2. Department Index Page

![Screenshot 2024-12-19 174830](https://github.com/user-attachments/assets/d06f30fc-846e-4d74-9ce7-cc081e3203ce)

## 3. Department Create/Edit Page

![Screenshot 2024-12-19 180253](https://github.com/user-attachments/assets/27f21e27-acfe-43d8-93e6-2a4a260492db)

## 4. Employee Index Page

![Screenshot 2024-12-19 174926](https://github.com/user-attachments/assets/4fcfdb93-d415-4175-9fff-3ee8b531870a)

## 5. Employee Create/Edit Page

![Screenshot 2024-12-19 175033](https://github.com/user-attachments/assets/a3f21604-5ba4-49bd-8e9d-ad4deed60c6e)
