# 📒 Notes App (Full-Stack)

A full-stack Notes Management application built with **Spring Boot** (Backend) and **Angular Standalone Components** (Frontend). Supports creating, listing, updating, and deleting notes with a clean UI and modular code structure.

---

## 🚀 Tech Stack

### Backend (`notes-backend`)
- Java 17
- Spring Boot 3+
- Spring Web
- Spring Data JPA
- MySQL
- Lombok
- Maven

### Frontend (`notes-frontend`)
- Angular 18
- Standalone Components
- Angular Router
- HttpClient
- Tailwind CSS (optional)

---

## 📂 Project Structure

```bash
notes-app/
│
├── notes-backend/
│ ├── src/
│ ├── pom.xml
│ ├── application.properties
│ └── README.md (optional)
│
├── notes-frontend/
│ ├── src/
│ ├── angular.json
│ ├── package.json
│ └── README.md (optional)
│
└── README.md <-- (THIS FILE)
```

---

## ⚙️ Backend Setup (Spring Boot)

1️⃣ Navigate to backend folder  


cd notes-backend

2️⃣ Create database in MySQL  

CREATE DATABASE notes_app;

3️⃣ Configure MySQL in `application.properties`

spring.datasource.url=jdbc:mysql://localhost:3306/notes_app
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


4️⃣ Run backend  

mvn spring-boot:run


_Backend runs at:_  
👉 [http://localhost:8080](http://localhost:8080)

---

## 💻 Frontend Setup (Angular)

1️⃣ Navigate to frontend folder  

cd ../notes-frontend

2️⃣ Install dependencies  

npm install

3️⃣ Run Angular app  

ng serve --port 4300

_Frontend runs at:_  
👉 [http://localhost:4300](http://localhost:4300)

---

## 🔗 API Endpoints (Spring Boot)
```bash
| Method | Endpoint           | Description       |
| ------ | ----------------- | ---------------- |
| GET    | `/api/notes`      | Get all notes    |
| GET    | `/api/notes/{id}` | Get note by ID   |
| POST   | `/api/notes`      | Create note      |
| PUT    | `/api/notes/{id}` | Update note      |
| DELETE | `/api/notes/{id}` | Delete note      |
```
---

## ✨ Angular Features Implemented

- Notes List: Displays all notes with Edit and Delete buttons
- Create Note: Simple form to add new notes
- Update Note: Form with pre-filled data using route parameters
- Delete Note: Deletes note using service and auto-refreshes list
- Service Layer: Reusable HttpClient service communicates with backend

---

## 🧠 Folder Structure (`notes-frontend`)
```bash
src/app/
│
├── components/
│ ├── note-list/
│ ├── create-note/
│ └── update-note/
│
├── service/
│ └── notes.service.ts
│
├── app.routes.ts
└── app.ts
```


---

## 🧪 How to Run the Full Stack

1️⃣ Start backend  

cd notes-backend
mvn spring-boot:run

cd notes-backend
mvn spring-boot:run

cd ../notes-frontend
ng serve --port 4300

3️⃣ Open browser  
👉 [http://localhost:4300](http://localhost:4300)

---

## 📦 Git Workflow (Recommended)

_First-time setup:_

git init
git remote add origin <your_repo_url>
git add .
git commit -m "Initial commit: Full-stack Notes App"
git push -u origin main


_Save future changes:_

git add .
git commit -m "Updated backend/frontend"
git push


---

## 📘 Future Enhancements

- Search notes
- Tags & categories
- JWT authentication
- Pagination
- Dark mode

---



