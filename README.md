# MediGenie - Health Companion for Disease Prediction, Nutrition and Fitness

## Overview

MediGenie is a machine learning–powered web application that provides early disease prediction and personalized wellness recommendations.
It serves as a virtual health companion that connects AI insights with actionable guidance, including nutrition, home remedies, exercises, and expert videos.

---

## Key Features

* Disease prediction based on user-input symptoms
* Personalized recommendations for nutrition, home remedies, and exercises
* Secure user authentication using JWT
* Machine learning integration using Random Forest Classifier
* Interactive and responsive web interface built with React
* Expert videos section for user education and awareness

---

## System Architecture

Frontend: React 18 + Vite (React Router, Axios, lucide-react icons)
Backend: Node.js + Express REST API
Database: MongoDB (Mongoose), auto-seeded with content for 8 conditions on first run
Hosting: Vercel (frontend and backend deployed together as Vercel Services)
ML Service: planned (`ml_service/`), not yet wired into the web app

### Project Structure

```
backend/     Express API (routes, controllers, services, models, seed data)
frontend/    React + Vite single-page app
ml_service/  Placeholder for the disease prediction model
vercel.json  Vercel Services config: /api/* -> backend, everything else -> frontend
```

---

## Tech Stack

| Layer           | Technology                             |
| --------------- | -------------------------------------- |
| Frontend        | React.js, Vite, React Router, Axios    |
| Backend         | Node.js, Express.js, express-validator |
| Database        | MongoDB, Mongoose                      |
| ML Libraries    | Scikit-Learn, Pandas, NumPy, Seaborn   |
| Security        | JWT, bcrypt password hashing, Helmet   |
| Deployment      | Vercel                                 |

---

## Machine Learning Details

* Model Used: Random Forest Classifier
* Techniques: SMOTE for data balancing, GridSearchCV for hyperparameter tuning
* Evaluation Metrics: Accuracy, Precision, Recall, F1-Score, Confusion Matrix
* Datasets Used:

  * Liver Disease
  * Anemia
  * Chronic Kidney Disease
  * Diabetes
  * Heart Disease
  * Hypertension
  * Stroke
  * Thyroid Disease

---

## Installation and Setup

### Prerequisites

* Node.js 18 or higher
* A MongoDB database (local or MongoDB Atlas)

### Backend

```bash
cd backend
cp .env.example .env   # then fill in MONGO_URI and JWT_SECRET
npm install
npm run dev            # http://localhost:5000
```

The `conditions` collection is seeded automatically the first time the API connects to an empty database.

### Frontend

```bash
cd frontend
npm install
npm run dev            # http://localhost:3000, proxies /api to the backend
```

### Environment Variables

| Variable         | Description                                   |
| ---------------- | --------------------------------------------- |
| `MONGO_URI`      | MongoDB connection string                     |
| `JWT_SECRET`     | Secret used to sign login tokens              |
| `JWT_EXPIRES_IN` | Token lifetime (optional, default `7d`)       |

### Deploying to Vercel

The repo root contains `vercel.json`, which deploys the frontend and backend as one project. Set `MONGO_URI` and `JWT_SECRET` in the Vercel project settings, then run `vercel --prod` from the repo root.

---

## API Endpoints

| Endpoint                     | Method | Auth  | Description                              |
| ---------------------------- | ------ | ----- | ---------------------------------------- |
| /api/health                  | GET    | -     | Health check                             |
| /api/auth/register           | POST   | -     | Register a new user                      |
| /api/auth/login              | POST   | -     | Log in and receive a JWT                 |
| /api/auth/profile            | GET    | User  | Current user profile                     |
| /api/conditions              | GET    | -     | List all conditions                      |
| /api/conditions/:name        | GET    | -     | Remedies, exercises, nutrition, videos   |
| /api/conditions (+ sub-routes) | POST/PUT/DELETE | Admin | Manage condition content      |

To make a user an admin, set `role: "admin"` on their document in the `users` collection.

---

## Model Performance

* Classification accuracy improved by approximately 15 percent compared to baseline models
* Cross-validation (cv=3) used for reliable evaluation
* SMOTE applied to handle data imbalance

---

## Challenges and Limitations

* Difficulty integrating the ML model with web API
* Inconsistent quality of some datasets
* Not a diagnostic-level model; only intended for educational and preventive purposes

---

## Future Enhancements

* Improve model accuracy with larger datasets
* Add multilingual support for wider accessibility
* Integrate verified medical professional advice
* Enable appointment and ambulance booking features
* Develop real-time health tracking using wearable data
* Expand AI to handle image and text-based inputs

---

## References

* Scikit-Learn Documentation
* React Documentation
* FastAPI Documentation
* WHO Guidelines, Healthline, WebMD
* Blogs: Towards Data Science, Analytics Vidhya

---

## Conclusion

MediGenie provides a complete end-to-end health companion system integrating disease prediction with actionable health guidance.
The project demonstrates effective AI integration in healthcare and contributes to preventive health awareness.
