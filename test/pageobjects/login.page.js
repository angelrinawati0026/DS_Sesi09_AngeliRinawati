const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    //element collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#login-button');}
    get errorLockedOutUser () {return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}

    async login () {
        console.log(`USERNAME : ${process.env.USERNAME_STANDARD_USER}`)
        console.log(`PASSWORD : ${process.env.PASSWORD_SAUCEDEMO}`)

        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError() {
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    open () {
        return super.open('/'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new LoginPage();
