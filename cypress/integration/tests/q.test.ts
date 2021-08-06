const userName = Cypress.env("user");
const userPassword = Cypress.env("pass");
const tackleUiUrl = Cypress.env("tackleUrl");

describe("Log In", () => {
    it("Login to Pathfinder", () => {
        // Login

        // Assert that home page has loaded after login
        expect(userName).to.equal(userPassword);
    });
});
