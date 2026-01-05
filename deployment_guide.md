# Deployment Guide: AI Tool Marketplace on Vercel

This guide covers deploying both frontend and backend to Vercel.

## Architecture

- **Frontend**: Next.js deployed on Vercel
- **Backend**: FastAPI deployed on Vercel Serverless Functions
- **Database**: Neon (PostgreSQL) or Railway PostgreSQL
- **Cache**: Upstash Redis (serverless Redis)
- **Vector DB**: Qdrant Cloud

---

## 1. Backend Deployment (Vercel)

### Prerequisites

1. Push your code to GitHub
2. Sign up for [Vercel](https://vercel.com)

### Deploy Backend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." -> "Project"
3. Import your GitHub repository
4. **Root Directory**: `backend`
5. **Framework Preset**: Other / FastAPI
6. **Build Command**: `pip install -t /var/task -r requirements.txt`
7. **Output Directory**: `api`
8. **Install Command**: `pip install -r requirements.txt`

### Environment Variables (Backend)

Add these in Vercel Dashboard -> Settings -> Environment Variables:

| Variable | Description |
|----------|-------------|
| `SECRET_KEY` | JWT secret key (generate with `openssl rand -hex 32`) |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `DATABASE_URL` | PostgreSQL connection string (see below) |
| `REDIS_URL` | Upstash Redis connection string |
| `QDRANT_URL` | Qdrant Cloud URL |
| `QDRANT_API_KEY` | Qdrant Cloud API key |
| `ENVIRONMENT` | `production` |
| `DEBUG` | `false` |
| `LOG_LEVEL` | `INFO` |

### Backend Root Directory

Ensure your backend folder has:
```
backend/
├── app/
│   ├── main.py
│   ├── core/
│   ├── api/
│   └── ...
├── api/
│   └── vercel.py          <-- Entry point for Vercel
├── vercel.json            <-- Vercel config
├── requirements.txt
└── .env.example
```

---

## 2. Database Setup (Neon PostgreSQL)

1. Sign up at [Neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string (format: `postgresql://user:pass@host/db`)
4. Add to Vercel environment variables as `DATABASE_URL`

### Run Migrations

Connect to your database and run the schema:

```sql
-- Create tables (from alembic migrations or schema files)
-- The tables will be created automatically on first startup
-- with the init_db() function in main.py
```

---

## 3. Redis Setup (Upstash)

1. Sign up at [Upstash](https://upstash.com)
2. Create a new Redis database
3. Copy the connection string (format: `redis://user:pass@host:port`)
4. Add to Vercel environment variables as `REDIS_URL`

---

## 4. Qdrant Setup (Qdrant Cloud)

1. Sign up at [qdrant.tech](https://qdrant.tech)
2. Create a new cluster
3. Copy the API URL and API key
4. Add to Vercel environment variables as `QDRANT_URL` and `QDRANT_API_KEY`

---

## 5. Frontend Deployment (Vercel)

### Deploy Frontend

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." -> "Project"
3. Import your GitHub repository
4. **Root Directory**: `frontend`
5. **Framework Preset**: Next.js (auto-detected)
6. **Build Command**: `npm run build`
7. **Output Directory**: `.next`

### Environment Variables (Frontend)

Add these in Vercel Dashboard -> Settings -> Environment Variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_API_URL` | Your Vercel backend URL (e.g., `https://your-backend.vercel.app`) |

---

## 6. CORS Configuration

Make sure your backend CORS includes your frontend domain:

```python
# In backend/app/core/config.py
CORS_ORIGINS: List[str] = [
    "http://localhost:3000",
    "https://your-frontend.vercel.app",  # Add your Vercel frontend URL
]
```

---

## 7. Local Development

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt

# Create .env file with your credentials
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 8. Verification

1. Open your **Frontend URL** (vercel.app)
2. Check the API is accessible at your **Backend URL**/api/v1/tools
3. Try to login or browse tools
4. Check Vercel function logs for any errors

---

## Notes

- **Cold Starts**: Vercel serverless functions may have cold starts on first request
- **Timeouts**: Default timeout is 10s, can extend to 60s in vercel.json
- **Stateless**: Each request may hit a different container
- **Playwright**: Web scraping with Playwright may not work in serverless due to size limits. Consider using simple HTTP scraping or an external scraping service.
