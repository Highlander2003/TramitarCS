# GUÍA: CONFIGURAR GOOGLE ANALYTICS SIN DOMINIO PROPIO

## 🚀 PASO 1: CREAR CUENTA GOOGLE ANALYTICS

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Haz clic en "Comenzar"
3. Crea una nueva propiedad
4. Configura los datos básicos:
   - **Nombre de la cuenta**: TramitarCS
   - **Nombre de la propiedad**: Sitio Web TramitarCS
   - **Zona horaria**: Colombia (GMT-5)
   - **Moneda**: Peso colombiano (COP)

## 🔧 PASO 2: CONFIGURAR PROPIEDAD

### Información del sitio:
- **Categoría del sector**: Servicios profesionales
- **Tamaño de la empresa**: Pequeña empresa
- **URL temporal**: tu-sitio.netlify.app (o el hosting que uses)

### Objetivos empresariales:
- ✅ Generar clientes potenciales
- ✅ Examinar el comportamiento del usuario
- ✅ Medir conversiones

## 📱 PASO 3: CREAR STREAM DE DATOS

1. Selecciona "Web"
2. Configura:
   - **URL del sitio web**: https://tu-sitio.netlify.app
   - **Nombre del stream**: Web Stream TramitarCS
   - **Medición mejorada**: Activada

## 🔑 PASO 4: OBTENER ID DE MEDICIÓN

Después de crear el stream, obtienes:
- **ID de medición**: G-XXXXXXXXXX
- **Código de seguimiento**: Para insertar en tu web

## 📋 PASO 5: IMPLEMENTAR EN TU SITIO

### Código para index.html (antes de </head>):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID_AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU_ID_AQUI');
</script>
```

## 🎯 PASO 6: EVENTOS PERSONALIZADOS

Para tracking de WhatsApp y servicios:

```javascript
// Evento cuando hacen clic en WhatsApp
gtag('event', 'whatsapp_click', {
  'event_category': 'contact',
  'event_label': 'header_button'
});

// Evento por tipo de servicio
gtag('event', 'service_interest', {
  'event_category': 'engagement',
  'event_label': 'licencia_conducir'
});
```

## 📊 PASO 7: VERIFICAR INSTALACIÓN

1. Ve a Analytics > Informes en tiempo real
2. Visita tu sitio web
3. Deberías ver tu visita en tiempo real

## 🔄 CAMBIO POSTERIOR DE DOMINIO

Cuando tengas dominio propio:
1. Ve a Administrador > Configuración de la propiedad
2. Cambia la URL del sitio web
3. Actualiza el stream de datos web
4. No pierdes historial de datos

## ⚡ HOSTING TEMPORAL RECOMENDADO

### Netlify (Más fácil):
1. Arrastra carpeta del proyecto
2. Dominio automático: proyecto-nombre.netlify.app
3. HTTPS automático
4. Compatible con Analytics

### Vercel:
1. Conecta GitHub repo
2. Deploy automático
3. Dominio: proyecto.vercel.app

### GitHub Pages:
1. Sube código a repositorio
2. Settings > Pages
3. Dominio: usuario.github.io/repo

## 🎯 VENTAJAS DE EMPEZAR SIN DOMINIO

✅ **Testing inmediato** de Analytics
✅ **Verificación de funcionamiento** antes de invertir
✅ **Datos de prueba** para optimizar
✅ **Experiencia previa** con la plataforma
✅ **Sin costos iniciales**

## 📈 MÉTRICAS IMPORTANTES A MONITOREAR

- **Usuarios únicos diarios**
- **Tiempo en página**
- **Páginas más visitadas**
- **Dispositivos más usados**
- **Clics en botones WhatsApp**
- **Conversiones a contacto**

## 🔧 CONFIGURACIÓN AVANZADA (OPCIONAL)

### Goals/Objetivos:
- Clic en WhatsApp como conversión
- Tiempo en sitio > 2 minutos
- Visita a página de servicios

### Audiencias:
- Usuarios interesados en licencias
- Usuarios de móvil vs desktop
- Usuarios que contactaron vs que no

---

**¡Empieza con hosting gratuito y migra después sin perder datos!**
