// Sistema de Breadcrumbs Dinâmicos para CuraDente
// Melhora navegação e SEO

// Mapeamento de páginas para breadcrumbs
const breadcrumbMap = {
    'index.html': {
        title: 'Home',
        path: []
    },
    'natural.html': {
        title: 'Natural',
        path: ['Home']
    },
    'alimentos-nutricao-saude-doenca-dentarias.html': {
        title: 'Alimentos e Nutrição',
        path: ['Home', 'Natural']
    },
    'auto-regeneracao-dentaria-rebrota.html': {
        title: 'Auto-cura de dentes',
        path: ['Home', 'Natural']
    },
    'cuidado-dentario-higiene-oral.html': {
        title: 'Cuidado Dentário & Higiene Oral',
        path: ['Home', 'Natural']
    },
    'desintoxicacao-bucal-dental.html': {
        title: 'Desintoxicação oral',
        path: ['Home', 'Natural']
    },
    'remedios-dentarios-caseiros-naturais.html': {
        title: 'Remédios caseiros para problemas dentários',
        path: ['Home', 'Natural']
    },
    'experiencias-testemunhos-dentarios.html': {
        title: 'Experiências & Testemunhos Pessoais',
        path: ['Home', 'Natural']
    },
    'holistica.html': {
        title: 'Holística',
        path: ['Home']
    },
    'psicologia.html': {
        title: 'Psicologia',
        path: ['Home', 'Holística']
    },
    'energetica.html': {
        title: 'Energética',
        path: ['Home', 'Holística']
    },
    'espiritualidade.html': {
        title: 'Espiritualidade',
        path: ['Home', 'Holística']
    },
    'convencional.html': {
        title: 'Convencional',
        path: ['Home']
    },
    'introducao-desvantagens-odontologia-convencional.html': {
        title: 'As desvantagens da odontologia convencional',
        path: ['Home', 'Convencional']
    },
    'dentistas-diagnosticos-falhos.html': {
        title: 'Dez dentistas - dez diagnósticos',
        path: ['Home', 'Convencional']
    },
    'plano-de-tratamento-dentista-honestidade.html': {
        title: 'Honestidade e qualidade dos diagnósticos odontológicos',
        path: ['Home', 'Convencional']
    },
    'restauracoes-obturacoes-dentarias-perigos.html': {
        title: 'Obturações dentárias',
        path: ['Home', 'Convencional']
    },
    'tratamento-de-canal-introducao.html': {
        title: 'Tratamento de canal de raiz dentária',
        path: ['Home', 'Convencional']
    },
    'pontes-e-coroas-dentarias.html': {
        title: 'Pontes, coroas',
        path: ['Home', 'Convencional']
    },
    'odontologia-convencional-experiencias.html': {
        title: 'Experiências pessoais & testemunhos',
        path: ['Home', 'Convencional']
    },
    'odontologia-outros-riscos-saude.html': {
        title: 'Riscos Diversos Relacionados à Odontologia',
        path: ['Home', 'Convencional']
    },
    'clorexidina-enxaguatorio-bucal.html': {
        title: 'Clorexidina',
        path: ['Home', 'Convencional']
    },
    'como-encontrar-bom-dentista.html': {
        title: 'Dicas de como encontrar um bom dentista',
        path: ['Home', 'Convencional']
    },
    'recursos.html': {
        title: 'Recursos',
        path: ['Home']
    },
    'pesquisa-odontologica-alternativa.html': {
        title: 'Pesquisa alternativa sobre saúde e doença dentais',
        path: ['Home', 'Recursos']
    },
    'livros-e-imagens.html': {
        title: 'Livros e imagens',
        path: ['Home', 'Recursos']
    },
    'produtos-comerciais.html': {
        title: 'Produtos comerciais',
        path: ['Home', 'Recursos']
    },
    'glossario-dental.html': {
        title: 'Glossário de termos',
        path: ['Home', 'Recursos']
    },
    'links-informativos.html': {
        title: 'Links (em inglês)',
        path: ['Home', 'Recursos']
    },
    'perfuracao-obturacao-dentes-riscos-danos-perigos.html': {
        title: 'Perfuração & obturação de dentes: uma escolha imprudente?',
        path: ['Home']
    },
    'xilitol-auto-tratamento-dentario.html': {
        title: 'Bochechar e escovar os dentes com o açúcar xilitol',
        path: ['Home']
    },
    'sal-agua-salmoura-dor-de-dente-cura.html': {
        title: 'Minha melhor cura pessoal para dor de dente: Enxagues com salmoura',
        path: ['Home']
    },
    'transporte-fluido-dentinal-steinman-leonora.html': {
        title: 'Transporte do fluido dentinal - teoria revolucionária',
        path: ['Home']
    },
    'urinoterapia-dentes-gengivas.html': {
        title: 'Urinoterapia para a cura de problemas com os dentes e gengivas',
        path: ['Home']
    },
    'search-results.html': {
        title: 'Resultados da Busca',
        path: ['Home']
    },
    'apoie-esse-site.html': {
        title: 'Apoie esse site',
        path: ['Home']
    },
    'contato.html': {
        title: 'Contato',
        path: ['Home']
    },
    'sobre-mim.html': {
        title: 'Sobre mim',
        path: ['Home']
    },
    'sobre-site.html': {
        title: 'Sobre esse site',
        path: ['Home']
    },
    'disclaimer.html': {
        title: 'Renúncia de responsabilidade',
        path: ['Home']
    },
    'politica-de-privacidade.html': {
        title: 'Política de Privacidade',
        path: ['Home']
    },
    'mapa-do-sitio.html': {
        title: 'Mapa do sítio',
        path: ['Home']
    }
};

