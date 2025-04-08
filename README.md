# Robocus @ Robotics & IoT HCMUS

> This project is a full-stack web application for the Robocus competition organized by the [Robotics & IoT HCMUS Club](https://robotics.hcmus.edu.vn/).


## Table of Contents
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup (Next.js)](#frontend-setup-nextjs)
  - [Backend Setup (NestJS)](#backend-setup-nestjs)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript, GraphQL, TypeORM, PostgreSQL, JWT
- **Deployment**: Docker
- **Testing**: Jest

## Setup

### Prerequisites

- **Node.js** and **npm**
- **PostgreSQL** (optional)
- **Docker** (optional)

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Configure the environment variables for the frontend:
    - Create a `.env` file and add the necessary variables

### Backend Setup (NestJS)

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Configure the environment variables for the backend:
    - Create a `.env` file and add the necessary variables

### Running the Application

To run both frontend and backend locally, follow these steps:
1. In one terminal, run the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

2. In another terminal, run the backend:
   ```bash
   cd backend
   npm run dev
   ```

Now, the backend should run on `http://localhost:8000` (or your specified port), and you should be able to access the frontend through `http://localhost:3000`.

## Folder Structure

### Frontend

```
frontend/
├── public/                # Static assets
├── src/                   # Source code
│   ├── app/               # Main app directory with new routing system
│   ├── components/        # UI components
│   └── lib/               # Utility functions
├── .env                   # Frontend environment variables
├── next.config.ts         # Next.js configuration file
├── package.json           # Frontend dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

### Backend

```
nestjs/
├── src/                   # Source code
│   ├── graphql/           # GraphQL schemas
│   ├── modules/           # Modules for each entity
│   ├── app.module.ts      # Root module of the application
│   └── main.ts            # The entry file of the application
├── test/                  # Test folder
├── .env                   # Environment variables
└── package.json           # Dependencies
```

## API Documentation

The backend exposes a **GraphQL API** that can be used by the frontend to interact with the server. Some common queries and mutations might include:

- Updata later

For more detailed API documentation, please refer to the backend's GraphQL schema or use tools like **GraphQL Playground** or **Apollo Studio** to explore available queries and mutations.


## Contributing

We welcome contributions to this project! Here’s how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a pull request

Please ensure that your code passes linting and testing before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
