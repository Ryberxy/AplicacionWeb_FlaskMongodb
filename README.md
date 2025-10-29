# AplicacionWeb_FlaskMongodb
### SCRIPT PARA MONGODB:
<pre>
  mongosh "mongodb://usuario:contraseña@IP_SERVIDOR:27017/BaseDeDatos" script.js
</pre>
### Otra opción es ejecutarlo dentro de la BD:
<pre>
  load(ruta/script.js)
</pre>
  
## PREPARACIÓN DEL ENTORNO VIRTUAL:

<pre>
  python3 -m venv nombre_env
</pre>

### Activarlo:
<pre>
  source nombre_env/bin/activate
</pre>

### Desactivarlo:
<pre>
  deactivate
</pre>

### Vamos a preparar el entorno con los requisitos en el archivo requirements.txt:
<pre>
  pip install -r requirements.txt
</pre>
## EJECUCIÓN DE LA APLICACIÓN:
<pre> python3 app.py </pre>

### CONTENIDO:
Fichero app.py.old → Vulnerable a inyecciones NoSQL.

Fichero app.py → Invulnerable a inyecciones NoSQL.

### CREAR USUARIOS CON CONTRASEÑAS HASHEADAS
Podemos hacerlo desde dentro de la aplicación, pero si aún no hay ninguno creado lo haremos de la siguiente forma:
<pre>
  python3 crear_usuarios.py
</pre>

### FUNCIONAMIENTO


