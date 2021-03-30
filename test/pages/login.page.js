import selectors from '../selectors/login.sel';
import expected from '../expected/login.exp';
import creds from '../data/credentials';
import Base from './base.page';

class Login extends Base {
    openPage() {
        browser.url(selectors.URL)
    }

    emptyPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.btnLogin).click();
        expect($(selectors.errorMessage)).toBeDisplayed();
        expect($(selectors.errorMessage)).toHaveText(expected.errorMsgEmptyFields);
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.passwordField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorMessage)).toBeDisplayed();
        expect($(selectors.errorMessage)).toHaveText(expected.errorMsgEmptyFields);
    }

    bothFieldsEmptyError() {
        this.openPage();
        $(selectors.btnLogin).click();
        expect($(selectors.errorMessage)).toBeDisplayed();
        expect($(selectors.errorMessage)).toHaveText(expected.errorMsgEmptyFields);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.passwordField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorMessage)).toBeDisplayed();
        expect($(selectors.errorMessage)).toHaveText(expected.errorMsgEmailIncorrect);
    }

    incorrectPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.passwordField).setValue(creds.player.password + 'a'); //Enter invalid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorMessage)).toBeDisplayed();
        expect($(selectors.errorMessage)).toHaveText(expected.errorMsgPassIncorrect);
    }

    errorMessageDisappears(field) {
        $(field).setValue('a') //Enter 'a' into the field
        $(selectors.errorMessage).waitForDisplayed({ reverse: true }) //reverse means waitForNotDisplayed
    }
}

export default new Login;