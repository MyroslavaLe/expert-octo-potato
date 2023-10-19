/// <reference types='cypress' />

import marketplacePageObject from "../support/pages/marketplace.pageObject";

const marketplacePage = new marketplacePageObject();

const productName = 'Baby mint green';

describe('marketplace', () => {

    it('should provide the ability to find and open the product', () => {
      marketplacePage.visit();
      
      marketplacePage.typeProductName(productName);
      marketplacePage.clickSearchButton();
      
      marketplacePage.clickProductCard();
      marketplacePage.assertProductPageOpened(productName);
    });

    it('should provide the ability to searching for a query and checking the results', () => {
      marketplacePage.visit();

      marketplacePage.typeProductName('STAR WARS');
      marketplacePage.clickSearchButton();

      marketplacePage.assertProductQuantity(2);
    });

    it('should provide the ability to check that products on the first and second page are different', () => {
      marketplacePage.visit();
    
      marketplacePage.firstPageProducts.invoke('text').then((firstPageProductText) => {
        marketplacePage.secondPageProducts.invoke('text').then((secondPageProductText) => {

          expect(firstPageProductText).to.not.deep.equal(secondPageProductText);
        });
      });
    });
  });