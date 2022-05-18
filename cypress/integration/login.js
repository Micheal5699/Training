import {loginPage,} from "../../cypress/fixtures/selectors.js";

describe("Given i am on loginPage", function () {
beforeEach(function () {
cy.visit('/')

});
it("LOGIN - I Should be able to sign in my account with valid", function () {
    cy.get(loginPage.popUpAdd).click()
})
})
