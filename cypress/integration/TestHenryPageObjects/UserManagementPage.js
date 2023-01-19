import HomePage from "./HomePage";

const { default: BasePage } = require("./BasePage");


class UserManagementPage extends BasePage {

//page locators:

    userListtext='div h4'
    addUseroption=`//span[text()=' Add User ']`







//page actions

 verifyUserListtext(){
    cy.get(this.userListtext)
 }

 getAddUserOption(){
    cy.get(this.addUseroption).click()

 }

}
export default new UserManagementPage();