use empresa;

db.createCollection("PRODUCTOS", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["CodProducto", "Nombre", "Tipo", "PrecioUnitario"],
      properties: {
        CodProducto: {
          bsonType: "int",
          description: "Debe ser un número entero"
        },
        Nombre: {
          bsonType: "string",
          maxLength: 20,
          description: "Nombre del producto (máximo 20 caracteres)"
        },
        Tipo: {
          enum: ["Menaje", "Informática", "Telefonía"],
          description: "Solo puede ser Menaje, Informática o Telefonía"
        },
        PrecioUnitario: {
          bsonType: "double",
          minimum: 0,
          maximum: 5000,
          description: "Debe estar entre 0 y 5000"
        }
      }
    }
  }
});

db.PRODUCTOS.createIndex({ CodProducto: 1 }, { unique: true });

db.createCollection("CLIENTES", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["DNI_Cliente", "Nombre", "FechaAlta", "País"],
      properties: {
        DNI_Cliente: {
          bsonType: "string",
          pattern: "^[0-9]{8}-[A-Z]$",
          description: "Debe tener 8 dígitos, un guión y una letra mayúscula (ej: 12345678-A)"
        },
        Nombre: {
          bsonType: "string",
          maxLength: 20,
          description: "Nombre del cliente (máximo 20 caracteres)"
        },
        FechaAlta: {
          bsonType: "date",
          description: "Debe ser posterior a 2019"
        },
        País: {
          enum: ["España", "Italia", "Francia"],
          description: "Debe ser uno de los países indicados"
        }
      }
    }
  }
});

db.CLIENTES.createIndex({ DNI_Cliente: 1 }, { unique: true });

db.createCollection("VENTAS", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["CodProducto", "DNI_Cliente", "FechaVenta", "NumUnidades"],
      properties: {
        CodProducto: {
          bsonType: "int",
          description: "Código del producto (entero)"
        },
        DNI_Cliente: {
          bsonType: "string",
          pattern: "^[0-9]{8}-[A-Z]$",
          description: "Debe coincidir con el formato de DNI de CLIENTES"
        },
        FechaVenta: {
          bsonType: "date",
          description: "Fecha de la venta"
        },
        NumUnidades: {
          bsonType: "int",
          minimum: 1,
          description: "Número de unidades vendidas (entero positivo)"
        }
      }
    }
  }
});


db.VENTAS.createIndex(
  { CodProducto: 1, DNI_Cliente: 1, FechaVenta: 1 },
  { unique: true }
);

db.PRODUCTOS.insertMany([
  { CodProducto: 1, Nombre: "Taza cerámica", Tipo: "Menaje", PrecioUnitario: 8.99 },
  { CodProducto: 2, Nombre: "Ratón óptico", Tipo: "Informática", PrecioUnitario: 15.50 },
  { CodProducto: 3, Nombre: "Smartphone X", Tipo: "Telefonía", PrecioUnitario: 499.99 },
  { CodProducto: 4, Nombre: "Cafetera", Tipo: "Menaje", PrecioUnitario: 79.90 },
  { CodProducto: 5, Nombre: "Teclado mecánico", Tipo: "Informática", PrecioUnitario: 120.25 },
  { CodProducto: 6, Nombre: "Auriculares", Tipo: "Telefonía", PrecioUnitario: 89.99 },
  { CodProducto: 7, Nombre: "Sartén", Tipo: "Menaje", PrecioUnitario: 29.95 },
  { CodProducto: 8, Nombre: "Monitor LED", Tipo: "Informática", PrecioUnitario: 199.99 },
  { CodProducto: 9, Nombre: "Cargador rápido", Tipo: "Telefonía", PrecioUnitario: 25.35 },
  { CodProducto: 10, Nombre: "Juego de cuchillos", Tipo: "Menaje", PrecioUnitario: 45.50 }
]);


