import { signInPage } from "../pageObject/homepage.cy";
/// <reference types="cypress" />

describe("Sauce Demo Log in", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("i want login standar user", () => {
    signInPage.inputUsername("standar_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });

  it("i want login locked_out_user", () => {
    signInPage.inputUsername("locked_out_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });

  it("i want login problem_user", () => {
    signInPage.inputUsername("problem_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });

  it("i want login performance_glitch_user", () => {
    signInPage.inputUsername("performance_glitch_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });

  it("i want login error_user", () => {
    signInPage.inputUsername("error_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });

  it("i want login visual_user", () => {
    signInPage.inputUsername("visual_user");
    signInPage.inputPassword();
    signInPage.submitButton();
    cy.url().should("contain", "/inventory.html");
  });
});
