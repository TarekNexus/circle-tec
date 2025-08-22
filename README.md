# 🛒 Circle-Tec Online Store  


A modern e-commerce web application built with **Next.js, NextAuth, and MongoDB**.  
It provides secure authentication, product browsing, and a smooth shopping experience.  
🔗 **Live Demo:** [https://circle-tec.vercel.app/](https://circle-tec.vercel.app/)  
---

## 🚀 Features  
- 🔑 Authentication with **NextAuth** (Google & Credentials login)  
- 📦 Product listing and browsing  
- 🗄️ MongoDB database integration  
- 🎨 Responsive design with Tailwind CSS  
- ☁️ Deployment ready with **Vercel**  

---


## 🚀 Tech Stack  

- **Frontend:** Next.js, React, Tailwind CSS, Shadcn UI  
- **Backend:** Next.js API Routes, 
- **Database:** MongoDB (Atlas)  
- **Authentication:** NextAuth.js (Google & Credentials)  
- **Deployment:** Vercel  

## 🛠️ Setup & Installation  

### 1. Clone the repository  
```bash
git clone https://github.com/TarekNexus/circle-tec
cd circle-tec

### 2. Install dependencies
 npm install

 ### 3. Configure environment variables
 - Create a .env.local file in the project root:
 MONGODB_URI=your_mongodb_connection_string
DB_NAME=storeDB

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret


### 3. Run the development server
- npm run dev


## 📌 Route Summary  

| Route             | Description                          |
|-------------------|--------------------------------------|
| `/`               | Homepage with featured products      |
| `/products`       | All products listing                 |
| `/products/[id]`  | Product details page                 |
| `/auth/login`     | Login page                           |
| `/auth/register`  | Register new account                 |
| `/api/auth/*`     | NextAuth authentication routes       |
| `/dashboard`      | User dashboard (protected)           |

