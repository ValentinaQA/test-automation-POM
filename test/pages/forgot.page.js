import selectors from '../selectors/forgot.sel';
import expected from '../expected/forgot.exp';
import creds from '../data/credentials';
import Base from './base.page';

class Forgot extends Base {
    openPage() {
        browser.url(selectors.URL)
    }

    redirectFromLoginToForgotPage() {
        browser.url(selectors.loginURL); //open Login page URL
        $(selectors.forgotBtn).click(); //click Forgot Password link
        expect(browser).toHaveUrl(expected.forgotPageUrl); //Test is back again on Forgot page
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.reminderPasswordBtn).click();
        expect($(selectors.errortext)).toBeDisplayed();
        expect($(selectors.errortext)).toHaveText(expected.errorMsgText);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.reminderPasswordBtn).click();
        expect($(selectors.errortext)).toBeDisplayed();
        expect($(selectors.errortext)).toHaveText(expected.incorrectEmailText);
    }

    successMessage() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.reminderPasswordBtn).click();
        expect($(selectors.errortext)).toBeDisplayed();
        expect($(selectors.errortext)).toHaveText(expected.reminderSent);
    }

    successRedirect() {
        expect(browser).toHaveUrl(expected.homePageUrl, { wait: expected.redirect + 100 })
    }

}

export default new Forgot;