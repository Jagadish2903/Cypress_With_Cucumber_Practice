import BasePage from "./BasePage";

class UserManagementPage extends BasePage {

userManagementOption= `//span[text()='USER MANAGEMENT']`
userListHeader=`.table_header`
addUser='.mat-button-wrapper'

doclickUserManagement(){
    cy.xpath(this.userManagementOption).click();
}

getUserListHeader(){
return cy.get(this.userListHeader)
}

getaddUser(){
return cy.get(this.addUser).contains('Add User');

}
}
export default UserManagementPage;
