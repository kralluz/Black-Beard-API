CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password_hash" VARCHAR(255) NOT NULL,
  "admin" boolean DEFAULT false,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) UNIQUE,
  "phone" VARCHAR(50),
  "user_id" INT,
  "plano_id" INT,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "client_id" INT,
  "scheduled_date" TIMESTAMP NOT NULL,
  "notes" TEXT,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "plano" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "price" DECIMAL(10,2) NOT NULL,
  "duration_months" INT NOT NULL,
  "created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE "clients" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "schedules" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "schedules" ADD FOREIGN KEY ("client_id") REFERENCES "clients" ("id");

ALTER TABLE "clients" ADD FOREIGN KEY ("plano_id") REFERENCES "plano" ("id");
