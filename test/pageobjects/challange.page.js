
import Page from './page.js'
const data = require('../data/data.js')

class ChallangePage extends Page{
    get successPage () {
        return $('.success-container');
    }

    get nameField () {
        return $('#first-name');
    }

    get buttonVerify () {
        return $('button[type="button"]');
    }

    get alertText () {
        return $('#conf-msg');
    }

    get numberField () {
        return $('#number-box');
    }

    get yelowButton () {
        return $('#simple-button-1');
    }
    
    get greenButton () {
        return $('#simple-button-2');
    }

    get redButton () {
        return $('#simple-button-3');
    }

    get checkboxOne () {
        return $('#checkbox1');
    }

    get checkboxTwo () {
        return $('.checkbox2');
    }

    get checkboxThree () {
        return $('input[name="checkbox3"]');
    }

    get checkboxFour () {
        return $('input[type=checkbox]:nth-child(7)');
    }

    get checkboxFive () {
        return $('#ba');
    }

    get countriesDropDown () {
        return $('#country');
    }

    get hamburgerExpand () {
        return $('.container > a');
    }

    get hamburgerMenuVerify () {
        return $('#hamburger-menu-verify');
    }

    get slider () {
        return $('#slider');
    }

    get usernameField () {
        return $('#user-name');
    }

    get passwordField () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-btn');
    }

    get lastName () {
        return $('#last-name');
    }

    get email () {
        return $('#email');
    }

    get sexFemale () {
        return $('#sex-female');
    }

    get sexMale () {
        return $('#sex-male');
    }

    get countryCode () {
        return $('#country-code');
    }

    get mobileNumber () {
        return $('#mobile-number');
    }

    get termsCheckbox () {
        return $('#terms-checkbox');
    }

    get submitButton () {
        return $('#submit-btn');
    }
}

export default new ChallangePage();
