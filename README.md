# django-to-fastapi-store

FastAPI + Vite (vanilla JS) — study project inspired by [Django-4-course-Home](https://github.com/PythonHubStudio/Django-4-course-Home).

## Local development

### Backend (FastAPI)

```bash
python3 -m venv .venv
source .venv/bin/activate          # bash/zsh
# source .venv/bin/activate.fish   # fish
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend (Vite)

```bash
cd frontend
npm install
npm run dev
```

### API proxy

Frontend runs on `http://localhost:5173`, backend on `http://localhost:8000`.

To avoid CORS and simplify development, `frontend/vite.config.js` proxies `/api` requests to the backend:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
```

Now `fetch('/api/...')` inside frontend will reach the backend.


