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
        
        it('Redirect-to-login-page', () => {
            expect($(sel.loginbtn)).toBeDisplayed()
        }) 

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

        it('Remind-Password-button-redirect', () => {
            browser.url('/');
            expect(browser).toHaveUrl(exp.homePageUrl)
            let clickBtn = $(sel.forgotBtn);
            expect(clickBtn).toHaveText(exp.remindBtnName)
            clickBtn.click();
            expect(browser).toHaveUrl(exp.forgotPageUrl)
        })
    
        it('Remind-Password-page-is-displayed', () => {  
            expect($(sel.forgotPage)).toBeDisplayed()
        })

        it('Error-message-appears-if-Email-field-is-empty', () => {
            $(sel.reminderPasswordBtn).click()
            expect($(sel.errortext)).toBeDisplayed()
        })

        it('Error-message-text', () => {
            expect($(sel.errortext)).toHaveText(exp.errorMsgText)
        })

        it('Error-message-disapears-on-input-in-Email-field', () => {
            $(sel.emailField).setValue('a')
            $(sel.errortext).waitForDisplayed({ reverse: true})
        })

        it('Error-message-appears-if-Email-is-incorrect', () => {  
            browser.url('/forgot');          
            $(sel.emailField).setValue(exp.incorrectEmail)
            $(sel.reminderPasswordBtn).click()
            expect($(sel.errortext)).toBeDisplayed()
            expect($(sel.errortext)).toHaveText(exp.incorrectEmailText)
        })

        it('Success-message-appears-if-Email-is-correct', () => {  
            browser.url('/forgot');          
            $(sel.emailField).setValue(exp.correctEmail)
            $(sel.reminderPasswordBtn).click()
            expect($(sel.errortext)).toBeDisplayed()
            expect($(sel.errortext)).toHaveText(exp.correctEmailText)
        })

         it('User-is-redirected-to-Home-in-3-sec-after-the-password-reminder-was-sent.', () => {        
            expect(browser).toHaveUrl(exp.homePageUrl), {wait: 3100,}          
        }) 

    })

})