# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build -- --configuration production

# Stage 2: Build Backend
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
RUN npm run build

# Stage 3: Production Runner
FROM node:20-alpine
WORKDIR /app

# Copy Frontend build artifacts
COPY --from=frontend-builder /app/frontend/dist /app/frontend/dist

# Copy Backend production files
COPY --from=backend-builder /app/backend/dist-server /app/backend/dist-server
COPY --from=backend-builder /app/backend/package*.json /app/backend/
COPY --from=backend-builder /app/backend/node_modules /app/backend/node_modules

WORKDIR /app/backend
EXPOSE 3000

ENV NODE_ENV=production
CMD ["npm", "start"]
