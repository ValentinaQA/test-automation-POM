import selectors from '../selectors/footer.sel';
import expected from '../expected/footer.exp';
import Base from './base.page';

class Footer extends Base {

    openPage() {
        browser.url(selectors.URL)
    }

}

export default new Footer;