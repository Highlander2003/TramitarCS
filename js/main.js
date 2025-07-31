// Configuración principal
const CONFIG = {
    whatsappNumber: '573117506892', // Número actualizado
    businessHours: {
        start: 8,
        end: 18
    },
    messages: {
        licencia: 'Hola, necesito asesoría para tramitar mi licencia de conducir. ¿Podrían ayudarme con información sobre requisitos y procesos?',
        matricula: 'Hola, necesito información sobre la matrícula de mi vehículo. ¿Podrían asesorarme con los documentos necesarios y el proceso?',
        comparendos: 'Hola, tengo comparendos de tránsito y necesito asesoría sobre cómo resolverlos. ¿Podrían ayudarme?',
        revision: 'Hola, necesito información sobre la revisión técnicomecanica de mi vehículo. ¿Podrían asesorarme?',
        soat: 'Hola, necesito cotizar y adquirir el SOAT para mi vehículo. ¿Podrían ayudarme con las mejores opciones?',
        otros: 'Hola, necesito asesoría sobre trámites de tránsito. ¿Podrían ayudarme con información?',
        general: 'Hola, necesito información sobre sus servicios de trámites de tránsito. ¿Podrían asesorarme?'
    }
};

// Estado de la aplicación
let isMenuOpen = false;
let currentSection = 'inicio';

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Función principal de inicialización
function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    setupServiceCards();
    setupContactButtons();
    setupBusinessHoursCheck();
    setupAnalytics();
    setupThemeDetector();
    enhanceButtonEffects();
    enhanceWhatsAppFloat();
    console.log('TramitarCS - Aplicación inicializada correctamente');
}

// Configuración de navegación
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Navegación suave y cierre de menú
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo manejar enlaces internos
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Cerrar menú móvil si está abierto
                    if (isMenuOpen) {
                        toggleMobileMenu();
                    }
                    
                    // Scroll suave a la sección
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar enlace activo
                    updateActiveNavLink(href.substring(1));
                }
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
    });
}

// Toggle del menú móvil
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    isMenuOpen = !isMenuOpen;
    
    if (navMenu) {
        navMenu.classList.toggle('active', isMenuOpen);
    }
    
    if (navToggle) {
        navToggle.classList.toggle('active', isMenuOpen);
    }
    
    // Prevenir scroll del body cuando el menú está abierto
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

// Actualizar enlace activo en la navegación
function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    currentSection = sectionId;
}

// Efectos de scroll
function setupScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateScrollEffects() {
        const currentScrollY = window.scrollY;
        
        // Header con efecto de aparición/desaparición
        updateHeaderVisibility(currentScrollY, lastScrollY);
        
        // Actualizar sección activa
        updateActiveSection();
        
        // Animaciones de elementos al entrar en viewport
        animateOnScroll();
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Actualizar visibilidad del header
function updateHeaderVisibility(currentScrollY, lastScrollY) {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.style.transform = 'translateY(0)';
    }
}

// Actualizar sección activa basada en scroll
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    if (current && current !== currentSection) {
        updateActiveNavLink(current);
    }
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .feature-item, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Configuración de tarjetas de servicios
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Efecto hover mejorado con rotación suave
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(2deg)';
            
            // Efecto de brillo en el icono
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'rotate(5deg) scale(1.1)';
                icon.style.background = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            
            // Restaurar icono
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
                icon.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))';
            }
        });
        
        // Efecto de clic con animación de ondas
        card.addEventListener('mousedown', function(e) {
            // Crear efecto de ondas en el punto de clic
            createRippleEffect(this, e);
            
            // Animación de presión
            this.style.transform = 'translateY(-8px) scale(0.98)';
            
            setTimeout(() => {
                if (this.matches(':hover')) {
                    this.style.transform = 'translateY(-10px) scale(1.02) rotateX(2deg)';
                } else {
                    this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                }
            }, 150);
        });
        
        // Tracking de analytics mejorado
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            if (serviceType) {
                trackServiceClick(serviceType);
                
                // Efecto visual de confirmación
                showClickFeedback(this);
            }
        });
    });
}

