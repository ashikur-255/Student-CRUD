# 🎓 Student CRUD Web Application

A full-stack **Student Management System** developed using **ASP.NET Core Web API** for the backend, **Angular** for the frontend, and **Microsoft SQL Server** for database management.

This application provides an efficient way to manage student information with complete CRUD (Create, Read, Update, Delete) functionality through a responsive and user-friendly interface.

## 🚀 Technologies Used

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- RESTful API

### Database
- Microsoft SQL Server

## ✨ Key Features

- **Add Student:** Create and save new student records.
- **View Students:** Display all student information.
- **Update Student:** Edit and update existing student details.
- **Delete Student:** Remove student records.
- **RESTful API:** Backend communication using ASP.NET Core Web API.
- **Database Integration:** Store and manage student information using SQL Server.
- **Responsive UI:** User-friendly interface for different screen sizes.

## 🏗️ Project Architecture

```text
Student-CRUD-Application/
│
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Migrations/
│   ├── Program.cs
│   └── appsettings.json
│
├── Frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
│
└── README.md
```

*Note: The folder structure above is illustrative. Adjust it according to your actual project structure.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ashikur-255/Student-CRUD-Application.git
```

### 2. Backend Setup

- Open the backend project in Visual Studio.
- Configure the SQL Server connection string in `appsettings.json`.
- Apply Entity Framework Core migrations if required.

```bash
dotnet restore
dotnet ef database update
dotnet run
```

### 3. Frontend Setup

Navigate to the Angular project directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Run the Angular application:

```bash
ng serve
```

Open your browser:

```text
http://localhost:4200
```

## 🗄️ Database

This application uses **Microsoft SQL Server** to store and manage student information.

Make sure SQL Server is installed and the connection string is correctly configured before running the backend.

## 🔗 Developer

**Ashikur Rahman**

- GitHub: [ashikur-255](https://github.com/ashikur-255)

## 📄 License

This project is developed for learning and practical full-stack web development purposes.
