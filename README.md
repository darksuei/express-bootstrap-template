**Minimalistic Express Bootstrap Boilerplate**

This is a minimalistic, opinionated Express boilerplate designed for rapid project setup and hopefully, a clean development experience.

---

**Setup**

1. Clone the repository
2. Run: `bash ./bootstrap.sh` to bootstrap & personalize the project.
3. Modify the generated `.env` file with the appropriate configuration
4. Run the project and start building

---

**Core Features**

- TypeScript native
- TypeORM for database interaction
- Zod for request validation
- Winston for structured logging
- Esbuild for fast bundling
- Eslint for linting
- Nodemon for development reloads
- Swagger support for API documentation

---

**Scripts**

- `npm run dev` – Start the server in development mode with hot reload
- `npm run lint` – Lint the project
- `npm run clean` – Clean the `dist/` folder
- `npm run build` – Build the project using esbuild
- `npm start` – Start the server in production mode
- `npm run test` – Run tests using Jest

**TypeORM Scripts**

- `npm run typeorm` – Run TypeORM CLI with custom datasource
- `npm run typeorm:entity:create` – Create a new entity
- `npm run typeorm:generate` – Generate a new migration
- `npm run typeorm:migrate` – Run all pending migrations
- `npm run typeorm:revert` – Revert the last migration

---

**Environment Variables**

After running `./bootstrap.sh`, modify the `.env` file to suit your development environment.
