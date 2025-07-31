// CONFIGURACIÓN DE TRAMITARCS
// Edita este archivo para personalizar tu sitio web

const SITE_CONFIG = {
    // INFORMACIÓN DEL NEGOCIO
    business: {
        name: "TramitarCS",
        slogan: "Trámites de Tránsito",
        description: "Tu aliado en trámites de tránsito. Facilitamos todos tus procesos vehiculares con asesoría personalizada.",
        
        // CONTACTO
        whatsapp: "573117506892", // Número de WhatsApp actualizado
        email: "tramitarcs91@gmail.com",
        website: "https://tramitarcs.com",
        
        // HORARIOS
        businessHours: {
            start: 8,  // 8:00 AM
            end: 18,   // 6:00 PM
            days: "Lunes a Viernes"
        }
    },

    // SERVICIOS OFRECIDOS
    services: {
        licencia: {
            title: "Licencia de Conducir",
            description: "Tramita tu licencia nueva, renovación o recategorización. Te guiamos en todo el proceso.",
            features: [
                "Licencia nueva",
                "Renovación", 
                "Recategorización",
                "Duplicado"
            ],
            whatsappMessage: "Hola, necesito asesoría para tramitar mi licencia de conducir. ¿Podrían ayudarme con información sobre requisitos y procesos?"
        },
        
        matricula: {
            title: "Matrícula de Vehículo",
            description: "Matricula tu vehículo nuevo o usado. Proceso completo con todos los documentos necesarios.",
            features: [
                "Vehículos nuevos",
                "Vehículos usados",
                "Traspaso",
                "Cambio de ciudad"
            ],
            whatsappMessage: "Hola, necesito información sobre la matrícula de mi vehículo. ¿Podrían asesorarme con los documentos necesarios y el proceso?"
        },
        
        comparendos: {
            title: "Comparendos",
            description: "Resuelve tus multas de tránsito de manera efectiva. Conoce tus opciones y evita sanciones mayores.",
            features: [
                "Consulta de multas",
                "Descuentos disponibles",
                "Recursos de apelación",
                "Cursos pedagógicos"
            ],
            whatsappMessage: "Hola, tengo comparendos de tránsito y necesito asesoría sobre cómo resolverlos. ¿Podrían ayudarme?"
        },
        
        revision: {
            title: "Revisión Técnica",
            description: "Programa tu revisión técnicomecanica y de gases. Te ayudamos a encontrar el mejor centro.",
            features: [
                "Revisión técnicomecanica",
                "Revisión de gases",
                "Centros autorizados",
                "Citas disponibles"
            ],
            whatsappMessage: "Hola, necesito información sobre la revisión técnicomecanica de mi vehículo. ¿Podrían asesorarme?"
        },
        
        soat: {
            title: "SOAT",
            description: "Adquiere tu SOAT de manera rápida y segura. Comparamos precios entre aseguradoras.",
            features: [
                "Mejores precios",
                "Múltiples aseguradoras",
                "Entrega inmediata",
                "Renovación automática"
            ],
            whatsappMessage: "Hola, necesito cotizar y adquirir el SOAT para mi vehículo. ¿Podrían ayudarme con las mejores opciones?"
        },
        
        otros: {
            title: "Otros Trámites",
            description: "¿Necesitas ayuda con otro trámite? Contáctanos y te asesoramos con cualquier gestión vehicular.",
            features: [
                "Tarjeta de propiedad",
                "Blindaje vehicular",
                "Importación",
                "Consultoría personalizada"
            ],
            whatsappMessage: "Hola, necesito asesoría sobre trámites de tránsito. ¿Podrían ayudarme con información?"
        }
    },

    // CARACTERÍSTICAS DEL NEGOCIO
    features: [
        {
            icon: "fas fa-clock",
            title: "Atención Inmediata",
            description: "Respuesta rápida vía WhatsApp en horario laboral"
        },
        {
            icon: "fas fa-user-tie",
            title: "Expertos Certificados", 
            description: "Profesionales con amplia experiencia en trámites"
        },
        {
            icon: "fas fa-money-bill-wave",
            title: "Precios Competitivos",
            description: "Tarifas justas y transparentes sin costos ocultos"
        },
        {
            icon: "fas fa-check-circle",
            title: "Gestión Completa",
            description: "Nos encargamos de todo el proceso de principio a fin"
        }
    ],

    // CONFIGURACIÓN DE GOOGLE
    google: {
        // Google Analytics (Reemplazar con tu ID)
        analyticsId: "G-XXXXXXXXXX",
        
        // Google AdSense (Reemplazar con tu ID)
        adsenseId: "ca-pub-XXXXXXXXXXXXXXXX",
        
        // Slots de anuncios (Crear en AdSense)
        adSlots: {
            bannerTop: "XXXXXXXXXX",
            rectangleMid: "XXXXXXXXXX", 
            bannerBottom: "XXXXXXXXXX"
        }
    },

    // SEO Y META TAGS
    seo: {
        title: "TramitarCS - Trámites de Tránsito Fáciles y Rápidos",
        description: "Servicios de trámites de tránsito - Asesoría personalizada para licencias, matrículas, comparendos y más",
        keywords: "trámites tránsito, licencia conducir, matrícula vehículo, comparendos, revisión técnica, SOAT, Colombia",
        ogImage: "https://tramitarcs.com/assets/og-image.jpg"
    },

    // COLORES DEL SITIO (CSS Variables)
    colors: {
        primary: "#2563eb",
        primaryDark: "#1d4ed8", 
        secondary: "#10b981",
        accent: "#f59e0b",
        whatsapp: "#25d366",
        textPrimary: "#1f2937",
        textSecondary: "#6b7280"
    },

    // REDES SOCIALES
    social: {
        whatsapp: "https://wa.me/573117506892",
        facebook: "", // Opcional
        instagram: "", // Opcional
        twitter: "" // Opcional
    }
};

