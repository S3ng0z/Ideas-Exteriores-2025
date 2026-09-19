(function () {
  'use strict';

  var COPY = {
    heading: 'Casas y casetas prefabricadas de madera',
    body:
      '<p class="ie-home-solutions__intro">Trabajamos con tres sistemas constructivos para casas, casetas y espacios habitables, seleccionados según el uso, el nivel de acabado y el alcance de cada proyecto.</p>' +
      '<ul class="ie-home-solutions__systems">' +
        '<li><strong>Sistema europeo</strong><span>Solución prefabricada en madera basada en modelos definidos y configuraciones estandarizadas, con piezas preparadas para un montaje preciso y un acabado natural.</span></li>' +
        '<li><strong>Entramado ligero</strong><span>Sistema estructural ligero y versátil que permite resolver distintas tipologías con configuraciones y acabados definidos.</span></li>' +
        '<li><strong>Panel SIP</strong><span>Sistema prefabricado con paneles estructurales aislados, orientado a una ejecución precisa y una envolvente eficiente.</span></li>' +
      '</ul>' +
      '<p class="ie-home-solutions__closing">Te ayudamos a elegir la opción más adecuada y a definir suministro, acabado y montaje con un alcance claro desde el presupuesto.</p>'
  };

  function findSection() {
    var direct = document.querySelector('[id*="section_gcxq38"]');
    if (direct) return direct;

    var headings = document.querySelectorAll('#MainContent h2');
    for (var i = 0; i < headings.length; i += 1) {
      var text = (headings[i].textContent || '').toLowerCase();
      if (
        text.indexOf('casas & casetas prefabricadas') !== -1 ||
        text.indexOf('casas y casetas prefabricadas') !== -1
      ) {
        return headings[i].closest('[id^="shopify-section"]') || headings[i].parentElement;
      }
    }

    return null;
  }

  function apply() {
    var section = findSection();
    if (!section || section.dataset.ieHomeSolutionsApplied === 'true') return !!section;

    var heading = section.querySelector('h2');
    var textBlocks = section.querySelectorAll('.text-block');
    var bodyBlock = null;

    for (var i = 0; i < textBlocks.length; i += 1) {
      var txt = textBlocks[i].textContent || '';
      if (
        txt.indexOf('95') !== -1 ||
        txt.indexOf('Utilizamos dos sistemas constructivos') !== -1 ||
        txt.indexOf('Ventajas de elegirnos') !== -1 ||
        txt.indexOf('Qué aportamos') !== -1 ||
        txt.indexOf('Trabajamos con tres sistemas constructivos') !== -1
      ) {
        bodyBlock = textBlocks[i];
        break;
      }
    }

    if (!heading || !bodyBlock) return false;

    section.dataset.ieHomeSolutionsApplied = 'true';
    section.classList.add('ie-home-solutions__section');

    heading.classList.add('ie-home-solutions__heading');
    heading.textContent = COPY.heading;

    bodyBlock.classList.add('ie-home-solutions__copy');
    bodyBlock.innerHTML = COPY.body;

    return true;
  }

  function init() {
    if (apply()) return;

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (apply() || attempts >= 20) window.clearInterval(timer);
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', function () {
    apply();
  });
})();