// Configuración de botones de contacto
function setupContactButtons() {
    // Botones de WhatsApp en servicios
    const serviceButtons = document.querySelectorAll('.btn-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const serviceCard = this.closest('.service-card');
            const serviceType = serviceCard ? serviceCard.getAttribute('data-service') : 'general';
            contactWhatsApp(serviceType);
        });
    });
    
    // Botones de WhatsApp generales
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackWhatsAppClick('general');
        });
    });
}

// Función para contactar vía WhatsApp
function contactWhatsApp(serviceType = 'general') {
    const message = CONFIG.messages[serviceType] || CONFIG.messages.general;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    // Tracking
    trackWhatsAppClick(serviceType);
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Feedback visual
    showNotification(`Redirigiendo a WhatsApp para ${serviceType}...`, 'success');
}

// Verificación de horario comercial
function setupBusinessHoursCheck() {
    const currentHour = new Date().getHours();
    const isBusinessHours = currentHour >= CONFIG.businessHours.start && currentHour < CONFIG.businessHours.end;
    
    if (!isBusinessHours) {
        // Agregar indicador de horario no comercial
        const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
        whatsappButtons.forEach(button => {
            const indicator = document.createElement('div');
            indicator.className = 'business-hours-indicator';
            indicator.textContent = 'Respuesta en horario laboral';
            indicator.style.cssText = `
                position: absolute;
                bottom: -25px;
                right: 0;
                background: #374151;
                color: white;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 10px;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s;
            `;
            
            button.style.position = 'relative';
            button.appendChild(indicator);
            
            button.addEventListener('mouseenter', () => {
                indicator.style.opacity = '1';
            });
            
            button.addEventListener('mouseleave', () => {
                indicator.style.opacity = '0';
            });
        });
    }
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remove después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Configuración de Google Analytics
function setupAnalytics() {
    // Configurar eventos de Google Analytics si está disponible
    if (typeof gtag !== 'undefined') {
        console.log('Google Analytics configurado');
    } else {
        console.log('Google Analytics no detectado - Modo desarrollo');
    }
}

// Tracking de eventos
function trackServiceClick(serviceType) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'service_click', {
            service_type: serviceType,
            event_category: 'engagement'
        });
    }
    
    console.log(`Servicio clickeado: ${serviceType}`);
}

function trackWhatsAppClick(serviceType) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            service_type: serviceType,
            event_category: 'contact'
        });
    }
    
    console.log(`WhatsApp contactado para: ${serviceType}`);
}

// Crear efecto de ondas (ripple) en botones y tarjetas
function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
        z-index: 10;
    `;
    
    // Asegurar que el elemento padre tenga position relative
    const originalPosition = element.style.position;
    if (!originalPosition || originalPosition === 'static') {
        element.style.position = 'relative';
    }
    
    element.appendChild(ripple);
    
    // Animar la onda
    ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(2)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'ease-out'
    }).onfinish = () => {
        ripple.remove();
    };
}

// Feedback visual para clics
function showClickFeedback(element) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--whatsapp-color);
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: 20;
    `;
    feedback.textContent = '✓ Clic';
    
    element.style.position = 'relative';
    element.appendChild(feedback);
    
    // Animar aparición
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'scale(1)';
    }, 50);
    
    // Animar desaparición
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'scale(0.8)';
        setTimeout(() => feedback.remove(), 300);
    }, 1500);
}