// FUNCIÓN PARA APLICAR CONFIGURACIÓN
function applyConfig() {
    // Aplicar colores CSS
    const root = document.documentElement;
    Object.entries(SITE_CONFIG.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-color`, value);
    });
    
    // Aplicar información del negocio
    document.title = SITE_CONFIG.seo.title;
    
    // Aplicar meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = SITE_CONFIG.seo.description;
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = SITE_CONFIG.seo.keywords;
    }
}

// FUNCIÓN PARA ACTUALIZAR SERVICIOS DINÁMICAMENTE
function updateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';
    
    Object.entries(SITE_CONFIG.services).forEach(([key, service]) => {
        const serviceCard = createServiceCard(key, service);
        servicesGrid.appendChild(serviceCard);
    });
}

// FUNCIÓN PARA CREAR TARJETA DE SERVICIO
function createServiceCard(serviceKey, service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-service', serviceKey);
    
    const iconMap = {
        licencia: 'fas fa-id-card',
        matricula: 'fas fa-file-alt', 
        comparendos: 'fas fa-exclamation-triangle',
        revision: 'fas fa-tools',
        soat: 'fas fa-shield-alt',
        otros: 'fas fa-clipboard-list'
    };
    
    card.innerHTML = `
        <div class="service-icon">
            <i class="${iconMap[serviceKey] || 'fas fa-cog'}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <ul class="service-features">
            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <button class="btn btn-service" onclick="contactWhatsApp('${serviceKey}')">
            <i class="fab fa-whatsapp"></i>
            Consultar Asesoría
        </button>
    `;
    
    return card;
}

// FUNCIÓN PARA ACTUALIZAR INFORMACIÓN DE CONTACTO
function updateContactInfo() {
    // Actualizar enlaces de WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${SITE_CONFIG.business.whatsapp}?text=${encodeURIComponent('Hola, necesito información sobre trámites de tránsito')}`;
    });
    
    // Actualizar email
    const emailLinks = document.querySelectorAll('a[href*="mailto"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${SITE_CONFIG.business.email}`;
        link.textContent = SITE_CONFIG.business.email;
    });
    
    // Actualizar números de teléfono
    const phoneLinks = document.querySelectorAll('.contact-link');
    phoneLinks.forEach(link => {
        if (link.href && link.href.includes('wa.me')) {
            link.textContent = `+${SITE_CONFIG.business.whatsapp}`;
        }
    });
}

// APLICAR CONFIGURACIÓN AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
    updateContactInfo();
    
    // Aplicar configuración a la variable global del main.js
    if (typeof CONFIG !== 'undefined') {
        CONFIG.whatsappNumber = SITE_CONFIG.business.whatsapp;
        
        // Actualizar mensajes de WhatsApp
        Object.entries(SITE_CONFIG.services).forEach(([key, service]) => {
            CONFIG.messages[key] = service.whatsappMessage;
        });
    }
});

// EXPORTAR CONFIGURACIÓN PARA USO GLOBAL
window.SITE_CONFIG = SITE_CONFIG;
