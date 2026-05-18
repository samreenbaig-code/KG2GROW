# KG2GROW 🌈

KG2Grow is a fun and interactive educational web application designed for kids learning and development. The app includes games, login/register system, kid-friendly UI, progress tracking, and responsive design.

---

## 📚 Features

- 🎮 Interactive educational games
- 🔐 Login & Registration system
- 👧 Kid-friendly colorful UI
- 📱 Fully responsive design
- 💾 MySQL database integration
- ⚡ Angular frontend
- 🐘 PHP backend API
- 📊 Progress tracking system
- 🎵 Music controls
- 🌈 Animated interface for children

---

## 🛠 Technologies Used

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3

### Backend
- PHP
- MySQL
- XAMPP

---

## 📁 Project Structure

```bash
KG2GROW
│
├── backend/
│   ├── api/
│   ├── auth/
│   ├── config/
│   ├── database/
│   ├── index.php
│   ├── test_login.html
│   ├── test_progress.html
│   └── test_register.html
│
├── frontend/
│   └── angular-app/
│       ├── .angular/
│       ├── .vscode/
│       ├── node_modules/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   ├── assets/
│       │   ├── index.html
│       │   ├── main.ts
│       │   └── styles.css
│       │
│       ├── .editorconfig
│       ├── .gitignore
│       ├── angular.json
│       ├── package-lock.json
│       ├── package.json
│       ├── README.md
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       └── tsconfig.spec.json
│
├── .gitignore
├── README.md
└── package-lock.json
```

## 🚀 Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/samreenbaig-code/KG2GROW.git
```

---

### 2️⃣ Frontend Setup

Go to frontend folder:

```bash
cd frontend/angular-app
```

Install dependencies:

```bash
npm install
```

Run Angular app:

```bash
ng serve
```

Application will run at:

```bash
http://localhost:4200
```

---

### 3️⃣ Backend Setup

Move backend folder into XAMPP `htdocs`.

Start:
- Apache
- MySQL

Open phpMyAdmin:

```bash
http://localhost/phpmyadmin
```

Create database:

```sql
CREATE DATABASE clevercubs;
```

Import your database tables.

---

## 🔗 API Example

```typescript
this.http.post('http://localhost/clevercubs-web/backend/auth/register.php', {
  name: this.name,
  email: this.email,
  password: this.password
})
```

---

## 🎮 Main Pages

- Home Page
- Login Page
- Register Page
- Puzzle Games
- Progress Tracking
- Educational Activities

---

## 📸 Screenshots

Add your screenshots here.

Example:

```md
![Home Page](screenshots/home.png)
![Register Page](screenshots/register.png)
![Game Page](screenshots/game.png)
```

---

## 👩‍💻 Developed By

### Samreen Baig

- Mobile Web Developer Using AI
- Frontend & Backend Developer
- UI/UX Designer

### GitHub

```bash
https://github.com/samreenbaig-code
```

---

## 🌟 Future Improvements

- More educational games
- Parent dashboard
- Progress analytics
- Voice interaction
- AI learning assistant
- Multiplayer activities

---

## 📄 License

This project is created for educational and portfolio purposes.

---

## ❤️ Thank You

Thank you for visiting the KG2Grow project 🌈

