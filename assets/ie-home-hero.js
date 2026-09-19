(function () {
  'use strict';

  var HERO_COPY = {
    eyebrow: 'Construcción en madera',
    heading: 'Casas y casetas de madera prefabricadas con entramado ligero y panel SIP',
    lead: 'Soluciones para vivienda, estudio, oficina y exterior, con modelos definidos y configuraciones adaptables. Te ayudamos a elegir el sistema, el nivel de acabado y el alcance del proyecto, coordinando suministro y montaje con acompañamiento técnico de principio a fin.'
  };

  function findHeroTextBlock(root) {
    var scope = root || document;
    var section = scope.querySelector && scope.querySelector('#shopify-section-hero_irjTFL');

    if (!section) {
      section = document.getElementById('shopify-section-hero_irjTFL');
    }

    if (section) {
      var direct = section.querySelector('.text-block');
      if (direct) return direct;
    }

    var blocks = document.querySelectorAll('#MainContent .text-block');
    for (var i = 0; i < blocks.length; i += 1) {
      var h1 = blocks[i].querySelector('h1');
      if (!h1) continue;

      var text = (h1.textContent || '').toLowerCase();
      if (
        text.indexOf('entramado ligero') !== -1 ||
        text.indexOf('panel sip') !== -1 ||
        text.indexOf('casas y casetas de madera') !== -1
      ) {
        return blocks[i];
      }
    }

    return null;
  }

  function applyHomeHeroPresentation(root) {
    var textBlock = findHeroTextBlock(root);
    if (!textBlock) return false;

    if (textBlock.dataset.ieHomeHeroApplied === 'true') return true;

    textBlock.dataset.ieHomeHeroApplied = 'true';
    textBlock.classList.add('ie-home-hero__message');

    var wrapper = textBlock.closest('.section-content-wrapper');
    if (wrapper) wrapper.classList.add('ie-home-hero__wrapper');

    textBlock.innerHTML =
      '<p class="ie-home-hero__eyebrow">' + HERO_COPY.eyebrow + '</p>' +
      '<h1>' + HERO_COPY.heading + '</h1>' +
      '<p class="ie-home-hero__lead">' + HERO_COPY.lead + '</p>';

    return true;
  }

  function init() {
    if (applyHomeHeroPresentation(document)) return;

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (applyHomeHeroPresentation(document) || attempts >= 20) {
        window.clearInterval(timer);
      }
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', function (event) {
    applyHomeHeroPresentation(event.target);
  });
})();
