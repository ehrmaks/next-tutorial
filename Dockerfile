####################################################### 
FROM node:14.17.3-alpine

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install && yarn cache clean --force

# Copy all files
COPY ./ ./

ENV NODE_ENV=production

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "yarn", "start" ]
