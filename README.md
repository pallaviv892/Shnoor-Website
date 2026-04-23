# SHNOOR International LLC — Full Stack Website

A complete full-stack website built with **React**, **Node.js / Express**, and **PostgreSQL**.

---

## 📁 Project Structure

```
shnoor/
├── frontend/          # React app (Create React App)
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx / Navbar.css
│       │   └── Footer.jsx / Footer.css
│       ├── pages/
│       │   ├── Home.jsx / Home.css
│       │   ├── About.jsx / About.css
│       │   ├── Services.jsx / Services.css
│       │   ├── Contact.jsx / Contact.css
│       │   ├── Careers.jsx / Careers.css
│       │   └── LogisticsExport.jsx / LogisticsExport.css
│       ├── App.js
│       ├── api.js
│       └── index.css
│
└── backend/           # Node.js / Express API
    ├── db/
    │   ├── pool.js     # PostgreSQL connection
    │   └── schema.sql  # DB setup & seed data
    ├── routes/
    │   ├── contact.js
    │   ├── careers.js
    │   ├── news.js
    │   └── newsletter.js
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## 🚀 Quick Start

### 1. Setup PostgreSQL Database

```bash
# Open psql
psql -U postgres

# Run schema file
\i backend/db/schema.sql
```

### 2. Configure Backend Environment

```bash
cd backend
cp .env.example .env
# Edit .env with your DB credentials and email settings
```

### 3. Start Backend

```bash
cd backend
npm install
npm run dev     # Development with nodemon
# OR
npm start       # Production
```

Backend runs on: **http://localhost:5000**

### 4. Start Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on: **http://localhost:3000**

---

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slider, services overview, news, testimonial |
| About | `/about` | Mission, vision, values, team |
| Services | `/services` | All services listing |
| Service Detail | `/services/:slug` | Individual service page |
| Logistics | `/logistics` | Logistics management |
| Export | `/export` | Export management & process |
| Careers | `/careers` | Job listings + application modal |
| Contact | `/contact` | Contact form + map |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts (admin) |
| GET | `/api/careers/jobs` | Get job listings |
| POST | `/api/careers/apply` | Submit job application |
| GET | `/api/news` | Get all news articles |
| GET | `/api/news/:slug` | Get single article |
| POST | `/api/newsletter` | Subscribe to newsletter |
| GET | `/api/health` | Health check |

---

## 🎨 Design System

- **Colors**: Navy (`#1A2B5F`), Gold (`#C8922A`), White
- **Fonts**: Montserrat (headings + body), Merriweather (quotes)
- **Brand**: SHNOOR International LLC

---

## 🛠 Tech Stack

- **Frontend**: React 18, React Router v6, Axios
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with `pg` driver
- **Styling**: Custom CSS with CSS Variables

---

## 📦 Deployment Tips

1. Build frontend: `cd frontend && npm run build`
2. Serve `build/` folder via Express or Nginx
3. Use PM2 for backend process management
4. Set `NODE_ENV=production` in your `.env`
5. Use environment variables for all secrets
