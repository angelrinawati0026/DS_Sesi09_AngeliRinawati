const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage extends Page {
    get textcartPage () { return $('.title'); }
    get buttonCheckout () { return $('#checkout'); }
    get fieldFirstName () { return $('#first-name');}
    get fieldLastName () { return $('#last-name');}
    get fieldPostalCode () { return $('#postal-code');}
    get buttonContinue () { return $('#continue'); }
    get buttonFinish () { return $('#finish'); }
    

    async checkoutStepOne() {
        expect(this.textcartPage).toBeDisplayed()
        await this.buttonCheckout.click();
    }

    async fillDataInformation(firstname,lastname,postalcode) {
        //expect(this.textcartPage).toBeDisplayed()
        await this.fieldFirstName.waitForDisplayed({ timeout: 2500 });
        await this.fieldFirstName.setValue(firstname);
        await this.fieldLastName.setValue(lastname);
        await this.fieldPostalCode.setValue(postalcode);
        await this.buttonContinue.click();
        expect(browser).toHaveUrlContaining('/checkout-step-two.html')
        expect(this.textcartPage).toBeDisplayed()
        await this.buttonFinish.click();
        expect(browser).toHaveUrlContaining('checkout-complete.html')
        expect(this.textcartPage).toBeDisplayed()
    }

    open () {
        return super.open('/checkout-step-one.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new CheckoutPage();
