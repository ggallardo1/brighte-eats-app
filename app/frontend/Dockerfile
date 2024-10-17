# Use the official Node.js image.
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the app port
EXPOSE 3000