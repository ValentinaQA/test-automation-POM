import sel from '../selectors/forgot.sel';
import exp from '../expected/forgot.exp';
import forgot from '../pages/forgot.page';

describe('Forgot', () => {

    describe('App-data', () => {      
        
        before(() => {
            forgot.openPage();
        })
    
        it('Page-forgot-is-correct', () => {
            expect(browser).toHaveUrl(exp.forgotPageUrl)
        })
    
    })
    
    describe('Elements-displayed', () => {
        
        it('Logo', () => {
            expect($(sel.loginlogo)).toBeDisplayed()
        })

        it('Email-field', () => {
            expect($(sel.emailField)).toBeDisplayed()
        })

        it('Remind-Password-bitton-display', () => {
            expect($(sel.reminderPasswordBtn)).toBeDisplayed()
        }) 
           
    })
    
    describe('Elements-values', () => {
    
        it('Email-placeholder', () => {
            expect($(sel.emailField)).toHaveAttribute('placeholder', exp.placeholderEmail)
        })   
        
        it('Remind-password-button', () => {
            expect($(sel.reminderPasswordBtn)).toHaveText(exp.remindBtnName)
        })

    })

    describe('Functionality', () => {

        it('Remind-Password-button-redirect-to-Forgot-page', () => {
            forgot.redirectFromLoginToForgotPage();
        })
    
        it('Remind-Password-page-is-displayed', () => {  
            expect($(sel.forgotPage)).toBeDisplayed()
        })

        it('Error-message-appears-if-Email-field-is-empty', () => {
            forgot.emptyEmailError();
        })

        it('Error-message-disapears-on-input-in-Email-field', () => {
            forgot.errorMessageDisappears(sel.emailField, sel.errortext)           
        })

        it('Error-message-appears-if-Email-is-incorrect', () => {  
           forgot.incorrectEmailError();
        })

        it('Success-message-appears-if-Email-is-correct', () => {  
            forgot.successMessage();
        })

         it('User-is-redirected-to-Home-in-3-sec-after-the-password-reminder-was-sent.', () => {        
            forgot.successRedirect    
        }) 

    })

})