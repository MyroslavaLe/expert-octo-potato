import PageObject from "../pageObject";

class marketplacePageObject extends PageObject {
    get searchField() {
        return cy.get("[class='sc-iIUQWv jpNogh']");
    }

    get searchButton() {
        return cy.get('.sc-eldieg > .ant-btn-primary > .sc-fotOHu');
    }

    get productCard() {
        return cy.get('.sc-cYuQJE > .ant-row > :nth-child(1)');
    }

    get firstPageProducts() {
        return cy.get('#\\36 09e515a79fe954f36ab30de');
      }
    
      get secondPageProducts() {
        cy.get('.sc-bXdNzS').scrollTo('bottom');
        return cy.get('#\\36 4eccaeae4a00e8ea5254f07');
      }

    typeProductName(productName) {
        this.searchField
         .type(productName);
    }

    clickSearchButton() {
        this.searchButton
         .dblclick({ force: true });
    }

    clickProductCard() {
        cy.get("#\\36 09e515a79fe954f36ab30de > .sc-ksdxgE > .sc-hBUSln > .ant-btn")
         .dblclick({ force: true });
    }

    assertProductPageOpened(productName) {
        cy.url()
         .should('include', 'https://giftly.klickly-dev.com/marketplace/6503c1c73ed90e56552120fe?q=Baby%20mint%20green');
    }

    assertProductQuantity(expectedQuantity) {
        cy.get('.sc-eySxxw')
         .should('have.length', expectedQuantity);
    }
} 

export default marketplacePageObject;