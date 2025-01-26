<h1>CRUD Operations in MERN Stack Project</h1>
This project is a basic MERN Stack application designed to perform CRUD (Create, Read, Update, Delete) operations. It allows users to manage a group of records containing Name, Email, and Age. The project is ideal for gaining hands-on experience with the MERN stack, including MongoDB, Express, React, and Node.js, while implementing core functionalities of modern web applications.

<h2>Features</h2>
Add a new record (Name, Email, Age) to the database.
View all existing records.
Update specific records.
Delete records as needed.
Tech Stack
Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
Environment Variables: Managed using .env
Prerequisites
Before running the project, ensure you have the following installed:

Node.js: Download Node.js
MongoDB: Create an account and cluster on MongoDB Atlas.
Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone <repository-url>
cd <repository-folder>
2. Install Dependencies
Backend: Navigate to the backend folder and install the necessary packages:
bash
Copy
Edit
cd backend
npm install
Frontend: Navigate to the frontend folder and install the required dependencies:
bash
Copy
Edit
cd frontend
npm install
3. Set Up the Environment Variables
Create a .env file in the backend directory with the following content:

plaintext
Copy
Edit
MONGO_URI=<Your MongoDB connection string>
PORT=<Port number, e.g., 5000>
Replace <Your MongoDB connection string> with the connection string from your MongoDB Atlas account.

How to Run the Project
Backend
Navigate to the backend folder.
Start the backend server:
bash
Copy
Edit
npm run dev
Frontend
Navigate to the frontend folder.
Start the frontend application:
bash
Copy
Edit
npm start
The application will open in your default browser, displaying the frontend interface.

Dependencies Used
Backend
dotenv: For managing environment variables.
express: For building the RESTful API.
mongoose: For interacting with MongoDB.
nodemon: For automatically restarting the server on code changes.
Frontend
React.js: For building the user interface.
Project Workflow
Create: Add a record (Name, Email, Age) through the form on the frontend.
Read: View all records displayed dynamically.
Update: Edit an existing record and save the changes.
Delete: Remove a record from the database.
Notes
Ensure that your MongoDB cluster is running and accessible before starting the backend server.
If node_modules folders are missing, install dependencies using npm install in both the frontend and backend directories.
