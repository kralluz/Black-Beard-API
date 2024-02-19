# Black-Beard
API para serviços do Barba Negra

![MODELO DER ](https://svgur.com/i/13N0.svg)

### User

| Método | Endpoint         | Função                        | Permissions   |
|--------|------------------|-------------------------------|---------------|
| POST   | /users           | Cria um novo usuário          | Pública       |
| GET    | /users           | Lista todos os usuários       | admin         |
| GET    | /users/:id       | Obtém um usuário específico   | admin/user    |
| PUT    | /users/:id       | Atualiza um usuário específico| admin/user    |
| DELETE | /users/:id       | Exclui um usuário específico  | admin         |

### Session

| Método | Endpoint      | Função                   | Permissions |
|--------|---------------|--------------------------|-------------|
| POST   | /session      | Realiza login do usuário | Pública     |

### Schedule

| Método | Endpoint           | Função                             | Permissions |
|--------|--------------------|------------------------------------|-------------|
| POST   | /schedules         | Cria um novo agendamento           | user        |
| GET    | /schedules         | Lista todos os agendamentos        | admin/user  |
| GET    | /schedules/:id     | Obtém um agendamento específico    | admin/user  |
| PUT    | /schedules/:id     | Atualiza um agendamento específico | user        |
| DELETE | /schedules/:id     | Exclui um agendamento específico   | admin/user  |

### Clients

| Método | Endpoint         | Função                       | Permissions |
|--------|------------------|------------------------------|-------------|
| POST   | /clients         | Cria um novo cliente         | admin/user  |
| GET    | /clients         | Lista todos os clientes      | admin/user  |
| GET    | /clients/:id     | Obtém um cliente específico  | admin/user  |
| PUT    | /clients/:id     | Atualiza um cliente específico| admin/user  |
| DELETE | /clients/:id     | Exclui um cliente específico | admin       |

### Planos

| Método | Endpoint      | Função                             | Permissions |
|--------|---------------|------------------------------------|-------------|
| POST   | /planos       | Cria um novo plano                 | admin       |
| GET    | /planos       | Lista todos os planos              | admin/user  |
| GET    | /planos/:id   | Obtém um plano específico          | admin/user  |
| PUT    | /planos/:id   | Atualiza um plano específico       | admin       |
| DELETE | /planos/:id   | Exclui um plano específico         | admin       |



### POST /users (Criação de um novo usuário)

**Corpo da requisição:**
```json
{
  "username": "novousuario",
  "email": "usuario@example.com",
  "password": "senhaSegura123",
  "admin": false
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "username": "novousuario",
  "email": "usuario@example.com",
  "admin": false,
  "created_at": "2024-02-18T12:34:56Z"
}
```

### GET /users/:id (Obtendo um usuário específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "id": 1,
  "username": "novousuario",
  "email": "usuario@example.com",
  "admin": false,
  "created_at": "2024-02-18T12:34:56Z"
}
```

### PUT /users/:id (Atualizando um usuário específico)

**Corpo da requisição:**
```json
{
  "username": "usuarioAtualizado",
  "email": "novoemail@example.com",
  "password": "novaSenhaSegura123",
  "admin": true
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "username": "usuarioAtualizado",
  "email": "novoemail@example.com",
  "admin": true,
  "updated_at": "2024-02-19T12:34:56Z"
}
```

### DELETE /users/:id (Excluindo um usuário específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "message": "Usuário excluído com sucesso."
}
```
### POST /schedules (Criação de um novo agendamento)

**Corpo da requisição:**
```json
{
  "user_id": 1,
  "client_id": 2,
  "scheduled_date": "2024-03-01T14:00:00Z",
  "notes": "Reunião inicial com o cliente"
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "user_id": 1,
  "client_id": 2,
  "scheduled_date": "2024-03-01T14:00:00Z",
  "notes": "Reunião inicial com o cliente",
  "created_at": "2024-02-20T12:00:00Z"
}
```

### GET /schedules/:id (Obtendo um agendamento específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "id": 1,
  "user_id": 1,
  "client_id": 2,
  "scheduled_date": "2024-03-01T14:00:00Z",
  "notes": "Reunião inicial com o cliente",
  "created_at": "2024-02-20T12:00:00Z"
}
```

### PUT /schedules/:id (Atualizando um agendamento específico)

**Corpo da requisição:**
```json
{
  "scheduled_date": "2024-03-02T16:00:00Z",
  "notes": "Reunião alterada para revisão de contrato"
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "user_id": 1,
  "client_id": 2,
  "scheduled_date": "2024-03-02T16:00:00Z",
  "notes": "Reunião alterada para revisão de contrato",
  "updated_at": "2024-02-21T12:00:00Z"
}
```

### DELETE /schedules/:id (Excluindo um agendamento específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "message": "Agendamento excluído com sucesso."
}
```

### POST /clients (Criação de um novo cliente)

**Corpo da requisição:**
```json
{
  "name": "Empresa X",
  "email": "contato@empresax.com",
  "phone": "11999999999"
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Empresa X",
  "email": "contato@empresax.com",
  "phone": "11999999999",
  "created_at": "2024-02-20T12:00:00Z"
}
```

### GET /clients/:id (Obtendo um cliente específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Empresa X",
  "email": "contato@empresax.com",
  "phone": "11999999999",
  "created_at": "2024-02-20T12:00:00Z"
}
```

### PUT /clients/:id (Atualizando um cliente específico)

**Corpo da requisição:**
```json
{
  "name": "Empresa X - Nova",
  "email": "novocontato@empresax.com",
  "phone": "21999999999"
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Empresa X - Nova",
  "email": "novocontato@empresax.com",
  "phone": "21999999999",
  "updated_at": "2024-02-22T12:00:00Z"
}
```

### DELETE /clients/:id (Excluindo um cliente específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "message": "Cliente excluído com sucesso."
}
```

### POST /planos (Criação de um novo plano)

**Corpo da requisição:**
```json
{
  "name": "Plano Gold",
  "description": "Acesso ilimitado"
}
```
{
  "message": "Cliente excluído com sucesso."
}
```

### CRUD para Planos

#### POST /planos (Criação de um novo plano)

**Corpo da requisição:**
```json
{
  "name": "Plano Gold",
  "description": "Acesso ilimitado a todos os serviços.",
  "price": 199.99,
  "duration_months": 12
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Plano Gold",
  "description": "Acesso ilimitado a todos os serviços.",
  "price": 199.99,
  "duration_months": 12,
  "created_at": "2024-02-24T14:00:00Z"
}
```

#### GET /planos/:id (Obtendo um plano específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Plano Gold",
  "description": "Acesso ilimitado a todos os serviços.",
  "price": 199.99,
  "duration_months": 12,
  "created_at": "2024-02-24T14:00:00Z"
}
```

#### PUT /planos/:id (Atualizando um plano específico)

**Corpo da requisição:**
```json
{
  "name": "Plano Platinum",
  "description": "Acesso ilimitado a todos os serviços e suporte prioritário.",
  "price": 299.99,
  "duration_months": 12
}
```

**Corpo da resposta:**
```json
{
  "id": 1,
  "name": "Plano Platinum",
  "description": "Acesso ilimitado a todos os serviços e suporte prioritário.",
  "price": 299.99,
  "duration_months": 12,
  "updated_at": "2024-02-25T15:00:00Z"
}
```

#### DELETE /planos/:id (Excluindo um plano específico)

Não requer corpo de requisição.

**Corpo da resposta:**
```json
{
  "message": "Plano excluído com sucesso."
}
```
