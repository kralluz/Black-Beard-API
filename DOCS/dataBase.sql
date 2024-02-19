CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(100) NOT NULL,
  "company_name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password_hash" VARCHAR(300) NOT NULL,
  "admin" BOOLEAN DEFAULT false,
  "last_access" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" TIMESTAMP DEFAULT null,
  "deleted_at" TIMESTAMP DEFAULT null
);

CREATE TABLE "plan" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "duration_months" INT NOT NULL,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" TIMESTAMP DEFAULT null,
  "deleted_at" TIMESTAMP DEFAULT null
);

CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) UNIQUE,
  "phone" VARCHAR(50) NOT NULL,
  "user_id" INT REFERENCES "users" ("id"),
  "plano_id" INT REFERENCES "plan" ("id"),
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" TIMESTAMP DEFAULT null,
  "deleted_at" TIMESTAMP DEFAULT null
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "scheduled_date" TIMESTAMP NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "user_id" INT REFERENCES "users" ("id"),
  "client_id" INT REFERENCES "clients" ("id"),
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" TIMESTAMP DEFAULT null,
  "deleted_at" TIMESTAMP DEFAULT null
);

CREATE TABLE "services" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "users" ("id"),
  "service_name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(100) NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" TIMESTAMP DEFAULT null,
  "deleted_at" TIMESTAMP DEFAULT null
);

CREATE TABLE "schedules_services" (
  "schedule_id" INT NOT NULL,
  "service_id" INT NOT NULL,
  PRIMARY KEY ("schedule_id", "service_id"),
  FOREIGN KEY ("schedule_id") REFERENCES "schedules" ("id") ON DELETE CASCADE,
  FOREIGN KEY ("service_id") REFERENCES "services" ("id") ON DELETE CASCADE
);
