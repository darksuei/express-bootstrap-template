FROM node:18-alpine

WORKDIR /app

# Install dependencies using pnpm
COPY package.json pnpm-lock.json ./

RUN npm install -g pnpm && pnpm install

# Copy the rest of the project
COPY . .

# Build the static files
RUN pnpm run build

# Set the environment to production
ENV NODE_ENV=production

# Expose port 8080 (adjust as necessary)
EXPOSE 8080

# Ensure the app files are owned by the node user
RUN chown -R node /app

# Switch to the node user for better security
USER node

# Start the application
CMD ["pnpm", "start"]
