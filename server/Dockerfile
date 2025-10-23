# Use official Node.js LTS base image
FROM node:lts-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port your app runs on
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
