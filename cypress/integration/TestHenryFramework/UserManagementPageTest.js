///<reference types="Cypress"/>
import HomePage from "../TestHenryPageObjects/HomePage";
import LoginPage from "../TestHenryPageObjects/LoginPage";
import UserManagementPage from "../TestHenryPageObjects/UserManagementPage";

describe('TestHenryProject Session', function () {
    before(function () {
        //runs before all the it blocks
        cy.fixture('TestData.json').then(function (data) {
            this.data = data; // to access the data and make it as a globally available object
        })
    })

    beforeEach(function () {
        //runs before all the it blocks
        HomePage.openQAPortal()
        LoginPage.setUserName(this.data.UserName)
        LoginPage.setPassword(this.data.Password)
        LoginPage.Login()
        })
 
    

    it('Testing UserManagement Page', function () {

        HomePage.getUserManagement()
        UserManagementPage.getAddUserOption()
        
      // HomePage.super.verifyUserListtext().should('have.text','User List')
        

        
    




    })

})