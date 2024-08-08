
# Full Stack Application



- **backend/**: Contains the Express server and API logic.
- **frontend/**: Contains the React application.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Mongo Database**: Ensure you have a local mongoDB

## Installation

1. **Clone the repository:**

   Clone the repo in local folder using git clone

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

3. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

## Running the Application

### Backend (Express)

1. **Navigate to the `backend` folder:**

   ```bash
   cd backend
   ```

2. **Start the Express server:**

   ```bash
   npm install
   node --env-file=.env server.js
   ```
   For devlopment
   ```bash
   node --env-file=.env --watch server.js
   ```

   The backend server should now be running on `http://localhost:5000` by default.

### Frontend (React)

1. **Navigate to the `frontend` folder:**

   ```bash
   cd ../frontend
   ```

2. **Start the React development server:**

   ```bash
   npm install
   npm run dev
   ```

   The React application should now be running 



