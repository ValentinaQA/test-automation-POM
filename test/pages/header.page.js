import sel from '../selectors/header.sel';
import exp from '../expected/header.exp';
import Base from './base.page';

class Header extends Base {

    openPage() {
        browser.url(sel.URL)
    }

    btnRedirect(btnClick, expUrl) {
        this.openPage()
        $(btnClick).click()
        expect(browser).toHaveUrl(expUrl)
    }

}

export default new Header;