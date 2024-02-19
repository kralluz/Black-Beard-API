# Black-Beard

API para serviços do Barba Negra

![MODELO DER ](https://svgur.com/i/13N2.svg)

### User

| Método | Endpoint   | Função                                     | Permissions |
| ------ | ---------- | ------------------------------------------ | ----------- |
| POST   | /users     | Cria um novo usuário                       | Pública     |
| GET    | /users     | Lista todos os usuários (contém paginação) | admin       |
| GET    | /users/:id | Obtém um usuário específico                | admin/user  |
| PATCH    | /users/:id | Atualiza um usuário específico             | admin/user  |
| DELETE | /users/:id | Exclui um usuário específico               | admin       |

### Session

| Método | Endpoint | Função                   | Permissions |
| ------ | -------- | ------------------------ | ----------- |
| POST   | /session | Realiza login do usuário | Pública     |

### Services

| Método | Endpoint      | Função                                          | Permissions |
| ------ | ------------- | ----------------------------------------------- | ----------- |
| POST   | /services     | Cria um novo serviço                            | Pública     |
| GET    | /services     | Lista todos os serviço de um usuário específico | admin       |
| GET    | /services/:id | Obtém um serviço específico                     | admin/user  |
| PATCH    | /services/:id | Atualiza um serviço específico                  | admin/user  |
| DELETE | /services/:id | Exclui um serviço específico                    | admin       |

### Appointment

| Método | Endpoint       | Função                             | Permissions |
| ------ | -------------- | ---------------------------------- | ----------- |
| POST   | /appointment     | Cria um novo agendamento           | user        |
| GET    | /appointment     | Lista todos os agendamentos        | admin/user  |
| GET    | /appointment/:id | Obtém um agendamento específico    | admin/user  |
| PATCH    | /appointment/:id | Atualiza um agendamento específico | user        |
| DELETE | /appointment/:id | Exclui um agendamento específico   | admin/user  |

### Clients

| Método | Endpoint     | Função                         | Permissions |
| ------ | ------------ | ------------------------------ | ----------- |
| POST   | /clients     | Cria um novo cliente           | admin/user  |
| GET    | /clients     | Lista todos os clientes        | admin/user  |
| GET    | /clients/:id | Obtém um cliente específico    | admin/user  |
| PATCH    | /clients/:id | Atualiza um cliente específico | admin/user  |
| DELETE | /clients/:id | Exclui um cliente específico   | admin       |

### Planos

| Método | Endpoint    | Função                       | Permissions |
| ------ | ----------- | ---------------------------- | ----------- |
| POST   | /planos     | Cria um novo plano           | admin       |
| GET    | /planos     | Lista todos os planos        | admin/user  |
| GET    | /planos/:id | Obtém um plano específico    | admin/user  |
| PATCH    | /planos/:id | Atualiza um plano específico | admin       |
| DELETE | /planos/:id | Exclui um plano específico   | admin       |

### POST /users (Criação de um novo usuário)

**Corpo da requisição:**

```json
{
    "username": "novousuario",
    "company_name": "emprezaxyz",
    "email": "usuario@example.com",
    "password": "senhaSegura123",
    "admin": true
}
```

A chave admin é opcional, valor default será false.

**Corpo da resposta:**

```json
{
    "id": 1,
    "username": "novousuario",
    "company_name": "emprezaxyz",
    "email": "usuario@example.com",
    "admin": false,
    "last_access": "2024-02-18T12:34:56Z",
    "created_at": "2024-02-18T12:34:56Z",
    "updated_at": null,
    "deleted_at": null
}
```

### GET /users/:id (Obtendo um usuário específico)

Não requer corpo de requisição, não possui corpo de resposta.

**Corpo da resposta:**

```json
{
    "id": 1,
    "username": "novousuario",
    "company_name": "emprezaxyz",
    "email": "usuario@example.com",
    "admin": false,
    "last_access": "2024-02-18T12:34:56Z",
    "created_at": "2024-02-18T12:34:56Z",
    "updated_at": null,
    "deleted_at": null
}
```

### PATCH /users/:id (Atualizando um usuário específico)

**Corpo da requisição:**

```json
{
    "company_name": "emprezaxyz",
    "username": "usuarioAtualizado",
    "password": "novaSenhaSegura123"
}
```

Não é permitido atualização de e-mail e admin.

**Corpo da resposta:**

```json
{
    "id": 1,
    "username": "novousuario",
    "company_name": "emprezaxyz",
    "email": "usuario@example.com",
    "admin": false,
    "last_access": "2024-02-18T12:34:56Z",
    "created_at": "2024-02-18T12:34:56Z",
    "updated_at": "2024-02-18T12:34:56Z",
    "deleted_at": null
}
```

### DELETE /users/:id (Excluindo um usuário específico)

Não requer corpo de requisição, não possui corpo de resposta.

### POST /appointment (Criação de um novo agendamento)

**Corpo da requisição:**

```json
{
    "client_id": 2,
    "service_ids": [1, 4],
    "appointment_date": "2024-03-01T14:00:00Z",
    "description": "corte americano e pigmentação na barba"
}
```

**Corpo da resposta:**

```json
{
    "id": 1,
    "user_id": 1,
    "client": {
        "id": 2,
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "phone": "62548778459",
        "plan": null
    },
    "services": [
        {
            "service_name": "Corte Americano",
            "price": 50.0
        },
        {
            "service_name": "Pigmentação na Barba",
            "price": 30.0
        }
    ],
    "appointment_date": "2024-03-01T14:00:00Z",
    "description": "corte americano e pigmentação na barba",
    "created_at": "2024-02-20T12:00:00Z",
    "updated_at": "2024-02-18T12:34:56Z",
    "deleted_at": null
}
```

### GET /appointment/:id (Obtendo um agendamento específico)

Não requer corpo de requisição, não possui corpo de resposta.

**Corpo da resposta:**

```json
{
    "id": 1,
    "user_id": 1,
    "client": {
        "id": 2,
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "phone": "62548778459",
        "plan": null
    },
    "services": [
        {
            "service_name": "Corte Americano",
            "description": "exemplo de descrição",
            "price": 50.0
        },
        {
            "service_name": "Pigmentação na Barba",
            "description": "exemplo de descrição",
            "price": 30.0
        }
    ],
    "appointment_date": "2024-03-01T14:00:00Z",
    "description": "corte americano e pigmentação na barba",
    "created_at": "2024-02-20T12:00:00Z",
    "updated_at": "2024-02-18T12:34:56Z",
    "deleted_at": null
}
```

### PATCH /appointment/:id (Atualizando um agendamento específico)

**Corpo da requisição:**

```json
{
    "appointment_date": "2024-03-02T16:00:00Z",
    "description": "Reunião de acompanhamento com o cliente",
    "client_id": 2,
    "service_ids": [2, 3]
}
```

**Corpo da resposta:**

```json
{
    "id": 1,
    "user_id": 1,
    "appointment_date": "2024-03-02T16:00:00Z",
    "description": "talvez o cliente atrase 5 minutos por causa do curso",
    "client": {
        "id": 2,
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "phone": "62548778459",
        "plan": null
    },
    "services": [
        {
            "id": 1,
            "user_id": 1,
            "service_name": "Barba Desenhada",
            "description": "exemplo de descrição",
            "price": 35.0
        },
        {
            "id": 2,
            "user_id": 1,
            "service_name": "Hidratação Capilar",
            "description": "exemplo de descrição",
            "price": 60.0
        }
    ],
    "created_at": "2024-02-20T12:00:00Z",
    "updated_at": "2024-03-01T10:00:00Z",
    "deleted_at": null
}
```

### DELETE /appointment/:id (Excluindo um agendamento específico)

Não requer corpo de requisição, não possui corpo de resposta.

### POST /clients (Criação de um novo cliente)

**Corpo da requisição:**

```json
{
    "name": "Abelardo",
    "email": "contato@empresax.com",
    "phone": "11999999999",
    "description": "colega do curso",
    "created_at": "2024-02-19T12:34:56Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

**Corpo da resposta:**

```json
{
    "id": 1,
    "name": "Empresa X",
    "email": "contato@empresax.com",
    "phone": "119999999",
    "description": "colega do curso",
    "plano_id": null,
    "user_id": 1,
    "created_at": "2024-02-19T12:34:56Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

Caso plano_id = null significa que ele não está incluso em nenhum plano.

### GET /clients/:id (Obtendo um cliente específico)

Não requer corpo de requisição, não possui corpo de resposta.

**Corpo da resposta:**

```json
{
    "id": 1,
    "name": "Empresa X",
    "email": "contato@empresax.com",
    "phone": "11999999999",
    "description": "colega do curso",
    "plano_id": 2,
    "created_at": "2024-02-19T12:34:56Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

### PATCH /clients/:id (Atualizando um cliente específico)

**Corpo da requisição:**

```json
{
    "name": "Empresa X - Nova",
    "email": "novocontato@empresax.com",
    "phone": "21999999999",
    "description": "colega do curso",
    "plano_id": 2
}
```

**Corpo da resposta:**

```json
{
    "id": 1,
    "name": "Empresa X",
    "email": "contato@empresax.com",
    "phone": "11999999999",
    "description": "colega do curso",
    "plano_id": 2,
    "created_at": "2024-02-19T12:34:56Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

### DELETE /clients/:id (Excluindo um cliente específico)

Não requer corpo de requisição, não possui corpo de resposta.

### CRUD para Planos

### POST /plans (Criação de um novo plano)

**Corpo da requisição:**

```json
{
    "name": "Plano Mensal",
    "description": "Direito a 4 cortes por mês.",
    "price": 110.99,
    "duration_months": 1
}
```

**Corpo da resposta:**

```json
{
    "id": 1,
    "user_id": 1,
    "name": "Plano Mensal",
    "description": "Direito a 4 cortes por mês.",
    "price": 110.99,
    "duration_months": 1,
    "created_at": "2024-02-24T14:00:00Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

#### GET /plans/:id (Obtendo um plano específico)

Não requer corpo de requisição, não possui corpo de resposta.

**Corpo da resposta:**

```json
{
    "id": 1,
    "user_id": 1,
    "name": "Plano Mensal",
    "description": "Direito a 4 cortes por mês.",
    "price": 199.99,
    "duration_months": 12,
    "user_id": 1,
    "created_at": "2024-02-24T14:00:00Z",
    "updated_at": "2024-02-19T12:34:56Z",
    "deleted_at": null
}
```

#### PATCH /plans/:id (Atualizando um plano específico)

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
    "user_id": 1,
    "name": "Plano Platinum",
    "description": "Acesso ilimitado a todos os serviços e suporte prioritário.",
    "price": 299.99,
    "duration_months": 12,
    "updated_at": "2024-02-25T15:00:00Z"
}
```

#### DELETE /plans/:id (Excluindo um plano específico)

Não requer corpo de requisição, não possui corpo de resposta.

### Serviços (Services)

#### POST /services (Criação de um novo serviço)

**Corpo da requisição:**

```json
{
    "name": "Corte de Cabelo Masculino",
    "description": "Corte masculino com tesoura ou máquina, de acordo com a preferência do cliente.",
    "price": 45.00
}
```
Corpo da resposta:


```json
{
    "id": 3,
    "user_id": 1,
    "name": "Corte de Cabelo Masculino",
    "description": "Corte masculino com tesoura ou máquina, de acordo com a preferência do cliente.",
    "price": 45.00,
    "created_at": "2024-02-20T15:00:00Z",
    "updated_at": null,
    "deleted_at": null
}
```
GET /services (Lista todos os serviços)
Não requer corpo de requisição.

Corpo da resposta:

```json
[
    {
        "id": 1,
        "user_id": 1,
        "name": "Barba Desenhada",
        "description": "Design e modelagem da barba com precisão.",
        "price": 30.00,
        "created_at": "2024-02-18T12:00:00Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "user_id": 1,
        "name": "Hidratação Capilar",
        "description": "Tratamento para hidratação profunda dos cabelos.",
        "price": 60.00,
        "created_at": "2024-02-19T12:00:00Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "user_id": 1,
        "name": "Corte de Cabelo Masculino",
        "description": "Corte masculino com tesoura ou máquina, de acordo com a preferência do cliente.",
        "price": 45.00,
        "created_at": "2024-02-20T15:00:00Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```
GET /services/:id (Obtém um serviço específico)
Não requer corpo de requisição.

Corpo da resposta:

```json
{
    "id": 2,
    "user_id": 1,
    "name": "Hidratação Capilar",
    "description": "Tratamento para hidratação profunda dos cabelos.",
    "price": 60.00,
    "created_at": "2024-02-19T12:00:00Z",
    "updated_at": null,
    "deleted_at": null
}
```
PATCH /services/:id (Atualiza um serviço específico)
Corpo da requisição:

```json
{
    "name": "Hidratação Capilar Premium",
    "description": "Tratamento premium para hidratação profunda dos cabelos, utilizando produtos exclusivos.",
    "price": 75.00
}
```
Corpo da resposta:

```json
{
    "id": 2,
    "user_id": 1,
    "name": "Hidratação Capilar Premium",
    "description": "Tratamento premium para hidratação profunda dos cabelos, utilizando produtos exclusivos.",
    "price": 75.00,
    "created_at": "2024-02-19T12:00:00Z",
    "updated_at": "2024-02-20T16:00:00Z",
    "deleted_at": null
}
```
#### DELETE /services/:id (Exclui um serviço específico)
Não requer corpo de requisição, não possui corpo de resposta.