// URLs dos breadcrumbs
const breadcrumbUrls = {
    'Home': 'index.html',
    'Natural': 'natural.html',
    'Holística': 'holistica.html',
    'Convencional': 'convencional.html',
    'Recursos': 'recursos.html'
};

// Função para gerar breadcrumbs
function generateBreadcrumbs() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const breadcrumbData = breadcrumbMap[currentPage];
    
    if (!breadcrumbData) {
        return;
    }
    
    const breadcrumbContainer = document.getElementById('breadcrumbs');
    if (!breadcrumbContainer) {
        return;
    }
    
    let breadcrumbHTML = '<nav aria-label="Breadcrumb" class="breadcrumb-navigation">';
    breadcrumbHTML += '<ol class="breadcrumb-list">';
    
    // Adicionar breadcrumbs
    breadcrumbData.path.forEach((item, index) => {
        const url = breadcrumbUrls[item] || '#';
        breadcrumbHTML += `<li class="breadcrumb-item">`;
        breadcrumbHTML += `<a href="${url}" class="breadcrumb-link">${item}</a>`;
        breadcrumbHTML += `<span class="breadcrumb-separator">/</span>`;
        breadcrumbHTML += `</li>`;
    });
    
    // Adicionar página atual
    breadcrumbHTML += `<li class="breadcrumb-item current" aria-current="page">`;
    breadcrumbHTML += `<span class="breadcrumb-current">${breadcrumbData.title}</span>`;
    breadcrumbHTML += `</li>`;
    
    breadcrumbHTML += '</ol>';
    breadcrumbHTML += '</nav>';
    
    breadcrumbContainer.innerHTML = breadcrumbHTML;
}

// Adicionar estilos CSS para breadcrumbs
function addBreadcrumbStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .breadcrumb-navigation {
            margin: 10px 0;
        }
        
        .breadcrumb-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            font-size: 12px;
            color: #746543;
        }
        
        .breadcrumb-item {
            display: flex;
            align-items: center;
        }
        
        .breadcrumb-link {
            color: #746543;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        
        .breadcrumb-link:hover {
            color: #F60;
        }
        
        .breadcrumb-separator {
            margin: 0 8px;
            color: #9e937e;
        }
        
        .breadcrumb-current {
            color: #630;
            font-weight: bold;
        }
        
        .breadcrumb-item:last-child .breadcrumb-separator {
            display: none;
        }
        
        /* Responsividade para breadcrumbs */
        @media (max-width: 768px) {
            .breadcrumb-list {
                font-size: 11px;
            }
            
            .breadcrumb-separator {
                margin: 0 4px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar breadcrumbs quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addBreadcrumbStyles();
        generateBreadcrumbs();
    });
} else {
    addBreadcrumbStyles();
    generateBreadcrumbs();
} 