# FieldSync

FieldSync is a modern **Field Service Management Platform** designed to help service-based businesses manage customer requests, field technicians, and daily job dispatch operations from one place.

The project focuses on providing a clean and responsive interface for managing field operations efficiently.

---

## 🚀 Features

### 🔐 Authentication
- Login page for FieldSync users
- Email and password fields
- Remember me option
- Forgot password option
- Google and Microsoft login interface

### 📊 Dashboard
- Overview of field operations
- Service request statistics
- Technician information
- Job and operational summaries
- Quick navigation to important modules

### 📋 Service Requests
- View customer service requests
- Search requests
- Filter requests by status and priority
- View customer information
- View problem and location
- Track priority and request status
- View assigned technician
- Responsive mobile request cards

### 👨‍🔧 Technicians
- View field technicians
- Technician availability
- Active job information
- Technician location
- Technician contact information
- Technician profile interface
- Available and Busy status indicators

### 🚚 Dispatch
- Monitor daily field jobs
- View total jobs
- View assigned jobs
- Track jobs that are en route
- Monitor on-site jobs
- View technician assignments
- Track individual field jobs
- Filter jobs by status

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### UI & Icons
- Lucide React

### Development Tools
- Vite
- npm
- Git
- GitHub

---

## 📂 Project Structure

```text
FieldSync/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── ServiceRequests.jsx
│   │   ├── Technicians.jsx
│   │   └── Dispatch.jsx
│   │
│   ├── styles/
│   │   ├── Dashboard.css
│   │   ├── Login.css
│   │   ├── ServiceRequests.css
│   │   ├── Technicians.css
│   │   └── Dispatch.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
How to Run

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Go to the project folder:

cd FieldSync

Install dependencies:

npm install

Start the project:

npm run dev

The application will run on the local Vite development server.

Future Plans
Backend API
Database integration
User authentication
Role-based access
Technician assignment
Real-time job tracking
Notifications
Reports and analytics
Author

Ankita Ghosh

B.Tech Computer Science & Engineering