# Week 2 – Web App Deployment on Vercel  
TIQC Internship – Mayckel Urquizo

## 🚀 Overview
This project was created for Week 2 of the TIQC Internship. The goal was to design a simple web application with a clean landing page and a basic authentication UI, then deploy it to Vercel using a GitHub repository.

No backend authentication was implemented — the login/signup page is **UI only**, as allowed by the assignment.

---

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **React**
- **TailwindCSS**
- **Deployed on Vercel**
- **v0.app** used to generate the initial UI structure

---

## 📁 Project Structure
The project uses the App Router:

app/
├── page.tsx → Landing page
├── auth/
│ └── page.tsx → Authentication UI (login / signup)
public/
components/ (if used)
package.json
next.config.js
tailwind.config.js
postcss.config.js

yaml
Copy code

---

## ▶️ How to Run This Project Locally (for developers)

Even though I worked without Node locally, the project can be run by any developer:

```bash
npm install
npm run dev
Then open:

arduino
Copy code
http://localhost:3000
🌐 Deployment
The project was deployed using Vercel, connected directly to my GitHub repository.

Deployment steps:
Uploaded my project files to GitHub

Connected the repository to Vercel

Vercel automatically detected Next.js

Clicked Deploy

Redeployed once after fixing folder structure

Live URL:
👉 https://tiqc-internship-week2-mayckel-urquizo.vercel.app

🔐 Authentication (UI Only)
The assignment allowed a simple UI-only authentication page.

Implemented features:

Login and Signup modes (toggle)

Form validation for empty fields

Friendly error message

Clean and responsive layout

No backend or real accounts — this is demonstration-only.

🖼 Screenshots
Landing Page
(Insert screenshot here)

Authentication Page
(Insert screenshot here)

You can upload your screenshots to the repo or drag them into this README after taking them.

💬 Prompt Used in v0.app
pgsql
Copy code
Build a clean Next.js 14 app using the App Router. 
Create a landing page in app/page.tsx with a hero section, features, and a call-to-action button linking to /auth. 
Create an authentication page in app/auth/page.tsx with a login and signup mode. 
UI only, no backend. 
Use TailwindCSS and make the design responsive with a modern dark theme.
🔧 Changes Made After Generation
Fixed project folder structure so that app/ is in the root directory

Cleaned leftover files inside the downloaded folder

Updated some styling and text to match assignment requirements

Redeployed on Vercel after adjusting the GitHub repo

Verified that / and /auth both load correctly in production
