beforeEach(function () {

    cy.fixture('TestData.json').then(function (data) {
        this.data = data; // to access the data and make it as a globally available object
    })

})