describe('Cовершения покупки', function () {
    it('Позитивный тест', function () {
         cy.visit(' https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
         cy.get('[href="https://testqastudio.me"]').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5500)
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Александр');
         cy.get('#billing_last_name').type('Полянский');
         cy.get('#billing_address_1').type('2 Кутузова');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state').type('Москва');
         cy.get('#billing_postcode').type('121354');
         cy.get('#billing_phone').type('89258882277');
         cy.get('#billing_email').type('nintendo98@mail.ru');
         cy.get('#place_order').click();
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
    })
})






