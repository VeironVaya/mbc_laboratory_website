mbc_laboratory_website/
├── frontend/ ← React + Tailwind
│ ├── src/
│ │ ├── pages/ ← Page-level views
│ │ │ ├── Home.jsx
│ │ │ ├── Divisions.jsx
│ │ │ ├── FormPage.jsx
│ │ │ └── DeveloperPage.jsx
│ │ ├── features/ ← Functional modules (e.g. contact form)
│ │ │ └── contact/
│ │ │ ├── ContactForm.jsx
│ │ │ └── useContact.js ← Fetch logic for backend
│ │ ├── services/ ← All backend API calls
│ │ │ └── api.js
│ │ ├── components/ ← Reusable UI
│ │ └── App.jsx
│ ├── tailwind.config.js
│ └── ...
│
└── backend/ ← Express.js + Nodemailer
├── src/
│ ├── routes/
│ │ └── contact.js ← POST /api/contact
│ ├── controllers/
│ │ └── contactController.js
│ ├── services/
│ │ └── mailService.js ← Nodemailer logic
│ └── index.js ← Express setup
├── .env ← SMTP creds
└── package.json
