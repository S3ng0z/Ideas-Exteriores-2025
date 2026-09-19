(function () {
  'use strict';

  var COPY = {
    heading: 'Madera, diseño y ejecución con criterio',
    body:
      '<div class="ie-home-criteria__list">' +
        '<div class="ie-home-criteria__item">' +
          '<strong>Diseño configurable</strong>' +
          '<span>Modelos definidos y opciones seleccionadas para adaptar la solución al uso, al espacio y al nivel de acabado.</span>' +
        '</div>' +
        '<div class="ie-home-criteria__item">' +
          '<strong>Sistema adecuado</strong>' +
          '<span>Sistema europeo, entramado ligero o panel SIP según la tipología, las prestaciones y el proceso de montaje.</span>' +
        '</div>' +
        '<div class="ie-home-criteria__item">' +
          '<strong>Ejecución controlada</strong>' +
          '<span>Materiales, detalles y alcance de suministro y montaje definidos desde el presupuesto para ejecutar con claridad.</span>' +
        '</div>' +
      '</div>'
  };

  function normalize(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function findSection() {
    var direct = document.querySelector('[id*="section_aAqjjb"]');
    if (direct) return direct;

    var blocks = document.querySelectorAll('#MainContent .text-block');
    for (var i = 0; i < blocks.length; i += 1) {
      var value = normalize(blocks[i].textContent);
      if (
        value.indexOf('naturalidad y calidad en cada proyecto') !== -1 ||
        value.indexOf('madera, diseño y ejecucion con criterio') !== -1
      ) {
        return blocks[i].closest('[id^="shopify-section"]');
      }
    }
    return null;
  }

  function apply() {
    var section = findSection();
    if (!section) return false;

    section.classList.add('ie-home-criteria');

    var blocks = section.querySelectorAll('.text-block');
    var headingBlock = null;
    var bodyBlock = null;

    for (var i = 0; i < blocks.length; i += 1) {
      var value = normalize(blocks[i].textContent);

      if (
        !headingBlock &&
        (
          value.indexOf('naturalidad y calidad en cada proyecto') !== -1 ||
          value.indexOf('madera, diseño y ejecucion con criterio') !== -1
        )
      ) {
        headingBlock = blocks[i];
        continue;
      }

      if (
        !bodyBlock &&
        (
          value.indexOf('diseños exclusivos y funcionales') !== -1 ||
          value.indexOf('construccion eficiente y ecologica') !== -1 ||
          value.indexOf('ejecucion controlada') !== -1
        )
      ) {
        bodyBlock = blocks[i];
      }
    }

    if (!headingBlock || !bodyBlock) return false;

    if (headingBlock.dataset.ieCriteriaApplied === 'true') return true;

    headingBlock.dataset.ieCriteriaApplied = 'true';
    headingBlock.classList.add('ie-home-criteria__heading');
    bodyBlock.classList.add('ie-home-criteria__body');

    headingBlock.innerHTML = '<p><strong>' + COPY.heading + '</strong></p>';
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
