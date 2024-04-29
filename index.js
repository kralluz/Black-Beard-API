// index.js

const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'test') {
  // Carregue a configuração de teste se estivermos no ambiente de teste
  prisma = new PrismaClient(require('./prisma.config.test'));
} else {
  // Caso contrário, carregue a configuração padrão
  prisma = new PrismaClient(require('./prisma.config'));

}

// Agora você pode usar `prisma` normalmente em sua aplicação
