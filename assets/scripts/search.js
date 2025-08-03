// Sistema de Busca CuraDente
// Indexação e busca client-side

// Base de dados de páginas do site
const sitePages = [
    {
        url: 'index.html',
        title: 'Cura natural dos dentes - cárie dentária, problemas de gengivas',
        description: 'CuraDente: uma abordagem natural e holística para curar permanentemente cáries e doença gengival',
        keywords: 'cura natural, dentes, cárie, gengivas, remédios, regeneração, prevenção'
    },
    {
        url: 'natural.html',
        title: 'Natural: A Maneira da Natureza Conservar e Curar Dentes & Gengivas',
        description: 'Sobre nutrição, cuidados dentários atóxicos/não químicos, regeneração & rebrota de dentes e gengivas',
        keywords: 'natural, nutrição, cuidados dentários, regeneração, rebrota, desintoxicação'
    },
    {
        url: 'alimentos-nutricao-saude-doenca-dentarias.html',
        title: 'Alimentos e Nutrição',
        description: 'Elementos de uma dieta favorável aos dentes para tratar, curar e conservar seus dentes',
        keywords: 'alimentos, nutrição, dieta, dentes, saúde, cura'
    },
    {
        url: 'auto-regeneracao-dentaria-rebrota.html',
        title: 'Auto-cura de dentes',
        description: 'Informações sobre regeneração e rebrota natural de dentes',
        keywords: 'auto-cura, regeneração, rebrota, dentes, natural'
    },
    {
        url: 'cuidado-dentario-higiene-oral.html',
        title: 'Cuidado Dentário & Higiene Oral',
        description: 'Limpando os dentes e a boca com métodos naturais',
        keywords: 'higiene oral, cuidado dentário, limpeza, métodos naturais'
    },
    {
        url: 'desintoxicacao-bucal-dental.html',
        title: 'Desintoxicação oral',
        description: 'Métodos de desintoxicação bucal e dental',
        keywords: 'desintoxicação, bucal, dental, limpeza, toxinas'
    },
    {
        url: 'remedios-dentarios-caseiros-naturais.html',
        title: 'Remédios caseiros para problemas dentários',
        description: 'Lista extensa de remédios naturais, de ervas e/ou não tóxicos e não invasivos para dor de dente',
        keywords: 'remédios caseiros, naturais, dor de dente, ervas, não tóxicos'
    },
    {
        url: 'experiencias-testemunhos-dentarios.html',
        title: 'Experiências & Testemunhos Pessoais',
        description: 'Testemunhos e experiências pessoais de cura dental natural',
        keywords: 'experiências, testemunhos, pessoais, cura, dental'
    },
    {
        url: 'holistica.html',
        title: 'Holística: saúde e cura de dentes e você inteiro',
        description: 'Abordagens energéticas, emocionais e espirituais para saúde dental',
        keywords: 'holística, energética, emocional, espiritual, saúde dental'
    },
    {
        url: 'psicologia.html',
        title: 'Psicologia',
        description: 'Aspectos psicológicos da saúde dental',
        keywords: 'psicologia, saúde dental, mente, corpo'
    },
    {
        url: 'energetica.html',
        title: 'Energética',
        description: 'Abordagens energéticas para saúde dental',
        keywords: 'energética, energia, saúde, dental'
    },
    {
        url: 'espiritualidade.html',
        title: 'Espiritualidade',
        description: 'Aspectos espirituais da cura dental',
        keywords: 'espiritualidade, cura, dental, espiritual'
    },
    {
        url: 'convencional.html',
        title: 'Convencional: arsenal terapêutico da odontologia moderna',
        description: 'Sobre as "bênçãos" do tratamento dentário lucrativo e convencional',
        keywords: 'convencional, odontologia, tratamento, riscos, perigos'
    },
    {
        url: 'introducao-desvantagens-odontologia-convencional.html',
        title: 'As desvantagens da odontologia convencional',
        description: 'Informações sobre as desvantagens dos tratamentos convencionais',
        keywords: 'desvantagens, odontologia, convencional, riscos'
    },
    {
        url: 'dentistas-diagnosticos-falhos.html',
        title: 'Dez dentistas - dez diagnósticos',
        description: 'Sobre a variabilidade de diagnósticos entre dentistas',
        keywords: 'dentistas, diagnósticos, variabilidade, falhos'
    },
    {
        url: 'plano-de-tratamento-dentista-honestidade.html',
        title: 'Honestidade e qualidade dos diagnósticos odontológicos',
        description: 'Sobre a honestidade e qualidade dos diagnósticos',
        keywords: 'honestidade, qualidade, diagnósticos, odontológicos'
    },
    {
        url: 'restauracoes-obturacoes-dentarias-perigos.html',
        title: 'Obturações dentárias',
        description: 'As "restaurações" dentárias podem ser como bombas-relógio ativadas',
        keywords: 'obturações, restaurações, perigos, bombas-relógio'
    },
    {
        url: 'tratamento-de-canal-introducao.html',
        title: 'Tratamento de canal de raiz dentária',
        description: 'Informações sobre tratamento de canal',
        keywords: 'tratamento de canal, raiz dentária, perigos'
    },
    {
        url: 'pontes-e-coroas-dentarias.html',
        title: 'Pontes, coroas',
        description: 'Informações sobre pontes e coroas dentárias',
        keywords: 'pontes, coroas, dentárias, tratamentos'
    },
    {
        url: 'odontologia-convencional-experiencias.html',
        title: 'Experiências pessoais & testemunhos',
        description: 'Experiências pessoais com odontologia convencional',
        keywords: 'experiências, convencional, testemunhos, odontologia'
    },
    {
        url: 'odontologia-outros-riscos-saude.html',
        title: 'Riscos Diversos Relacionados à Odontologia',
        description: 'Outros riscos relacionados à odontologia convencional',
        keywords: 'riscos, odontologia, saúde, perigos'
    },
    {
        url: 'clorexidina-enxaguatorio-bucal.html',
        title: 'Clorexidina',
        description: 'Informações sobre clorexidina e enxaguatórios bucais',
        keywords: 'clorexidina, enxaguatório, bucal, químico'
    },
    {
        url: 'como-encontrar-bom-dentista.html',
        title: 'Dicas de como encontrar um bom dentista',
        description: 'Dicas para encontrar um dentista confiável',
        keywords: 'dentista, bom, confiável, dicas, encontrar'
    },
    {
        url: 'recursos.html',
        title: 'Recursos: base de conhecimentos e produtos',
        description: 'Livros e excertos de livros, produtos, links e muita informação',
        keywords: 'recursos, livros, produtos, links, informação'
    },
    {
        url: 'pesquisa-odontologica-alternativa.html',
        title: 'Pesquisa alternativa sobre saúde e doença dentais',
        description: 'Pesquisa alternativa sobre saúde dental',
        keywords: 'pesquisa, alternativa, saúde, doença, dental'
    },
    {
        url: 'livros-e-imagens.html',
        title: 'Livros e imagens',
        description: 'Livros e imagens sobre saúde dental natural',
        keywords: 'livros, imagens, saúde, dental, natural'
    },
    {
        url: 'produtos-comerciais.html',
        title: 'Produtos comerciais',
        description: 'Produtos comerciais para saúde dental',
        keywords: 'produtos, comerciais, saúde, dental'
    },
    {
        url: 'glossario-dental.html',
        title: 'Glossário de termos',
        description: 'Glossário de termos relacionados à saúde dental',
        keywords: 'glossário, termos, dental, saúde'
    },
    {
        url: 'links-informativos.html',
        title: 'Links (em inglês)',
        description: 'Links informativos em inglês sobre saúde dental',
        keywords: 'links, informativos, inglês, saúde, dental'
    },
    {
        url: 'perfuracao-obturacao-dentes-riscos-danos-perigos.html',
        title: 'Perfuração & obturação de dentes: uma escolha imprudente?',
        description: 'Sobre riscos, danos e perigos da odontologia convencional',
        keywords: 'perfuração, obturação, riscos, danos, perigos'
    },
    {
        url: 'xilitol-auto-tratamento-dentario.html',
        title: 'Bochechar e escovar os dentes com o açúcar xilitol',
        description: 'Xilitol pode parar a formação de cárie e curar periodontite',
        keywords: 'xilitol, açúcar, cárie, periodontite, gengiva'
    },
    {
        url: 'sal-agua-salmoura-dor-de-dente-cura.html',
        title: 'Minha melhor cura pessoal para dor de dente: Enxagues com salmoura',
        description: 'Cura pessoal para dor de dente usando salmoura morna',
        keywords: 'salmoura, dor de dente, cura, sal, água'
    },
    {
        url: 'transporte-fluido-dentinal-steinman-leonora.html',
        title: 'Transporte do fluido dentinal - teoria revolucionária',
        description: 'Teoria sobre resistência natural à cárie e cariogênese',
        keywords: 'fluido dentinal, resistência, cárie, cariogênese, Steinman'
    },
    {
        url: 'urinoterapia-dentes-gengivas.html',
        title: 'Urinoterapia para a cura de problemas com os dentes e gengivas',
        description: 'Informações sobre urinoterapia para saúde dental',
        keywords: 'urinoterapia, dentes, gengivas, cura, natural'
    }
];

// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/g, ' ');
}

// Função para calcular relevância de uma página para um termo de busca
function calculateRelevance(page, searchTerms) {
    let score = 0;
    const normalizedTitle = normalizeText(page.title);
    const normalizedDescription = normalizeText(page.description);
    const normalizedKeywords = normalizeText(page.keywords);
    
    searchTerms.forEach(term => {
        const normalizedTerm = normalizeText(term);
        
        // Pontuação por título (mais importante)
        if (normalizedTitle.includes(normalizedTerm)) {
            score += 10;
        }
        
        // Pontuação por descrição
        if (normalizedDescription.includes(normalizedTerm)) {
            score += 5;
        }
        
        // Pontuação por palavras-chave
        if (normalizedKeywords.includes(normalizedTerm)) {
            score += 3;
        }
        
        // Bônus para correspondência exata
        if (normalizedTitle === normalizedTerm) {
            score += 20;
        }
    });
    
    return score;
}

// Função para destacar termos de busca no texto
function highlightSearchTerms(text, searchTerms) {
    let highlightedText = text;
    searchTerms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });
    return highlightedText;
}

// Função principal de busca
function performSearch(searchQuery) {
    if (!searchQuery || searchQuery.trim() === '') {
        return [];
    }
    
    const searchTerms = searchQuery.trim().split(/\s+/);
    const results = [];
    
    // Buscar em todas as páginas
    sitePages.forEach(page => {
        const relevance = calculateRelevance(page, searchTerms);
        
        if (relevance > 0) {
            results.push({
                ...page,
                relevance,
                highlightedTitle: highlightSearchTerms(page.title, searchTerms),
                highlightedDescription: highlightSearchTerms(page.description, searchTerms)
            });
        }
    });
    
    // Ordenar por relevância (maior primeiro)
    results.sort((a, b) => b.relevance - a.relevance);
    
    return results;
}

