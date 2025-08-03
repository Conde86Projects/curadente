// CuraDente - Funcionalidades JavaScript Modernas

// Melhorar acessibilidade do formulário de busca
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search_form');
    const searchInput = document.getElementById('input');
    const searchButton = document.getElementById('button');
    
    if (searchForm && searchInput && searchButton) {
        // Adicionar label acessível para o botão de busca
        searchButton.setAttribute('aria-label', 'Buscar no site');
        searchButton.setAttribute('title', 'Buscar no site');
        
        // Melhorar navegação por teclado
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchForm.submit();
            }
        });
        
        // Adicionar foco visual melhorado
        searchInput.addEventListener('focus', function() {
            this.style.outline = '2px solid #F60';
            this.style.outlineOffset = '2px';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    }
});

// Melhorar acessibilidade dos links do menu
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#menu-main a, .menu-leveltwo a');
    
    menuLinks.forEach(link => {
        // Adicionar indicadores de foco
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #F60';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
        
        // Melhorar navegação por teclado
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Adicionar funcionalidade de "voltar ao topo"
document.addEventListener('DOMContentLoaded', function() {
    // Criar botão "voltar ao topo"
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Voltar ao topo da página');
    backToTopButton.setAttribute('title', 'Voltar ao topo');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #9e937e;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
        display: none;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    backToTopButton.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Funcionalidade do botão
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Melhorar acessibilidade do botão
    backToTopButton.addEventListener('focus', function() {
        this.style.outline = '2px solid #F60';
        this.style.outlineOffset = '2px';
    });
    
    backToTopButton.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

// Melhorar performance com lazy loading de imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src*="assets/images/layout/"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s';
            imageObserver.observe(img);
        });
    }
});

// Adicionar funcionalidade de impressão melhorada
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar estilos de impressão
    const printStyles = document.createElement('style');
    printStyles.setAttribute('media', 'print');
    printStyles.textContent = `
        @media print {
            #menu-wrapper, #sidebar-left, .search { display: none !important; }
            #content { width: 100% !important; margin: 0 !important; }
            body { font-size: 12pt !important; line-height: 1.4 !important; }
            a { color: #000 !important; text-decoration: underline !important; }
            h1, h2, h3 { page-break-after: avoid !important; }
        }
    `;
    document.head.appendChild(printStyles);
});

// Melhorar SEO com dados estruturados
document.addEventListener('DOMContentLoaded', function() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "CuraDente",
        "description": "CuraDente: uma abordagem natural e holística para curar permanentemente cáries e doença gengival",
        "url": window.location.origin,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": window.location.origin + "/search-results.html?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
});
