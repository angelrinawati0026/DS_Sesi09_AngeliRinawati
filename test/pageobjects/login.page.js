const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    //element collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () { return $('#password');}
    get buttonLogin () { return $('#login-button');}
    get errorLockedOutUser () {return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}
    get errorEmptyUser () {return $('//h3[text()="Epic sadface: Username is required."]')}
    get errorInvalidPass () {return $('//h3[text()="Epic sadface: Username and password do not match any user in this service"]')}

    async login (username,password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();   
    }

    async validateLockedOutUserError() {
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    async validateErrorEmptyUser() {
        expect(this.errorEmptyUser).toBeDisplayed()
    }

    async validateErrorInvalidPass() {
        expect(this.errorInvalidPass).toBeDisplayed()
    }

    open () {
        return super.open('/'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new LoginPage();
