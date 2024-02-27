const { $ } = require('@wdio/globals')
const Page = require('./page');

class AddCartPage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get iconBack () { return $('#back-to-products'); }
    get buttonCartBackpack () { return $('#add-to-cart-sauce-labs-backpack'); }
    get buttonCartBike () { return $('#add-to-cart-sauce-labs-bike-light'); }
    get buttonCartBackpackRemove () { return $('#remove-sauce-labs-backpack'); }
    get buttonCartBikeRemove () { return $('#remove-sauce-labs-bike-light'); }
    get iconQtyCart () { return $('#shopping_cart_container.shopping_cart_container a.shopping_cart_link span'); }
    
    

    async addToCartFromHome() {
        expect(this.iconCart).toBeDisplayed()
        await this.buttonCartBike.click();
        await this.buttonCartBikeRemove.waitForDisplayed();
        await this.iconQtyCart.waitForDisplayed();
    }

    async addToCartFromDetail() {
        expect(this.iconBack).toBeDisplayed()
        await this.buttonCartBackpack.click();
        await this.buttonCartBackpackRemove.waitForDisplayed();
        await this.iconQtyCart.waitForDisplayed();
    }

    async addMoreToCartFromHome() {
        expect(this.iconCart).toBeDisplayed()
        await this.buttonCartBike.click();
        await this.buttonCartBikeRemove.waitForDisplayed();
        await this.iconQtyCart.waitForDisplayed();
    }

    open () {
        return super.open('/inventory.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new AddCartPage();
