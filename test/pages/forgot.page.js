import selectors from '../selectors/forgot.sel';
import expected from '../expected/forgot.exp';

class Forgot {
    openPage() {
        browser.url(selectors.URL)
    }
}

export default new Forgot;