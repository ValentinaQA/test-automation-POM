import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp';
import footer from '../pages/footer.page'

describe('Footer', () => {

    describe('Elements-displayed', () => {

        before(() => {
            footer.openPage();
        })

        it('Footer', () => {
            expect($(sel.footer)).toBeDisplayed()
        })  

        it('Footer-links', () => {
            browser.url('/')
            expect($(sel.footerLinks)).toBeDisplayed()
        })  
        
        it('Copyright-text', () => {
            expect($(sel.copyrightText)).toBeDisplayed()
        })          
    
        it('Version-text', () => {
            expect($(sel.versionText)).toBeDisplayed()
        })

    })

    describe('Elements-values', () => {

        it('Copyright', () => {
            expect($(sel.copyrightText)).toHaveTextContaining(exp.copyrightText)
        })

        it('Version', () => {
            expect($(sel.versionText)).toHaveTextContaining(exp.version)
        })

        it('Website-by', () => {
            expect($(sel.websiteBy)).toHaveTextContaining(exp.websitename)
        })

    })

})