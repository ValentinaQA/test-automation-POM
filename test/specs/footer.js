import sel from '../selectors/footer.sel';
import exp from '../expected/footer.exp';

describe('Footer', () => {

    describe('Elements-displayed', () => {

        it('Lanuage-section', () => {
            browser.url('/')
            expect($(sel.lanuageLink)).toBeDisplayed()
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