(function () {
  'use strict';

  var COPY = {
    heading: 'Casas y casetas prefabricadas de madera',
    body:
      '<p class="ie-home-solutions__intro">En <strong>Ideas Exteriores</strong> desarrollamos soluciones en madera para vivienda, estudio, oficina y espacio exterior a partir de modelos definidos y configurables, con un alcance claro desde el presupuesto hasta el montaje.</p>' +
      '<p><strong>Elige el sistema que mejor encaja con tu proyecto:</strong></p>' +
      '<ul>' +
        '<li><strong>Sistema europeo:</strong> una solución prefabricada en madera orientada a modelos definidos y configuraciones estandarizadas, con piezas preparadas para facilitar un montaje preciso y un acabado natural.</li>' +
        '<li><strong>Entramado ligero:</strong> una solución versátil para construcciones de madera con configuraciones y acabados definidos según el modelo.</li>' +
        '<li><strong>Panel SIP:</strong> un sistema prefabricado basado en paneles estructurales que integra aislamiento y favorece una ejecución precisa.</li>' +
      '</ul>' +
      '<p><strong>Qué aportamos:</strong></p>' +
      '<ul>' +
        '<li>Modelos, superficies y opciones comparables para decidir con claridad.</li>' +
        '<li>Asesoramiento técnico para definir sistema, nivel de acabado, base y montaje según el alcance del proyecto.</li>' +
        '<li>Suministro y montaje coordinados, con inclusiones y exclusiones claras.</li>' +
      '</ul>' +
      '<p class="ie-home-solutions__closing">Cuéntanos qué espacio necesitas y te orientamos hacia la solución y configuración más adecuada.</p>'
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
        txt.indexOf('Qué aportamos') !== -1
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
