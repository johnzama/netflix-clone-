# Stage 1: Build React App
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies for both backend and frontend
COPY package*.json ./
RUN npm install

# Copy the entire project and build the React front-end
COPY ./netflix-frontend ./netflix-frontend
WORKDIR /app/netflix-frontend
RUN npm run build

# Stage 2: Serve the App with Node.js Backend
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies again for backend only
COPY package*.json ./
RUN npm install

# Copy the backend source code (assuming you have the Node.js backend code in the root directory)
COPY . .

# Copy the built React app from the previous stage into the public directory of the Node.js backend
COPY --from=build /app/netflix-frontend/build ./public

# Expose the port the app will run on
EXPOSE 8080

# Start the Node.js server
CMD ["npm", "start"]

