# Microline Solutions - Deployment Guide

## Versión de Producción - dist/

Esta carpeta contiene todos los archivos optimizados y listos para producción.

### Estructura de Archivos

```
dist/
├── index.html              # Página principal (optimizada)
├── .htaccess              # Configuración Apache (HTTPS, cache, compresión)
├── robots.txt             # Configuración SEO
├── sitemap.xml            # Mapa del sitio
├── css/
│   └── styles.min.css     # CSS minificado
├── js/
│   └── main.min.js        # JavaScript minificado
└── images/
    ├── logo.png           # Logo principal
    ├── hero-odoo.png      # Imagen hero
    └── favicon/           # Favicons multi-resolución
        ├── favicon.ico
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        └── site.webmanifest
```

### Checklist Pre-Despliegue ✅

- ✅ HTML minificado y optimizado
- ✅ CSS minificado (styles.min.css)
- ✅ JavaScript minificado (main.min.js)
- ✅ Imágenes optimizadas
- ✅ Favicon multi-resolución implementado
- ✅ HTTPS forzado via .htaccess
- ✅ Compresión Gzip habilitada
- ✅ Cache del navegador configurado
- ✅ Headers de seguridad aplicados
- ✅ robots.txt y sitemap.xml creados
- ✅ Links internos verificados
- ✅ Responsive design confirmado
- ✅ Formulario de contacto funcional
- ✅ WhatsApp y email links operativos

### Información de Contacto Verificada

- **Email:** contacto@microlinesolutions.com
- **Teléfono:** +595 993 361 400
- **WhatsApp:** https://wa.link/vrr4ny
- **Dirección:** Ruta PY02 Km 173 Barrio Walter Insfran, Caaguazú, Paraguay
- **Horario:** Lun - Vie, 8:00-17:00
- **Facebook:** https://www.facebook.com/microlinesolutions

### Precios Confirmados (en Guaraníes)

**Paquetes de Implementación:**
- Paquete Inicio: Desde 2.345.000 Gs
- Paquete Empresarial: Desde 4.690.000 Gs

**Planes de Soporte:**
- Básico: 450.000 Gs/mes
- Estándar: 900.000 Gs/mes
- Premium: 1.500.000 Gs/mes

**Planes de Hosting:**
- Básico: 250.000 Gs/mes
- Estándar: 450.000 Gs/mes
- Premium: 1.000.000 Gs/mes

### Instrucciones de Despliegue

1. **Via FTP/SFTP:**
   - Subir todo el contenido de la carpeta `dist/` al directorio raíz del servidor
   - Asegurar que `.htaccess` esté en la raíz
   - Verificar permisos de archivos (644 para archivos, 755 para directorios)

2. **Via cPanel:**
   - Comprimir la carpeta `dist/` en un archivo ZIP
   - Subir el ZIP via File Manager
   - Extraer en la carpeta `public_html/`
   - Eliminar el archivo ZIP

3. **Via Git (si el hosting lo soporta):**
   ```bash
   git checkout production
   git pull origin production
   ```

### Post-Despliegue

1. Verificar que el sitio cargue correctamente en:
   - https://microlinesolutions.com
   - https://www.microlinesolutions.com (debe redirigir)

2. Probar en múltiples dispositivos:
   - Desktop (Chrome, Firefox, Safari, Edge)
   - Mobile (iOS Safari, Chrome Android)
   - Tablet

3. Verificar funcionalidades:
   - Navegación smooth scroll
   - Formulario de contacto
   - Links de WhatsApp y redes sociales
   - Favicon en todas las pestañas

4. Performance:
   - Google PageSpeed Insights
   - GTmetrix
   - Verificar tiempos de carga < 3 segundos

5. SEO:
   - Google Search Console
   - Verificar robots.txt: https://microlinesolutions.com/robots.txt
   - Verificar sitemap.xml: https://microlinesolutions.com/sitemap.xml

### Mantenimiento

Para futuras actualizaciones:
1. Hacer cambios en la rama `main`
2. Probar localmente
3. Hacer commit y push
4. Merge a `production`
5. Desplegar la carpeta `dist/` actualizada

### Soporte Técnico

Para problemas técnicos o dudas sobre el despliegue, contactar al equipo de desarrollo.

---
**Última actualización:** 25 de Diciembre, 2025
**Versión:** 1.0.0
