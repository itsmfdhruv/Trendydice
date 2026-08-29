# Stage 1: Build the React/TypeScript Application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package files first (optimizes Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code (including your client folder)
COPY . .

# Build the project (adjust 'npm run build' if your script is different)
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built static files from the builder stage to Nginx
# Note: If your build output goes to a 'dist' folder instead of 'build', change the path below
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]