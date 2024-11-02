class SignInPage {
  visitLoginPage() {
    cy.visit("https://www.saucedemo.com/");
  }

  inputUsername() {
    return cy.get('[data-test="username"]').type(`${standard_user}`);
  }

  inputPassword() {
    return cy.get('[data-test="password"]').type("secret_sauce");
  }

  submitButton() {
    return cy.get('[data-test="login-button"]').click();
  }
}

// class SignInPage {
//   visitLoginPage() {
//     cy.visit("https://www.saucedemo.com/");
//   }

//   inputUsername() {
//     return cy.get('[data-test="username"]').type("locked_out_user");
//   }

//   inputPassword() {
//     return cy.get('[data-test="password"]').type("secret_sauce");
//   }

//   submitButton() {
//     return cy.get('[data-test="login-button"]').click();
//   }
// }

// class SignInPage {
//   visitLoginPage() {
//     cy.visit("https://www.saucedemo.com/");
//   }

//   inputUsername() {
//     return cy.get('[data-test="username"]').type("problem_user");
//   }

//   inputPassword() {
//     return cy.get('[data-test="password"]').type("secret_sauce");
//   }

//   submitButton() {
//     return cy.get('[data-test="login-button"]').click();
//   }
// }

// class SignInPage {
//   visitLoginPage() {
//     cy.visit("https://www.saucedemo.com/");
//   }

//   inputUsername() {
//     return cy.get('[data-test="username"]').type("performance_glitch_user");
//   }

//   inputPassword() {
//     return cy.get('[data-test="password"]').type("secret_sauce");
//   }

//   submitButton() {
//     return cy.get('[data-test="login-button"]').click();
//   }
// }

// class SignInPage {
//   visitLoginPage() {
//     cy.visit("https://www.saucedemo.com/");
//   }

//   inputUsername() {
//     return cy.get('[data-test="username"]').type("error_user");
//   }

//   inputPassword() {
//     return cy.get('[data-test="password"]').type("secret_sauce");
//   }

//   submitButton() {
//     return cy.get('[data-test="login-button"]').click();
//   }
// }

// class SignInPage {
//   visitLoginPage() {
//     cy.visit("https://www.saucedemo.com/");
//   }

//   inputUsername() {
//     return cy.get('[data-test="username"]').type("visual_user");
//   }

//   inputPassword() {
//     return cy.get('[data-test="password"]').type("secret_sauce");
//   }

//   submitButton() {
//     return cy.get('[data-test="login-button"]').click();
//   }
// }

export const signInPage = new SignInPage();
