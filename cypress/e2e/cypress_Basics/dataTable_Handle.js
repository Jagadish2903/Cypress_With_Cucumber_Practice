///<reference types="Cypress"/>

//DataTable Concept
//Example-1 Adding the total age of the employees and asserting total
//Example-2 selecting the last name and get the age of the employee

describe("DataTable Handle Example 1", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });

  it("Calculate and assert the total age of all users", () => {
    var userDetail = [];
    let num = 0;
    cy.get("#thumbnail-1 td")
      .each(($e1, index, $list) => {
        userDetail[index] = $e1.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDetail.length; i++) {
          //cy.log(userDetail[i]);
          if (Number(userDetail[i])) {
            num += Number(userDetail[i]);
          }
        }
        cy.log("The total age of the User is " + " " + num);
        expect(num).to.equal(322);
      });
  });

  it.only("Get the age based on the last name of the person", () => {
    let userName='doe';
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($e1, index, $list) => {
      const lastName = $e1.text().toLowerCase();
      if (lastName.includes(userName)) {
        cy.get(`#thumbnail-1 tr td:nth-child(2)`)
          .eq(index)
          .next()
          .then(function(age) {
            const personAge = age.text();
            expect(personAge).to.equal('20');
            cy.log(`Age of ${userName} is : ` + " " + personAge);
          });
      }
    });
  });
});
