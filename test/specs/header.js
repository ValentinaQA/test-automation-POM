import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import header from '../pages/header.page';


describe('Header', () => {

    describe('Elements-displayed', () => {

        it('Header', () => {
            browser.url('/')
            expect($(sel.headerPage)).toBeDisplayed()
        })
    
        it('Rating-button', () => {
            expect($(sel.ratingbtn)).toBeDisplayed()
        })
    
        it('Public-game-button', () => {
            expect($(sel.publicGameBtn)).toBeDisplayed()
        })
    })

    describe('Functionality', () => {

        it('Ratings-button-redirect', () => {
            $(sel.ratingbtn).click()
            expect(browser).toHaveUrl(exp.ratingPageUrl)
        })
    
        it('Rating-page-is-displayed', () => {  
            expect($(sel.ratingbtn)).toBeDisplayed()
        })

        it('Back-to-Login-button-is-displayed-in-Rating-page', () => {  
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })

        it('Back-to-Login-redirects', () => {
            $(sel.backToLoginPageBtn).click()
            expect(browser).toHaveUrl(exp.loginPageUrl)
        })

        it('Login-page-is-displayed', () => {
            expect($(sel.loginPage)).toBeDisplayed()
        })

        it('Public-Game-button-redirect', () => {
            $(sel.publicGameBtn).click()
            expect(browser).toHaveUrl(exp.publicGamePageUrl)
        })
    
        it('Public-game-page-is-displayed', () => {  
            expect($(sel.publicgamePage)).toBeDisplayed()
        })

        it('Back-to-Login-button-is-displayed-in-Public-Game-page', () => {  
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })

        it('Back-to-Login-redirects', () => {
            $(sel.backToLoginPageBtn).click()
            expect(browser).toHaveUrl(exp.loginPageUrl)
        })

        it('Login-page-is-displayed', () => {
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })
    })
})