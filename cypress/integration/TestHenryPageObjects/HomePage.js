///<reference types="Cypress"/>

import BasePage from "./BasePage";
class HomePage extends BasePage {


     

    //page locators 
    UserManagementoption = `//span[text()='USER MANAGEMENT']`
    UserFeedbackoption = `//span[text()='USER FEEDBACK']`
    openOrderTrackingoption = `//span[text()='OPEN ORDER TRACKER']`
    orderHistoryoption = `//span[text()='ORDER HISTORY']`
    priceListoption = `//span[text()='PRICE LIST']`
    dockScheduleroption = `//span[text()='DOCK SCHEDULER']`
    knowledgeCenteroption = `//span[text()='KNOWLEDGE CENTER']`



    //pageobjects with actions

    openQAPortal() {
        return super.openQAPortal()
    }


    getHomePageOptions() {
        return cy.get('div .css-tile-name')

    }

    getUserManagement() {
        return cy.xpath(this.UserManagementoption).click()
    }

    getUserFeedback() {
        return cy.xpath(this.UserFeedbackoption).click()
    }

    getopenOrderTracking() {
        return cy.xpath(this.openOrderTrackingoption).click()
    }

    getorderHistory() {
        return cy.xpath(this.orderHistoryoption).click()
    }

    getpriceList() {
        return cy.xpath(this.priceListoption).click()
    }

    getdockScheduleroptionk() {
        return cy.xpath(this.dockScheduleroption).click()
    }

    getknowledgeCenter() {
        return cy.xpath(this.knowledgeCenteroption).click()
    }


}
export default new HomePage();