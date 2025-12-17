# WanderWave
WanderWave-Project 🏄‍♂️🌊
WanderWave is a simple Express + MongoDB listing app (EJS views) for managing travel listings.

Features ✅
CRUD for listings (create, read, update, delete)
EJS-based views in views
MongoDB with Mongoose models in models
Static files served from public
Prerequisites 🔧
Node.js (v14+)
MongoDB (local or remote)
Optional: git, nodemon for development
Quickstart — Install & Run 🚀

# Clone (if you haven't already)git clone https://github.com/<your-username>/WanderWave-Project.gitcd WanderWave-Project# Install dependenciesnpm install# Create .env from .env.example (see below)cp .env.example .env# Run in development (use nodemon if installed)npm run dev# ornode app.js
Environment Variables (.env) 🔐
Create a .env file in the project root. Example .env.example:


# .env.exampleMONGO_URI=mongodb://127.0.0.1:27017/wanderlustPORT=8080
In app.js, use process.env.MONGO_URI and process.env.PORT (recommended) and load env variables with dotenv.

Example code snippet:


// at top of app.jsrequire('dotenv').config();const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wanderlust';await mongoose.connect(mongoURI);const port = process.env.PORT || 8080;app.listen(port, () => console.log(`Listening on ${port}`));
Scripts (suggested) ⚙️
Add these to package.json for convenience:


"scripts": {  "start": "node app.js",  "dev": "nodemon app.js"}
Database / Seeding 💾
If you have an init folder with seed scripts, run:


node init/index.js
(Adjust based on your seed script names.)

Important Notes ⚠️
Do not commit secrets. Make sure .env is listed in .gitignore (you already have it). If you ever push credentials, rotate them immediately.

Line endings: If you're on Windows and saw LF/CRLF warnings, they are informational. Consider adding a .gitattributes for consistent line endings.

Contributing 🤝
Fork the repo, create a feature branch, open a PR.
Please include clear commit messages and a short description.
License 📝
Add a LICENSE (MIT recommended) or specify your preferred license.
