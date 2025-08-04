import LoginPage from '../../support/pageObjects/loginPage';
import SearchBar from '../../support/pageObjects/searchPage';
const loginPage = new LoginPage();
const searchBar = new SearchBar();

describe("login with POM in salma ERPNext",()=>{
   it("login with valid credentials",()=>{
    loginPage.visit();
    //salma-qc.altersense.net
    loginPage.enterUsername("etu@altersense.com");
    loginPage.enterPassword("E123@#qwertyu");
   // inctl.net
   //  loginPage.enterUsername("Administrator");
   //  loginPage.enterPassword("admin");
    loginPage.submit();
    cy.wait(2000);
    loginPage.crossmodal();
    searchBar.search("price fixation");
    // loginPage.verifyLoginSuccess(); 
   })
})