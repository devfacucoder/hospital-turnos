# Facu-Turnos2 API Documentation

This API manages doctors and appointments for a medical scheduling system.

## Base URL

```
http://localhost:PORT/api/
```

---

## Doctors Routes

### Get All Doctors

**GET** `/api/medicos`

**Response:**
```json
{
  "message": "Doctors list obtained",
  "data": [ { ...doctorObject } ]
}
```

---

### Get Doctor by ID

**GET** `/api/medicos/:id`

**Response:**
```json
{
  "message": "Doctor obtained",
  "data": { ...doctorObject }
}
```

---

### Create Doctor

**POST** `/api/medicos`

**Body Example:**
```json
{
  "nombre": "John",
  "apellido": "Doe",
  "contrasenna": "password123",
  "especialidad": "Cardiology"
}
```

**Response:**
```json
{
  "message": "successfully created medico",
  "data": { ...doctorObject }
}
```

---

### Update Doctor

**PUT** `/api/medicos/:id`

**Body Example:**
```json
{
  "nombre": "Jane",
  "especialidad": "Pediatrics"
}
```

**Response:**
```json
{
  "message": "Doctor updated",
  "data": { ...doctorObject }
}
```

---

### Delete Doctor

**DELETE** `/api/medicos/:id`

**Response:**
```json
{
  "message": "Doctor deleted"
}
```

---

## Appointments Routes

### Get All Appointments

**GET** `/api/turnos`

**Response:**
```json
{
  "message": "Appointments list obtained",
  "data": [ { ...appointmentObject } ]
}
```

---

### Create Appointment

**POST** `/api/turnos`

**Body Example:**
```json
{
  "hora": "10:00",
  "fecha": "2025-09-27",
  "nombrePaciente": "Alice",
  "apellidoPaciente": "Smith",
  "dniPaciente": "12345678",
  "telefonoPaciente": "555-1234",
  "idMedico": "doctorIdHere"
}
```

**Response:**
```json
{
  "message": "Appointment created",
  "data": { ...appointmentObject }
}
```

---

### Delete Appointment

**DELETE** `/api/turnos/:id`

**Response:**
```json
{
  "message": "Appointment deleted successfully"
}
```

---

## Authentication

**POST** `/api/medicos/auth`

**Body Example:**
```json
{
  "nombre": "John",
  "contrasenna": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "data": { ...doctorObject }
}
```

---

## Notes

- All endpoints return JSON.
- Replace `:id` with the actual resource ID.
- Make sure to use valid specialty names when creating or updating doctors.
