# MNC Clothing — E-commerce App

A full-stack online clothing store built with React and Node.js. Browse curated collections, manage your cart, sign in securely, and checkout with Stripe—powered by Firebase for authentication and product data.

**Stack:** React · Redux · Firebase Auth & Firestore · Express · Stripe

## Quick start

```bash
npm install && cd client && npm install && cd ..
# Create .env (root) and client/.env with Firebase + Stripe keys, then:
npm run dev
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)  
- **Backend:** [http://localhost:5001](http://localhost:5001) (set `PORT` in `.env`)

`npm run dev` runs both servers together via Concurrently. Press `Ctrl+C` to stop.

## Features

Sign up / sign in (email or Google) · Shop by category · Persistent cart · Stripe test checkout

---

*MNC Clothing — built for learning, demos, and real-world e-commerce patterns.*
