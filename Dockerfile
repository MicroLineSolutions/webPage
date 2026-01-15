# Usamos la imagen oficial de nginx
FROM nginx:alpine

# Eliminamos la página por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiamos todos los archivos del repositorio al contenedor
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos nginx
CMD ["nginx", "-g", "daemon off;"]