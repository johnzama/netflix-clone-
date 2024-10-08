# Step 1: Use Node.js as the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (for dependencies)
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port that the app will run on (adjust as needed)
EXPOSE 3000

# Step 7: Define the command to start the app
CMD ["npm", "start"]

