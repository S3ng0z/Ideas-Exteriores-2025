(function () {
  'use strict';

  var HERO_COPY = {
    eyebrow: 'Soluciones habitables en madera',
    heading: 'Casas y casetas prefabricadas de madera para vivir, trabajar y disfrutar',
    lead: 'Modelos configurables para vivienda, estudio, oficina y exterior, disponibles en sistema europeo, entramado ligero y panel SIP. Te asesoramos para definir la solución, el acabado y el montaje con un alcance claro desde el presupuesto.'
  };

  var SOLUTIONS_COPY = {
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

  var CRITERIA_COPY = {
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

  function applyHero(root) {
    var scope = root || document;
    var section = scope.querySelector && scope.querySelector('#shopify-section-hero_irjTFL');
    if (!section && scope === document) section = document.getElementById('shopify-section-hero_irjTFL');
    if (!section) return false;

    var textBlock = section.querySelector('.text-block');
    if (!textBlock) return false;

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

  function applySolutions(root) {
    var scope = root || document;
    var section = scope.querySelector && scope.querySelector('#shopify-section-section_gcxq38');
    if (!section && scope === document) section = document.getElementById('shopify-section-section_gcxq38');
    if (!section) return false;

    var heading = section.querySelector('h2');
    var blocks = section.querySelectorAll('.text-block');
    var bodyBlock = null;

    for (var i = 0; i < blocks.length; i += 1) {
      var value = blocks[i].textContent || '';
      if (
        value.indexOf('95') !== -1 ||
        value.indexOf('Utilizamos dos sistemas constructivos') !== -1 ||
        value.indexOf('Ventajas de elegirnos') !== -1 ||
        value.indexOf('Qué aportamos') !== -1 ||
        value.indexOf('Trabajamos con tres sistemas constructivos') !== -1
      ) {
        bodyBlock = blocks[i];
        break;
      }
    }

    if (!heading || !bodyBlock) return false;

    section.dataset.ieHomeSolutionsApplied = 'true';
    section.classList.add('ie-home-solutions__section');
    heading.classList.add('ie-home-solutions__heading');
    heading.textContent = SOLUTIONS_COPY.heading;
    bodyBlock.classList.add('ie-home-solutions__copy');
    bodyBlock.innerHTML = SOLUTIONS_COPY.body;
    return true;
  }

  function applyBenefits(root) {
    var scope = root || document;
    var section = scope.querySelector && scope.querySelector('#shopify-section-section_g3xbzL');
    if (!section && scope === document) section = document.getElementById('shopify-section-section_g3xbzL');
    if (!section) return false;

    section.classList.add('ie-home-benefits');
    var blocks = section.querySelectorAll('.text-block');
    var applied = 0;

    for (var b = 0; b < BENEFITS.length; b += 1) {
      var benefit = BENEFITS[b];
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

      if (!titleBlock) continue;

      var group = titleBlock.parentElement;
      if (!group) continue;

      var candidates = group.querySelectorAll('.text-block');
      var copyBlock = candidates.length > 1 ? candidates[1] : null;

      titleBlock.classList.add('ie-home-benefit__title');
      titleBlock.innerHTML = '<p><strong>' + benefit.title + '</strong></p>';

      if (copyBlock) {
        copyBlock.classList.add('ie-home-benefit__copy');
        copyBlock.innerHTML = '<p>' + benefit.copy + '</p>';
      }

      applied += 1;
    }

    return applied > 0;
  }

  function applyCriteria(root) {
    var scope = root || document;
    var section = scope.querySelector && scope.querySelector('#shopify-section-section_aAqjjb');
    if (!section && scope === document) section = document.getElementById('shopify-section-section_aAqjjb');
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

    headingBlock.dataset.ieCriteriaApplied = 'true';
    headingBlock.classList.add('ie-home-criteria__heading');
    bodyBlock.classList.add('ie-home-criteria__body');
    headingBlock.innerHTML = '<p><strong>' + CRITERIA_COPY.heading + '</strong></p>';
    bodyBlock.innerHTML = CRITERIA_COPY.body;
    return true;
  }

  function reveal() {
    document.documentElement.classList.remove('ie-home-prep');
  }

  function applyAll(root) {
    applyHero(root);
    applySolutions(root);
    applyBenefits(root);
    applyCriteria(root);
  }

  try {
    applyAll(document);
  } finally {
    reveal();
  }

  document.addEventListener('shopify:section:load', function (event) {
    applyAll(event.target);
  });
})();
