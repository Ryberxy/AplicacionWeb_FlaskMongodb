from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

class Usuario:
    def __init__(self, username, password, nombre, email, admin=False):
        self.username = username
        self.password = generate_password_hash(password)  # hash seguro
        self.nombre = nombre
        self.email = email
        self.admin = admin

    def to_dict(self):
        """Convierte el objeto Usuario en diccionario para insertar en MongoDB"""
        return {
            "username": self.username,
            "password": self.password,
            "nombre": self.nombre,
            "email": self.email,
            "admin": self.admin
        }

    @staticmethod
    def verificar_password(hash_guardado, password_introducida):
        """Verifica que la contraseña introducida coincida con el hash"""
        return check_password_hash(hash_guardado, password_introducida)
