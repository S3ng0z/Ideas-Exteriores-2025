(function () {
  'use strict';

  var BENEFITS = [
    {
      match: ['diseña a tu medida', 'diseño configurable'],
      title: 'Diseño configurable',
      copy: 'Modelos definidos y opciones seleccionadas para adaptar la solución a cada uso con mayor claridad y control.'
    },
    {
      match: ['construcción eficiente', 'sistemas eficientes'],
      title: 'Sistemas eficientes',
      copy: 'Sistema europeo, entramado ligero y panel SIP seleccionados según el uso, las prestaciones y el alcance del proyecto.'
    },
    {
      match: ['calidad certificada', 'calidad controlada'],
      title: 'Calidad controlada',
      copy: 'Materiales, soluciones técnicas y procesos definidos para una ejecución precisa y un alcance técnico claro.'
    },
    {
      match: ['compromiso ecológico', 'madera responsable'],
      title: 'Madera responsable',
      copy: 'Durabilidad, mantenimiento y uso eficiente de materiales como criterios para construir de forma responsable.'
    }
  ];

  function normalize(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function findSection() {
    var direct = document.querySelector('[id*="section_g3xbzL"]');
    if (direct) return direct;

    var blocks = document.querySelectorAll('#MainContent .text-block');
    for (var i = 0; i < blocks.length; i += 1) {
      var value = normalize(blocks[i].textContent);
      if (
        value.indexOf('diseña a tu medida') !== -1 ||
        value.indexOf('calidad certificada') !== -1 ||
        value.indexOf('compromiso ecologico') !== -1
      ) {
        return blocks[i].closest('[id^="shopify-section"]');
      }
    }

    return null;
  }

  function applyBenefitCopy(section, benefit) {
    var blocks = section.querySelectorAll('.text-block');
    var titleBlock = null;

    for (var i = 0; i < blocks.length; i += 1) {
      var value = normalize(blocks[i].textContent);
      for (var j = 0; j < benefit.match.length; j += 1) {
        if (value === normalize(benefit.match[j])) {
          titleBlock = blocks[i];
          break;
        }
      }
      if (titleBlock) break;
    }

    if (!titleBlock) return false;

    var group = titleBlock.parentElement;
    if (!group) return false;

    var candidates = group.querySelectorAll('.text-block');
    var copyBlock = candidates.length > 1 ? candidates[1] : null;

    titleBlock.classList.add('ie-home-benefit__title');
    titleBlock.innerHTML = '<p><strong>' + benefit.title + '</strong></p>';

    if (copyBlock) {
      copyBlock.classList.add('ie-home-benefit__copy');
      copyBlock.innerHTML = '<p>' + benefit.copy + '</p>';
    }

    return true;
  }

  function apply() {
    var section = findSection();
    if (!section) return false;

    section.classList.add('ie-home-benefits');

    var applied = 0;
    for (var i = 0; i < BENEFITS.length; i += 1) {
      if (applyBenefitCopy(section, BENEFITS[i])) applied += 1;
    }

    return applied > 0;
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
