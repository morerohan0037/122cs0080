# Social Media Feed Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that displays social media posts and user interactions.

## Features

- Real-time social media feed
- Trending posts display
- Top users listing
- Caching system for improved performance

## Project Structure

```
├── backend/            # Node.js & Express backend
│   ├── controllers/    # Request handlers
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── utils/         # Utility functions
├── frontend/          # React frontend
    ├── public/        # Static files
    └── src/           # Source files
        ├── components/# React components
        └── pages/     # Page components
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Technologies Used

### Backend
- Express.js
- Node-cache for caching
- Cors for cross-origin requests
- Axios for HTTP requests

### Frontend
- React 19
- Material-UI components
- React Router DOM
- Axios for API calls

## Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

ISC