#!/usr/bin/env bash
set -o errexit

# Gerar o cliente Prisma
npx prisma generate
npx prisma migrate dev

npm run build

echo "Construção finalizada com sucesso!"