// Função para exibir resultados na página
function displaySearchResults(results, searchTerm) {
    const resultsContainer = document.getElementById('search-results-list');
    const resultsCount = document.getElementById('results-count');
    
    resultsCount.textContent = results.length;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-no-results">
                <p>Nenhum resultado encontrado para "<strong>${searchTerm}</strong>".</p>
                <p>Tente usar termos diferentes ou mais específicos.</p>
                <p>Sugestões de busca:</p>
                <ul>
                    <li>cárie</li>
                    <li>dor de dente</li>
                    <li>remédios naturais</li>
                    <li>higiene oral</li>
                    <li>nutrição</li>
                    <li>xilitol</li>
                    <li>salmoura</li>
                </ul>
            </div>
        `;
        return;
    }
    
    let html = '';
    results.forEach((result, index) => {
        html += `
            <div class="search-result-item">
                <h3><a href="${result.url}">${result.highlightedTitle}</a></h3>
                <p class="search-result-description">${result.highlightedDescription}</p>
                <p class="search-result-url"><a href="${result.url}">${result.url}</a></p>
            </div>
        `;
        
        if (index < results.length - 1) {
            html += '<hr class="search-result-divider">';
        }
    });
    
    resultsContainer.innerHTML = html;
}

// Função para inicializar a busca quando a página carrega
function initializeSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm) {
        const results = performSearch(searchTerm);
        displaySearchResults(results, searchTerm);
    }
}

// Adicionar estilos CSS para os resultados de busca
function addSearchStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .search-result-item {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            background-color: #fafafa;
        }
        
        .search-result-item h3 {
            margin: 0 0 10px 0;
            font-size: 18px;
        }
        
        .search-result-item h3 a {
            color: #630;
            text-decoration: none;
        }
        
        .search-result-item h3 a:hover {
            color: #F60;
        }
        
        .search-result-description {
            margin: 8px 0;
            color: #666;
            line-height: 1.4;
        }
        
        .search-result-url {
            margin: 5px 0 0 0;
            font-size: 12px;
            color: #999;
        }
        
        .search-result-url a {
            color: #999;
            text-decoration: none;
        }
        
        .search-result-divider {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 20px 0;
        }
        
        .search-no-results {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 5px;
            text-align: center;
        }
        
        .search-no-results ul {
            text-align: left;
            display: inline-block;
            margin: 10px 0;
        }
        
        mark {
            background-color: #fff3cd;
            padding: 1px 2px;
            border-radius: 2px;
        }
        
        #search-info {
            margin-bottom: 20px;
            padding: 10px;
            background-color: #e8f4f8;
            border-radius: 5px;
        }
        
        #search-info p {
            margin: 5px 0;
        }
    `;
    document.head.appendChild(style);
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addSearchStyles();
        initializeSearch();
    });
} else {
    addSearchStyles();
    initializeSearch();
} 