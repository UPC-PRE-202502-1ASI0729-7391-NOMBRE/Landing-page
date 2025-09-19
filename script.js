// Configuración de la aplicación AngularJS
angular.module('EcoSmartApp', ['ngMaterial', 'ngMessages'])
    .config(function($mdThemingProvider) {
        // Configuración del tema con colores ecológicos
        $mdThemingProvider.definePalette('ecoPrimary', {
            '50': '#e8f5e9',
            '100': '#c8e6c9',
            '200': '#a5d6a7',
            '300': '#81c784',
            '400': '#66bb6a',
            '500': '#2E7D32', // Color principal
            '600': '#43a047',
            '700': '#388e3c',
            '800': '#2e7d32',
            '900': '#1b5e20',
            'A100': '#b9f6ca',
            'A200': '#69f0ae',
            'A400': '#00e676',
            'A700': '#00c853',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 A100 A200',
            'contrastLightColors': '300 400 500 600 700 800 900 A400 A700'
        });
        
        $mdThemingProvider.definePalette('ecoAccent', {
            '50': '#fffde7',
            '100': '#fff9c4',
            '200': '#fff59d',
            '300': '#fff176',
            '400': '#ffee58',
            '500': '#FFC107', // Color de acento
            '600': '#ffd54f',
            '700': '#ffca28',
            '800': '#ffc107',
            '900': '#ffb300',
            'A100': '#ffff8d',
            'A200': '#ffff00',
            'A400': '#ffea00',
            'A700': '#ffd600',
            'contrastDefaultColor': 'dark',
            'contrastDarkColors': '50 100 200 A100 A200',
            'contrastLightColors': '300 400 500 600 700 800 900 A400 A700'
        });
        
        $mdThemingProvider.theme('default')
            .primaryPalette('ecoPrimary')
            .accentPalette('ecoAccent');
    })
    .controller('AppCtrl', function($scope, $mdDialog, $timeout) {
        // Controlador principal de la aplicación
        
        // Datos de los miembros del equipo
        $scope.teamMembers = [
            {
                name: 'Ana Martínez',
                role: 'Especialista en IoT',
                description: 'Ingeniera electrónica con más de 8 años de experiencia en desarrollo de sensores inteligentes para entornos urbanos.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
                social: {
                    linkedin: '#',
                    email: 'ana.martinez@ecosmartwaste.com'
                }
            },
            {
                name: 'Carlos Rodríguez',
                role: 'Data Scientist',
                description: 'Experto en algoritmos de optimización y análisis de datos con amplia experiencia en soluciones para smart cities.',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
                social: {
                    linkedin: '#',
                    email: 'carlos.rodriguez@ecosmartwaste.com'
                }
            },
            {
                name: 'Elena Gómez',
                role: 'Directora de Sostenibilidad',
                description: 'Especialista en economía circular y gestión de residuos con más de 10 años trabajando con administraciones públicas.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
                social: {
                    linkedin: '#',
                    email: 'elena.gomez@ecosmartwaste.com'
                }
            },
            {
                name: 'Javier López',
                role: 'Ingeniero de Software',
                description: 'Desarrollador full-stack especializado en plataformas de monitorización en tiempo real y aplicaciones municipales.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
                social: {
                    linkedin: '#',
                    email: 'javier.lopez@ecosmartwaste.com'
                }
            },
            {
                name: 'María Santos',
                role: 'Jefa de Proyectos',
                description: 'Project Manager con certificación PMP y amplia experiencia en implementación de soluciones tecnológicas para municipios.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
                social: {
                    linkedin: '#',
                    email: 'maria.santos@ecosmartwaste.com'
                }
            }
        ];
        
        // Inicializar el slider después de que se renderice la vista
        $timeout(function() {
            initTeamSwiper();
        }, 100);
        
        // Manejar el envío del formulario
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                // Aquí iría la lógica para enviar el formulario
                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('¡Gracias por su interés!')
                        .textContent('Nos pondremos en contacto shortly para proporcionarle más información sobre nuestras soluciones inteligentes de gestión de residuos.')
                        .ariaLabel('Mensaje enviado')
                        .ok('Aceptar')
                );
                
                // Limpiar el formulario
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                $scope.user = {};
            }
        };
    })
    .run(function($rootScope) {
        // Código que se ejecuta al iniciar la aplicación
        console.log('Aplicación EcoSmart iniciada');
    });

// Inicializar el slider de equipo
function initTeamSwiper() {
    if (typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".teamSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }
}

// Toggle mobile menu
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Close mobile menu after click
        document.getElementById('navMenu').classList.remove('show');
    });
});

// Inicializar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const organization = document.getElementById('organization').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !organization || !email || !message) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, introduzca un email válido.');
                return;
            }
            
            alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto para hablar sobre soluciones de gestión de residuos.');
            contactForm.reset();
        });
    }
    
    // Inicializar el slider si Swiper está disponible
    if (typeof Swiper !== 'undefined') {
        initTeamSwiper();
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}