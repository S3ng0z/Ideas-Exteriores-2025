(() => {
  const referenceKeys = [
    'referencia',
    'reference',
    'producto',
    'product',
    'modelo',
    'model',
    'servicio',
    'service',
    'presupuesto',
    'pedido',
    'order',
    'factura'
  ];

  const normaliseReference = (value) => {
    if (!value) return '';
    return value.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const initialiseForm = (form) => {
    if (form.dataset.ieContactReady === 'true') return;
    form.dataset.ieContactReady = 'true';

    const origin = form.querySelector('[data-ie-contact-origin]');
    const reference = form.querySelector('[data-ie-contact-reference]');
    const submit = form.querySelector('[data-ie-contact-submit]');

    if (origin) {
      origin.value = window.location.href;
    }

    if (reference && !reference.value) {
      const params = new URLSearchParams(window.location.search);
      const matchedKey = referenceKeys.find((key) => params.get(key));

      if (matchedKey) {
        reference.value = normaliseReference(params.get(matchedKey));
      }
    }

    form.addEventListener('submit', () => {
      if (!form.checkValidity() || !submit) return;

      submit.disabled = true;
      submit.setAttribute('aria-disabled', 'true');
      submit.dataset.originalLabel = submit.textContent.trim();
      submit.textContent = submit.dataset.loadingLabel || 'Enviando…';
    });
  };

  const init = () => {
    document.querySelectorAll('.ie-contact__native-form').forEach(initialiseForm);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
