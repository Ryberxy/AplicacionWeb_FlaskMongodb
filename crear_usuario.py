from pymongo import MongoClient
from models import Usuario
from getpass import getpass  # Para ocultar la contraseña al escribirla

# Conexión con MongoDB
client = MongoClient("mongodb://cliente:cliente@192.168.122.12:27017/empresa")
db = client["empresa"]

print("=== Creación de un nuevo usuario ===")

username = input("Usuario: ")
nombre = input("Nombre completo: ")
email = input("Email: ")
password = getpass("Contraseña: ")

# Pregunta si será admin
es_admin = input("¿Es administrador? (s/n): ").lower() == "s"

# Verifica si ya existe
if db.USUARIOS.find_one({"username": username}):
    print("Ya existe un usuario con ese nombre.")
else:
    nuevo_usuario = Usuario(username, password, nombre, email, es_admin)
    db.USUARIOS.insert_one(nuevo_usuario.to_dict())
    print("Usuario creado correctamente.")
