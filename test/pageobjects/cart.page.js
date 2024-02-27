const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page {
    //get iconBack () { return $('#back-to-products'); }
    get iconQtyCart () { return $('#shopping_cart_container.shopping_cart_container a.shopping_cart_link span'); }
    get textcartPage () { return $('.title'); }
    get removeProduct () { return $('#remove-sauce-labs-bike-light'); }
    get idProduk() { return $('#item_0_title_link'); }
    get addMoreProduk() { return $('#continue-shopping'); }
    get buttonCartBike () { return $('#add-to-cart-sauce-labs-bike-light'); }
    

    async cartPageFromHome() {
        await this.iconQtyCart.click();
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(this.textcartPage).toBeDisplayed()

    }

    async removecartPage() {
        expect(this.textcartPage).toBeDisplayed()
        await this.removeProduct.click();
        await this.idProduk.waitForDisplayed({ reverse: true })
    }

    async addProductToCart() {
        expect(this.textcartPage).toBeDisplayed()
        await this.addMoreProduk.click();
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.buttonCartBike).toBeDisplayed()
    }

    open () {
        return super.open('/cart.html'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new CartPage();
