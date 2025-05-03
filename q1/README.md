# Number Processing Service

A Node.js service that fetches numbers from various endpoints and calculates rolling averages using a sliding window approach.

## Features

- Fetches numbers from multiple endpoints (primes, fibonacci, even, random)
- Maintains a sliding window of size 10 for each number type
- Calculates averages for the numbers in each window
- Implements timeout handling for API requests
- Provides REST API endpoint for retrieving processed numbers

## API Endpoints

GET `/numbers/:numberid`
- numberid can be: 
  - 'p' (primes)
  - 'f' (fibonacci)
  - 'e' (even)
  - 'r' (random)

## Configuration

- Window Size: 10 numbers
- Timeout: 500ms
- Default Port: 9876
- Base API: http://20.244.56.144/evaluation-service

## Installation

```bash
npm install
```

## Running the Application

```bash
node app.js
```

## Error Handling

- Request timeout after 500ms
- Invalid number ID validation
- Response time monitoring
