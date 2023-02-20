


class BasePage {
  username = "#mat-input-0";
  password = "#mat-input-1";
  submitBtn = `button[type='submit']`;
  profileBtn = `.fa.fa-user-circle`;
  logOutBtn = ".fa.fa-lock";

  navigate() {
    cy.fixture("Config.json").then(function (data) {
      cy.visit(data.BaseUrl); // to access the data and make it as a globally available object
    });
  }

  dodefaultLogin() {
    cy.fixture("Config.json").then(function (data) {
      cy.visit(data.BaseUrl);
      cy.get("#mat-input-0").type(this.data.userName);
      cy.get("#mat-input-1").type(this.data.passWord);
      cy.get(`button[type='submit']`).click();
    });
  }

  dologOut() {
    cy.get(this.profileBtn).click();
    cy.get(this.logOutBtn).click();
  }
}
export default BasePage;