db.CLIENTES.insertMany([
  { DNI_Cliente: "12345678-A", Nombre: "Laura Gómez", FechaAlta: new Date("2021-05-12"), País: "España" },
  { DNI_Cliente: "87654321-B", Nombre: "Marco Rossi", FechaAlta: new Date("2022-03-20"), País: "Italia" },
  { DNI_Cliente: "56781234-C", Nombre: "Claire Dubois", FechaAlta: new Date("2023-11-08"), País: "Francia" },
  { DNI_Cliente: "11223344-D", Nombre: "Carlos Pérez", FechaAlta: new Date("2020-01-15"), País: "España" },
  { DNI_Cliente: "99887766-E", Nombre: "Giulia Bianchi", FechaAlta: new Date("2022-10-05"), País: "Italia" },
  { DNI_Cliente: "33445566-F", Nombre: "Antoine Lefèvre", FechaAlta: new Date("2021-06-30"), País: "Francia" },
  { DNI_Cliente: "55667788-G", Nombre: "Isabel Martín", FechaAlta: new Date("2023-03-12"), País: "España" },
  { DNI_Cliente: "66778899-H", Nombre: "Sergio López", FechaAlta: new Date("2020-07-22"), País: "España" },
  { DNI_Cliente: "44556677-I", Nombre: "Alessia Conti", FechaAlta: new Date("2021-09-01"), País: "Italia" },
  { DNI_Cliente: "77889900-J", Nombre: "Luc Moreau", FechaAlta: new Date("2024-02-14"), País: "Francia" }
]);



db.VENTAS.insertMany([
  { CodProducto: 1, DNI_Cliente: "12345678-A", FechaVenta: new Date("2023-06-01"), NumUnidades: 3 },
  { CodProducto: 2, DNI_Cliente: "87654321-B", FechaVenta: new Date("2024-01-15"), NumUnidades: 1 },
  { CodProducto: 3, DNI_Cliente: "56781234-C", FechaVenta: new Date("2024-07-10"), NumUnidades: 2 },
  { CodProducto: 4, DNI_Cliente: "11223344-D", FechaVenta: new Date("2023-12-01"), NumUnidades: 9 },
  { CodProducto: 5, DNI_Cliente: "99887766-E", FechaVenta: new Date("2024-05-20"), NumUnidades: 6 },
  { CodProducto: 6, DNI_Cliente: "33445566-F", FechaVenta: new Date("2025-01-30"), NumUnidades: 1 },
  { CodProducto: 7, DNI_Cliente: "55667788-G", FechaVenta: new Date("2024-03-15"), NumUnidades: 4 },
  { CodProducto: 8, DNI_Cliente: "66778899-H", FechaVenta: new Date("2025-02-10"), NumUnidades: 2 },
  { CodProducto: 9, DNI_Cliente: "44556677-I", FechaVenta: new Date("2024-11-12"), NumUnidades: 3 },
  { CodProducto: 10, DNI_Cliente: "77889900-J", FechaVenta: new Date("2025-06-05"), NumUnidades: 7 }]);

  db.VENTAS.insertMany([
  { CodProducto: 2, DNI_Cliente: "12345678-A", FechaVenta: new Date("2025-03-01"), NumUnidades: 1 },
  { CodProducto: 4, DNI_Cliente: "12345678-A", FechaVenta: new Date("2025-05-10"), NumUnidades: 2 },
  { CodProducto: 1, DNI_Cliente: "87654321-B", FechaVenta: new Date("2024-07-21"), NumUnidades: 1 },
  { CodProducto: 6, DNI_Cliente: "87654321-B", FechaVenta: new Date("2024-10-10"), NumUnidades: 2 },
  { CodProducto: 7, DNI_Cliente: "56781234-C", FechaVenta: new Date("2024-08-01"), NumUnidades: 1 },
  { CodProducto: 9, DNI_Cliente: "56781234-C", FechaVenta: new Date("2025-01-01"), NumUnidades: 2 },
  { CodProducto: 3, DNI_Cliente: "11223344-D", FechaVenta: new Date("2024-04-04"), NumUnidades: 1 },
  { CodProducto: 5, DNI_Cliente: "11223344-D", FechaVenta: new Date("2025-09-15"), NumUnidades: 1 },
  { CodProducto: 2, DNI_Cliente: "99887766-E", FechaVenta: new Date("2025-02-22"), NumUnidades: 3 },
  { CodProducto: 10, DNI_Cliente: "99887766-E", FechaVenta: new Date("2025-08-08"), NumUnidades: 1 }])
  
db.createCollection("USUARIOS", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password", "nombre", "email", "admin"],
      properties: {
        username: {
          bsonType: "string",
          maxLength: 25,
          description: "Nombre de usuario obligatorio, máximo 25 caracteres"
        },
        password: {
          bsonType: "string",
          minLength: 6,
          description: "Contraseña obligatoria, al menos 6 caracteres"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del usuario obligatorio"
        },
        email: {
          bsonType: "string",
          description: "Email obligatorio del usuario"
        },
        admin: {
          bsonType: "bool",
          description: "Rol de usuario obligatorio"
        }
      }
    }
  }
});
