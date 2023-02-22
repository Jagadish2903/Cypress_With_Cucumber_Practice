///<reference types="Cypress"/>

describe("Validating the total price of all products using alias/invoke/each/then methods ", () => {
  it("getting all the price of the items", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`div.thumbnail`)
      .find(`.oneprice`)
      .each(($e1, index, $list) => {
        cy.log($e1.text());
      });
  });

  it("Validating the total price of the Non sale Products for practice", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`div.thumbnail`).find(".oneprice").invoke("text").as(`productlist`);
    cy.get(`@productlist`).then(($itemPrice) => {
      let price = $itemPrice.split("$"); //removing the dollar sign using split function in array
      let i;
      let nonsaleItemPrice = 0;
      var TotalPrice = 0;
      for (i = 0; i < price.length; i++) {
        //iterating through all the prices
        cy.log(price[i]);
        TotalPrice += Number(price[i]);
      }
      nonsaleItemPrice += TotalPrice;
      cy.log("The total cost of Non Sale Item is :" + " " + nonsaleItemPrice);
    });
  });

  it("Validating the total price of the sale Products for practice", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`div.thumbnail`)
      .find(".pricenew")
      .invoke("text")
      .as(`saleproductlist`);
    cy.get("@saleproductlist").then((saleItem) => {
      let totalsaleProductPrice = 0;
      let salePrice = saleItem.split("$");
      let totalSalePrice = 0;
      let j;
      for (j = 0; j < salePrice.length; j++) {
        cy.log(salePrice[j]);
        totalSalePrice += Number(salePrice[j]);
      }
      totalsaleProductPrice += totalSalePrice;
      cy.log(
        "The Total cost of Non Sale Item is :" + " " + totalsaleProductPrice
      );
    });
  });

  it("Validating the total price of the make up Skin Care Products for practice", () => {
    cy.visit(
      `https://automationteststore.com/index.php?rt=product/category&path=36`
    );
    cy.get(`.thumbnail`).find(`.oneprice`).invoke("text").as("makeupPrice");
    cy.get("@makeupPrice").then((price3) => {
      let updatedprice = price3.split("$");
      let k;
      let totalmakeUpPrice=0;
      let finalMakeUpPrice=0;
      for (k = 0; k < updatedprice.length; k++) {
        let price3 =Number( updatedprice[k]);
       cy.log(price3)
        totalmakeUpPrice+=price3
    
      }
      finalMakeUpPrice+=totalmakeUpPrice
      cy.log("The Final Price on makeUpProducts is "+ " "+ finalMakeUpPrice)

    });
  });
});
