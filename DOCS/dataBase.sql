CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(100) NOT NULL,
  "company_name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password_hash" VARCHAR(300) NOT NULL,
  "admin" BOOLEAN DEFAULT false,
  "last_access" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT NULL,
  "deleted_at" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "services" (
  "id" SERIAL PRIMARY KEY,
  "service_name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "user_id" INT REFERENCES "users" ("id") ON DELETE SET NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT NULL,
  "deleted_at" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) UNIQUE,
  "phone" VARCHAR(50) NOT NULl,
  "user_id" INT REFERENCES "users" ("id") ON DELETE SET NULL,
  "plano_id" INT REFERENCES "plan" ("id") ON DELETE SET NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT NULL,
  "deleted_at" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "scheduled_date" TIMESTAMP NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "user_id" INT REFERENCES "users" ("id") ON DELETE SET NULL,
  "client_id" INT REFERENCES "clients" ("id") ON DELETE SET NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT NULL,
  "deleted_at" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "plan" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "duration_months" INT NOT NULL,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT NULL,
  "deleted_at" TIMESTAMP DEFAULT NULL
);
