class LoginPage {
  visit() {
    cy.visit('https://salma-qc.altersense.net/login');
    // cy.visit('https://stagev15.inctl.net/login');
  }

  enterUsername(username) {
    cy.get('#login_email').type(username);
  }

  enterPassword(password) {
    cy.get('#login_password').type(password);
  }

  submit() {
	cy.get(".btn").first().should('contain', 'Login').click({ force: true });
  }
  crossmodal() {
    cy.get(".modal-actions").click();
  }
    login(username, password) {
        this.visit();
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
  verifyLoginSuccess() {
    cy.url().should('include', '/dashboard');
    cy.get('.welcome-message').should('contain', 'Welcome back');
  }

  verifyLoginFailure() {
    cy.get('.error-message').should('be.visible');
  }
}
export default LoginPage;