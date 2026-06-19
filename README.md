# 📄 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes and provides:

- ✅ ATS Score
- 💪 Strengths
- ⚠️ Weaknesses
- 🎯 Missing Skills
- 🚀 Improvement Suggestions

The application uses FastAPI for the backend, Groq LLM for resume analysis, and a simple HTML/CSS/JavaScript frontend.

---

## 🚀 Features

- Upload PDF resumes
- Extract resume text automatically
- AI-powered resume evaluation
- ATS score generation
- Resume strengths analysis
- Missing skills detection
- Personalized improvement suggestions
- Clean and responsive user interface

---

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- Groq API
- PyPDF

### Frontend
- HTML
- CSS
- JavaScript

---

## 📁 Project Structure

```text
AI Resume Analyzer/
│
├── backend/
│   ├── main.py
│   ├── utils.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/aiswaryaanoop12-bot/ai_resume_analyzer1.git
```

### 2. Navigate to backend

```bash
cd backend
```

### 3. Create virtual environment

```bash
python -m venv venv
```

### 4. Activate virtual environment

Windows:

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_api_key_here
```

---

## ▶️ Run Backend

```bash
fastapi dev main.py
```

or

```bash
uvicorn main:app --reload
```

Backend will run on:

```text
http://127.0.0.1:8000
```

---

## 🌐 Run Frontend

Open:

```text
frontend/index.html
```

in your browser.

---

## 📸 Sample Output

```text
ATS Score: 84/100

Strengths:
- Strong Technical Skills
- Data Analysis

Weaknesses:
- Formatting Issues

Missing Skills:
- Cloud Computing

Improvements:
- Add measurable achievements
```

---

## 🔮 Future Improvements

- ATS Score Circular Meter
- Resume Comparison
- Download PDF Report
- User Authentication
- Resume History Tracking
- Job Match Analysis
- Deployment to Cloud

---

## 👩‍💻 Author

Aiswarya Anoop

Built as a learning project to explore:
- FastAPI
- AI Integration
- Resume Analysis
- Frontend Development
- API Development

---

## 📜 License

This project is for educational and learning purposes.
