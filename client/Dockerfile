# Use Node.js as base image
FROM node:22.14.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Expose Vite's default dev server port
EXPOSE 5173

# Run the app with Vite
CMD ["npm", "start"]