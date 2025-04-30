#!/bin/bash
echo "Removing existing .git"
rm -rf ./.git

# Get application metadata
read -p "Enter application name: " APP_NAME
read -p "Enter application description: " APP_DESC

# Create swagger yaml
cat <<EOF > ./docs/swagger.yaml
openapi: "3.0.0"
info:
  title: "$APP_NAME"
  version: "1.0.0"
  description: "$APP_DESC"
tags:
  - name: ""
    description: ""

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - BearerAuth: []
EOF

# Update app name in package.json
APP_NAME_MODIFIED=$(echo "$APP_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
sed -i "s/\"name\": \"[^\"]*\"/\"name\": \"$APP_NAME_MODIFIED\"/" package.json

# Create logs dir
echo "Creating logs dir.."
mkdir logs

# Install deps
echo "Installing dependencies.."
pnpm install

# Create .env
cp .env.example .env