# Black-Beard
API para serviços do Barba Negra

![MODELO DER ](https://svgur.com/i/13LM.svg)

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
