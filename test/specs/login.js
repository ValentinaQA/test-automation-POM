import selectors from '../selectors/login.sel';
import expected from '../expected/login.exp';
import login from '../pages/login.page';

describe('Login', () => {

    describe('Elements', () => {

        before(() => {        
            login.openPage();
        })

        it('Page-title-is-correct', () => {           
            expect(browser).toHaveTitle(expected.pageTitle)
        })  
        
        it('Page-URL-is-correct', () => {        
            const URL = browser.getUrl();
            expect(browser).toHaveUrl(expected.loginUrl)
        })
    })
    
    describe('Elements-displayed', () => {      
    
        it('Logo', () => {
            expect($(selectors.logo)).toBeDisplayed()
        })
    
        it('Email-field', () => {
            expect($(selectors.emailField)).toBeDisplayed()
        })
    
        it('Password-field', () => {
            expect($(selectors.passwordField)).toBeDisplayed()
        })

        it('Login-button-is-display', () => {
            expect($(selectors.btnLogin)).toBeDisplayed()
        })

        it('Remind-Password-link-is-display', () => {
            expect($(selectors.btnForgot)).toBeDisplayed()
        })    
    
    })
    
    describe('Elements-values', () => {
    
        it('Email-placeholder', () => {
            login.checkPlaceholder(selectors.emailField, expected.placeholderEmail);
        })
    
        it('Password-placeholder', () => {
            login.checkPlaceholder(selectors.passwordField, expected.placeholderPassword);
        })
    
        it('Login-button', () => {
            expect($(selectors.btnLogin)).toHaveText(expected.loginBtnName)
        })
    
        it('Remind-password-link', () => {
            expect($(selectors.btnForgot)).toHaveText(expected.remindPasswordName)
        })    
    })

    describe('Functionality', () => {       

        it('Error-message-appears-if-both-fields-are-empty', () => {
            login.bothFieldsEmptyError();
        }) 

        it('Error-message-disapears-on-input-in-Email-field', () => {
            login.errorMessageDisappears(selectors.emailField, selectors.errorMessage);
        }) 

        it('Error-appears-Password-field-is-empty', () => {  
            login.emptyPasswordError();
        }) 

        it('Error-message-disapears-on-input-in-Password-field', () => { 
            login.errorMessageDisappears(selectors.passwordField, selectors.errorMessage);
        })

        it('Error-appears-Email-field-is-empty', () => {  
            login.emptyEmailError();
        }) 

        it('Error-message-appears-if-Email-is-incorrect', () => {  
            login.incorrectEmailError();
        })             

        it('Error-message-appears-if-password-is-incorrect', () => {  
            login.incorrectPasswordError();
        })        

        /*it('Error-message-appears-if-Email-is-correct', () => {  
            browser.url(selectors.URL);          
            $(selectors.emailField).setValue(expected.correctEmail)
            $(selectors.passwordField).setValue(expected.incorrectPassword)
            $(selectors.btnLogin).click()
            expect($(selectors.errorMessage)).toBeDisplayed()
            expect($(selectors.errorMessage)).toHaveText(expected.errorMsgPassIncorrect)
        })  */  
    
    })
})