// Mejorar efectos de botones
function enhanceButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Efecto de hover con transformación suave
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
            } else if (this.classList.contains('btn-whatsapp')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            if (this.classList.contains('btn-primary')) {
                this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
            } else if (this.classList.contains('btn-whatsapp')) {
                this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
            }
        });
        
        // Efecto de clic
        button.addEventListener('mousedown', function(e) {
            createRippleEffect(this, e);
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        button.addEventListener('mouseup', function() {
            if (this.matches(':hover')) {
                if (this.classList.contains('btn-primary') || this.classList.contains('btn-whatsapp')) {
                    this.style.transform = 'translateY(-3px) scale(1.05)';
                }
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Función para el botón flotante de WhatsApp con efectos especiales
function enhanceWhatsAppFloat() {
    const whatsappFloat = document.querySelector('.whatsapp-btn');
    if (!whatsappFloat) return;
    
    // Efecto de pulsación inteligente
    let pulseInterval;
    let isHovered = false;
    
    function startSmartPulse() {
        if (isHovered) return;
        
        pulseInterval = setInterval(() => {
            if (isHovered) return;
            
            whatsappFloat.style.animation = 'none';
            whatsappFloat.offsetHeight; // Trigger reflow
            whatsappFloat.style.animation = 'float-whatsapp 3s ease-in-out infinite';
        }, 8000);
    }
    
    whatsappFloat.addEventListener('mouseenter', function() {
        isHovered = true;
        clearInterval(pulseInterval);
        this.style.animation = 'none';
    });
    
    whatsappFloat.addEventListener('mouseleave', function() {
        isHovered = false;
        startSmartPulse();
    });
    
    // Efecto especial cada 30 segundos para llamar la atención
    setInterval(() => {
        if (!isHovered && !document.hidden) {
            whatsappFloat.style.animation = 'none';
            whatsappFloat.offsetHeight;
            whatsappFloat.style.animation = 'float-whatsapp 1s ease-in-out 3, float-whatsapp 3s ease-in-out infinite 3s';
        }
    }, 30000);
    
    startSmartPulse();
}
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };


function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimización de performance
const optimizedScrollHandler = throttle(function() {
    updateActiveSection();
    animateOnScroll();
}, 100);

// Preload de imágenes importantes
function preloadImages() {
    const criticalImages = [
        'assets/hero-traffic.svg',
        // Agregar más imágenes críticas aquí
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Lazy loading para imágenes no críticas
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Configuración del detector de tema
function setupThemeDetector() {
    // Detectar preferencia inicial del tema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Función para aplicar el tema
    function applyTheme(isDark) {
        const body = document.body;
        
        if (isDark) {
            body.classList.add('dark-theme');
            console.log('Tema oscuro activado');
        } else {
            body.classList.remove('dark-theme');
            console.log('Tema claro activado');
        }
        
        // Actualizar metaetiqueta para la barra de estado en móviles
        updateThemeColor(isDark);
    }
    
    // Función para actualizar el color de la barra de estado
    function updateThemeColor(isDark) {
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        
        if (!themeColorMeta) {
            themeColorMeta = document.createElement('meta');
            themeColorMeta.name = 'theme-color';
            document.head.appendChild(themeColorMeta);
        }
        
        // Cambiar color de la barra de estado según el tema
        themeColorMeta.content = isDark ? '#111827' : '#ffffff';
    }
    
    // Aplicar tema inicial
    applyTheme(prefersDarkScheme.matches);
    
    // Escuchar cambios en la preferencia del tema
    prefersDarkScheme.addEventListener('change', function(e) {
        applyTheme(e.matches);
        
        // Tracking del cambio de tema
        if (typeof gtag !== 'undefined') {
            gtag('event', 'theme_change', {
                event_category: 'UI',
                event_label: e.matches ? 'dark' : 'light',
                value: 1
            });
        }
    });
    
    // Función para obtener el tema actual
    window.getCurrentTheme = function() {
        return prefersDarkScheme.matches ? 'dark' : 'light';
    };
    
    console.log('Detector de tema configurado. Tema actual:', getCurrentTheme());
}

// Manejo de errores global
window.addEventListener('error', function(e) {
    console.error('Error en TramitarCS:', e.error);
    
    // Tracking de errores si Analytics está disponible
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error.toString(),
            fatal: false
        });
    }
});

// Funciones expuestas globalmente
window.contactWhatsApp = contactWhatsApp;
window.trackServiceClick = trackServiceClick;
window.showNotification = showNotification;

// Inicializar cuando todo esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
