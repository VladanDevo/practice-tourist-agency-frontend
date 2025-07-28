# Stage 1: The 'builder' stage
# This stage installs dependencies, and builds the Angular application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: The 'runner' stage
# This stage takes the built files and serves them with Nginx
FROM nginx:1.25-alpine

# Copy the built application from the 'builder' stage
COPY --from=builder /app/dist/it-30-2020-front-end /usr/share/nginx/html

# When the container starts, nginx will run by default and serve the files.
EXPOSE 80