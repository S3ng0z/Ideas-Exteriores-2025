document.addEventListener('DOMContentLoaded', () => {
    const variantSelect = document.querySelector('select[name="id"], input[name="id"]');
  
    if (!variantSelect) return;
  
    variantSelect.addEventListener('change', (e) => {
      const variantId = e.target.value;
  
      // Buscar el objeto JSON del producto y la variante correspondiente
      const productElement = document.querySelector('[data-product-id]');
      if (!productElement) return;
  
      const productId = productElement.dataset.productId;
      const productData = window[`product_${productId}`];
  
      if (!productData || !productData.variants) return;
  
      const newVariant = productData.variants.find(v => v.id == variantId);
      if (!newVariant) return;
  
      // Actualizar el precio en el DOM (ajusta según tu estructura)
      const priceContainer = productElement.querySelector('product-price');
      if (priceContainer) {
        priceContainer.innerHTML = `
          <span class="price__regular">${Shopify.formatMoney(newVariant.price, Shopify.money_format)}</span>
        `;
      }
  
      // Actualizar el input oculto de cuota (si existe)
      const hiddenInput = productElement.querySelector('input[name="id"]');
      if (hiddenInput) {
        hiddenInput.value = newVariant.id;
      }
    });
});
