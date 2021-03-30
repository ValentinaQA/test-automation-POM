import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import header from '../pages/header.page';


describe('Header', () => {

    describe('Elements-displayed', () => {

        before(() => {
            header.openPage();
        })

        it('Header', () => {
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
            header.btnRedirect(sel.ratingbtn, exp.ratingPageUrl);
        })
    
        it('Rating-page-is-displayed', () => {  
            expect($(sel.ratingbtn)).toBeDisplayed()
        })

        it('Back-to-Login-button-is-displayed-in-Rating-page', () => {  
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })

        it('Back-to-Login-redirects', () => {
            header.btnRedirect(sel.backToLoginPageBtn, exp.loginPageUrl)
        })

        it('Login-page-is-displayed', () => {
            expect($(sel.loginPage)).toBeDisplayed()
        })

        it('Public-Game-button-redirect', () => {
            header.btnRedirect(sel.publicGameBtn, exp.publicGamePageUrl)
        })
    
        it('Public-game-page-is-displayed', () => {  
            expect($(sel.publicgamePage)).toBeDisplayed()
        })

        it('Back-to-Login-button-is-displayed-in-Public-Game-page', () => {  
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })

        it('Back-to-Login-redirects', () => {
            header.btnRedirect(sel.backToLoginPageBtn, exp.loginPageUrl)
        })

        it('Login-page-is-displayed', () => {
            expect($(sel.backToLoginPageBtn)).toBeDisplayed()
        })
    })
})