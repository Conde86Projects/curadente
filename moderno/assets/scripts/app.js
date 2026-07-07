(function() {
  'use strict';

  // ─── BREADCRUMBS ──────────────────────────────────────
  var breadcrumbMap = {
    'index.html': { title: 'Home', path: [] },
    'natural.html': { title: 'Natural', path: ['Home'] },
    'alimentos-nutricao-saude-doenca-dentarias.html': { title: 'Alimentos e Nutrição', path: ['Home', 'Natural'] },
    'auto-regeneracao-dentaria-rebrota.html': { title: 'Auto-cura de dentes', path: ['Home', 'Natural'] },
    'cuidado-dentario-higiene-oral.html': { title: 'Cuidado Dentário & Higiene Oral', path: ['Home', 'Natural'] },
    'desintoxicacao-bucal-dental.html': { title: 'Desintoxicação oral', path: ['Home', 'Natural'] },
    'remedios-dentarios-caseiros-naturais.html': { title: 'Remédios caseiros para problemas dentários', path: ['Home', 'Natural'] },
    'experiencias-testemunhos-dentarios.html': { title: 'Experiências & Testemunhos Pessoais', path: ['Home', 'Natural'] },
    'holistica.html': { title: 'Holística', path: ['Home'] },
    'psicologia.html': { title: 'Psicologia', path: ['Home', 'Holística'] },
    'energetica.html': { title: 'Energética', path: ['Home', 'Holística'] },
    'espiritualidade.html': { title: 'Espiritualidade', path: ['Home', 'Holística'] },
    'convencional.html': { title: 'Convencional', path: ['Home'] },
    'introducao-desvantagens-odontologia-convencional.html': { title: 'As desvantagens da odontologia convencional', path: ['Home', 'Convencional'] },
    'dentistas-diagnosticos-falhos.html': { title: 'Dez dentistas - dez diagnósticos', path: ['Home', 'Convencional'] },
    'plano-de-tratamento-dentista-honestidade.html': { title: 'Honestidade e qualidade dos diagnósticos odontológicos', path: ['Home', 'Convencional'] },
    'restauracoes-obturacoes-dentarias-perigos.html': { title: 'Obturações dentárias', path: ['Home', 'Convencional'] },
    'tratamento-de-canal-introducao.html': { title: 'Tratamento de canal de raiz dentária', path: ['Home', 'Convencional'] },
    'pontes-e-coroas-dentarias.html': { title: 'Pontes, coroas', path: ['Home', 'Convencional'] },
    'odontologia-convencional-experiencias.html': { title: 'Experiências pessoais & testemunhos', path: ['Home', 'Convencional'] },
    'odontologia-outros-riscos-saude.html': { title: 'Riscos Diversos Relacionados à Odontologia', path: ['Home', 'Convencional'] },
    'clorexidina-enxaguatorio-bucal.html': { title: 'Clorexidina', path: ['Home', 'Convencional'] },
    'como-encontrar-bom-dentista.html': { title: 'Dicas de como encontrar um bom dentista', path: ['Home', 'Convencional'] },
    'recursos.html': { title: 'Recursos', path: ['Home'] },
    'pesquisa-odontologica-alternativa.html': { title: 'Pesquisa alternativa sobre saúde e doença dentais', path: ['Home', 'Recursos'] },
    'livros-e-imagens.html': { title: 'Livros e imagens', path: ['Home', 'Recursos'] },
    'produtos-comerciais.html': { title: 'Produtos comerciais', path: ['Home', 'Recursos'] },
    'glossario-dental.html': { title: 'Glossário de termos', path: ['Home', 'Recursos'] },
    'links-informativos.html': { title: 'Links (em inglês)', path: ['Home', 'Recursos'] },
    'perfuracao-obturacao-dentes-riscos-danos-perigos.html': { title: 'Perfuração & obturação de dentes: uma escolha imprudente?', path: ['Home'] },
    'xilitol-auto-tratamento-dentario.html': { title: 'Bochechar e escovar os dentes com o açúcar xilitol', path: ['Home'] },
    'sal-agua-salmoura-dor-de-dente-cura.html': { title: 'Minha melhor cura pessoal para dor de dente: Enxagues com salmoura', path: ['Home'] },
    'transporte-fluido-dentinal-steinman-leonora.html': { title: 'Transporte do fluido dentinal - teoria revolucionária', path: ['Home'] },
    'urinoterapia-dentes-gengivas.html': { title: 'Urinoterapia para a cura de problemas com os dentes e gengivas', path: ['Home'] },
    'search-results.html': { title: 'Resultados da Busca', path: ['Home'] },
    'apoie-esse-site.html': { title: 'Apoie esse site', path: ['Home'] },
    'contato.html': { title: 'Contato', path: ['Home'] },
    'sobre-mim.html': { title: 'Sobre mim', path: ['Home'] },
    'sobre-site.html': { title: 'Sobre esse site', path: ['Home'] },
    'disclaimer.html': { title: 'Renúncia de responsabilidade', path: ['Home'] },
    'politica-de-privacidade.html': { title: 'Política de Privacidade', path: ['Home'] },
    'mapa-do-sitio.html': { title: 'Mapa do sítio', path: ['Home'] },
    'acrescimos-recentes.html': { title: 'Acréscimos recentes', path: ['Home'] },
    'doacoes.html': { title: 'Doe', path: ['Home'] },
    'copyright.html': { title: 'Copyright', path: ['Home'] }
  };

  var breadcrumbUrls = {
    'Home': 'index.html',
    'Natural': 'natural.html',
    'Holística': 'holistica.html',
    'Convencional': 'convencional.html',
    'Recursos': 'recursos.html'
  };

  function generateBreadcrumbs() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var data = breadcrumbMap[currentPage];
    if (!data) return;

    var container = document.getElementById('breadcrumbs');
    if (!container) return;

    var html = '<nav aria-label="Breadcrumb" class="breadcrumb-navigation"><ol class="breadcrumb-list">';

    data.path.forEach(function(item) {
      var url = breadcrumbUrls[item] || '#';
      html += '<li class="breadcrumb-item"><a href="' + url + '" class="breadcrumb-link">' + item + '</a><span class="breadcrumb-separator">/</span></li>';
    });

    html += '<li class="breadcrumb-item current" aria-current="page"><span class="breadcrumb-current">' + data.title + '</span></li>';
    html += '</ol></nav>';

    container.innerHTML = html;
  }

  // ─── SEARCH ───────────────────────────────────────────
  var sitePages = [
    { url: 'index.html', title: 'Cura natural dos dentes - cárie dentária, problemas de gengivas', description: 'CuraDente: uma abordagem natural e holística para curar permanentemente cáries e doença gengival', keywords: 'cura natural, dentes, cárie, gengivas, remédios, regeneração, prevenção' },
    { url: 'natural.html', title: 'Natural: A Maneira da Natureza Conservar e Curar Dentes & Gengivas', description: 'Sobre nutrição, cuidados dentários atóxicos/não químicos, regeneração & rebrota de dentes e gengivas', keywords: 'natural, nutrição, cuidados dentários, regeneração, rebrota, desintoxicação' },
    { url: 'alimentos-nutricao-saude-doenca-dentarias.html', title: 'Alimentos e Nutrição', description: 'Elementos de uma dieta favorável aos dentes para tratar, curar e conservar seus dentes', keywords: 'alimentos, nutrição, dieta, dentes, saúde, cura' },
    { url: 'auto-regeneracao-dentaria-rebrota.html', title: 'Auto-cura de dentes', description: 'Informações sobre regeneração e rebrota natural de dentes', keywords: 'auto-cura, regeneração, rebrota, dentes, natural' },
    { url: 'cuidado-dentario-higiene-oral.html', title: 'Cuidado Dentário & Higiene Oral', description: 'Limpando os dentes e a boca com métodos naturais', keywords: 'higiene oral, cuidado dentário, limpeza, métodos naturais' },
    { url: 'desintoxicacao-bucal-dental.html', title: 'Desintoxicação oral', description: 'Métodos de desintoxicação bucal e dental', keywords: 'desintoxicação, bucal, dental, limpeza, toxinas' },
    { url: 'remedios-dentarios-caseiros-naturais.html', title: 'Remédios caseiros para problemas dentários', description: 'Lista extensa de remédios naturais, de ervas e/ou não tóxicos e não invasivos para dor de dente', keywords: 'remédios caseiros, naturais, dor de dente, ervas, não tóxicos' },
    { url: 'experiencias-testemunhos-dentarios.html', title: 'Experiências & Testemunhos Pessoais', description: 'Testemunhos e experiências pessoais de cura dental natural', keywords: 'experiências, testemunhos, pessoais, cura, dental' },
    { url: 'holistica.html', title: 'Holística: saúde e cura de dentes e você inteiro', description: 'Abordagens energéticas, emocionais e espirituais para saúde dental', keywords: 'holística, energética, emocional, espiritual, saúde dental' },
    { url: 'psicologia.html', title: 'Psicologia', description: 'Aspectos psicológicos da saúde dental', keywords: 'psicologia, saúde dental, mente, corpo' },
    { url: 'energetica.html', title: 'Energética', description: 'Abordagens energéticas para saúde dental', keywords: 'energética, energia, saúde, dental' },
    { url: 'espiritualidade.html', title: 'Espiritualidade', description: 'Aspectos espirituais da cura dental', keywords: 'espiritualidade, cura, dental, espiritual' },
    { url: 'convencional.html', title: 'Convencional: arsenal terapêutico da odontologia moderna', description: 'Sobre as "bênçãos" do tratamento dentário lucrativo e convencional', keywords: 'convencional, odontologia, tratamento, riscos, perigos' },
    { url: 'introducao-desvantagens-odontologia-convencional.html', title: 'As desvantagens da odontologia convencional', description: 'Informações sobre as desvantagens dos tratamentos convencionais', keywords: 'desvantagens, odontologia, convencional, riscos' },
    { url: 'dentistas-diagnosticos-falhos.html', title: 'Dez dentistas - dez diagnósticos', description: 'Sobre a variabilidade de diagnósticos entre dentistas', keywords: 'dentistas, diagnósticos, variabilidade, falhos' },
    { url: 'plano-de-tratamento-dentista-honestidade.html', title: 'Honestidade e qualidade dos diagnósticos odontológicos', description: 'Sobre a honestidade e qualidade dos diagnósticos', keywords: 'honestidade, qualidade, diagnósticos, odontológicos' },
    { url: 'restauracoes-obturacoes-dentarias-perigos.html', title: 'Obturações dentárias', description: 'As "restaurações" dentárias podem ser como bombas-relógio ativadas', keywords: 'obturações, restaurações, perigos, bombas-relógio' },
    { url: 'tratamento-de-canal-introducao.html', title: 'Tratamento de canal de raiz dentária', description: 'Informações sobre tratamento de canal', keywords: 'tratamento de canal, raiz dentária, perigos' },
    { url: 'pontes-e-coroas-dentarias.html', title: 'Pontes, coroas', description: 'Informações sobre pontes e coroas dentárias', keywords: 'pontes, coroas, dentárias, tratamentos' },
    { url: 'odontologia-convencional-experiencias.html', title: 'Experiências pessoais & testemunhos', description: 'Experiências pessoais com odontologia convencional', keywords: 'experiências, convencional, testemunhos, odontologia' },
    { url: 'odontologia-outros-riscos-saude.html', title: 'Riscos Diversos Relacionados à Odontologia', description: 'Outros riscos relacionados à odontologia convencional', keywords: 'riscos, odontologia, saúde, perigos' },
    { url: 'clorexidina-enxaguatorio-bucal.html', title: 'Clorexidina', description: 'Informações sobre clorexidina e enxaguatórios bucais', keywords: 'clorexidina, enxaguatório, bucal, químico' },
    { url: 'como-encontrar-bom-dentista.html', title: 'Dicas de como encontrar um bom dentista', description: 'Dicas para encontrar um dentista confiável', keywords: 'dentista, bom, confiável, dicas, encontrar' },
    { url: 'recursos.html', title: 'Recursos: base de conhecimentos e produtos', description: 'Livros e excertos de livros, produtos, links e muita informação', keywords: 'recursos, livros, produtos, links, informação' },
    { url: 'pesquisa-odontologica-alternativa.html', title: 'Pesquisa alternativa sobre saúde e doença dentais', description: 'Pesquisa alternativa sobre saúde dental', keywords: 'pesquisa, alternativa, saúde, doença, dental' },
    { url: 'livros-e-imagens.html', title: 'Livros e imagens', description: 'Livros e imagens sobre saúde dental natural', keywords: 'livros, imagens, saúde, dental, natural' },
    { url: 'produtos-comerciais.html', title: 'Produtos comerciais', description: 'Produtos comerciais para saúde dental', keywords: 'produtos, comerciais, saúde, dental' },
    { url: 'glossario-dental.html', title: 'Glossário de termos', description: 'Glossário de termos relacionados à saúde dental', keywords: 'glossário, termos, dental, saúde' },
    { url: 'links-informativos.html', title: 'Links (em inglês)', description: 'Links informativos em inglês sobre saúde dental', keywords: 'links, informativos, inglês, saúde, dental' },
    { url: 'perfuracao-obturacao-dentes-riscos-danos-perigos.html', title: 'Perfuração & obturação de dentes: uma escolha imprudente?', description: 'Sobre riscos, danos e perigos da odontologia convencional', keywords: 'perfuração, obturação, riscos, danos, perigos' },
    { url: 'xilitol-auto-tratamento-dentario.html', title: 'Bochechar e escovar os dentes com o açúcar xilitol', description: 'Xilitol pode parar a formação de cárie e curar periodontite', keywords: 'xilitol, açúcar, cárie, periodontite, gengiva' },
    { url: 'sal-agua-salmoura-dor-de-dente-cura.html', title: 'Minha melhor cura pessoal para dor de dente: Enxagues com salmoura', description: 'Cura pessoal para dor de dente usando salmoura morna', keywords: 'salmoura, dor de dente, cura, sal, água' },
    { url: 'transporte-fluido-dentinal-steinman-leonora.html', title: 'Transporte do fluido dentinal - teoria revolucionária', description: 'Teoria sobre resistência natural à cárie e cariogênese', keywords: 'fluido dentinal, resistência, cárie, cariogênese, Steinman' },
    { url: 'urinoterapia-dentes-gengivas.html', title: 'Urinoterapia para a cura de problemas com os dentes e gengivas', description: 'Informações sobre urinoterapia para saúde dental', keywords: 'urinoterapia, dentes, gengivas, cura, natural' }
  ];

  function normalizeText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/g, ' ');
  }

  function calculateRelevance(page, searchTerms) {
    var score = 0;
    var normalizedTitle = normalizeText(page.title);
    var normalizedDescription = normalizeText(page.description);
    var normalizedKeywords = normalizeText(page.keywords);

    searchTerms.forEach(function(term) {
      var normalizedTerm = normalizeText(term);

      if (normalizedTitle.includes(normalizedTerm)) score += 10;
      if (normalizedDescription.includes(normalizedTerm)) score += 5;
      if (normalizedKeywords.includes(normalizedTerm)) score += 3;
      if (normalizedTitle === normalizedTerm) score += 20;
    });

    return score;
  }

  function highlightSearchTerms(text, searchTerms) {
    var result = text;
    searchTerms.forEach(function(term) {
      var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    });
    return result;
  }

  function performSearch(searchQuery) {
    if (!searchQuery || searchQuery.trim() === '') return [];

    var searchTerms = searchQuery.trim().split(/\s+/);
    var results = [];

    sitePages.forEach(function(page) {
      var relevance = calculateRelevance(page, searchTerms);
      if (relevance > 0) {
        results.push({
          url: page.url,
          title: page.title,
          description: page.description,
          relevance: relevance,
          highlightedTitle: highlightSearchTerms(page.title, searchTerms),
          highlightedDescription: highlightSearchTerms(page.description, searchTerms)
        });
      }
    });

    results.sort(function(a, b) { return b.relevance - a.relevance; });
    return results;
  }

  function displaySearchResults(results, searchTerm) {
    var container = document.getElementById('search-results-list');
    var countEl = document.getElementById('results-count');
    if (!container) return;

    if (countEl) countEl.textContent = results.length;

    if (results.length === 0) {
      container.innerHTML = '<div class="search-no-results"><p>Nenhum resultado encontrado para "<strong>' + escapeHtml(searchTerm) + '</strong>".</p><p>Tente usar termos diferentes ou mais específicos.</p><p>Sugestões de busca:</p><ul><li>cárie</li><li>dor de dente</li><li>remédios naturais</li><li>higiene oral</li><li>nutrição</li><li>xilitol</li><li>salmoura</li></ul></div>';
      return;
    }

    var html = '';
    results.forEach(function(result) {
      html += '<div class="search-result-item"><h3><a href="' + result.url + '">' + result.highlightedTitle + '</a></h3><p class="search-result-description">' + result.highlightedDescription + '</p><p class="search-result-url"><a href="' + result.url + '">' + result.url + '</a></p></div>';
    });

    container.innerHTML = html;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function initSearch() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchTerm = urlParams.get('search');
    if (searchTerm) {
      var results = performSearch(searchTerm);
      displaySearchResults(results, searchTerm);
    }
  }

  // ─── BACK TO TOP ──────────────────────────────────────
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.setAttribute('title', 'Voltar ao topo');
    btn.className = 'back-to-top';

    var style = document.createElement('style');
    style.textContent = '.back-to-top{position:fixed;bottom:24px;right:24px;width:48px;height:48px;background:var(--color-primary,#6B4F3A);color:#fff;border:none;border-radius:50%;font-size:1.3rem;cursor:pointer;opacity:0;pointer-events:none;transition:opacity 0.3s,background 0.2s;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,0.2)}.back-to-top:hover{background:var(--color-accent,#C97D3A)}.back-to-top:focus-visible{outline:2px solid var(--color-focus,#C97D3A);outline-offset:2px}.back-to-top.visible{opacity:1;pointer-events:auto}';
    document.head.appendChild(style);

    document.body.appendChild(btn);

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (window.pageYOffset > 300) {
            btn.classList.add('visible');
          } else {
            btn.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── INIT ─────────────────────────────────────────────
  function init() {
    generateBreadcrumbs();
    initBackToTop();
    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
