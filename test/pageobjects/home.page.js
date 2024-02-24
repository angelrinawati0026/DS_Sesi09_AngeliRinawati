const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get iconDogImage () { return $('#item_4_img_link'); }
    get iconFilterNull() { return $('.product_sort_container'); }
    get iconFilterHightoLow() { return $('.product_sort_container option[value="hilo"]'); }
    get pageFilter() { return $('#inventory_container.inventory_container'); }
    get iconFilterLowtoHigh() { return $('.product_sort_container option[value="lohi"]'); }
    get iconFilterZtoA() { return $('.product_sort_container option[value="za"]'); }
    get iconFilterAtoZ() { return $('.product_sort_container option[value="az"]'); }
    get idProduk() { return $('#item_4_title_link'); }

    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.iconCart).toBeDisplayed()  
    }

    async validateHomePageProblemUser() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.iconDogImage).toBeDisplayed()  
    }

    async filterHightoLow() {
        //1.button filter di klik
        await this.iconFilterNull.click();
        //2.pilih filter apa
        await this.iconFilterHightoLow.click();
        //3.hasil filter ditampilkan
        await this.pageFilter.waitForDisplayed();
    }

    async filterLowtoHigh() {
        await this.iconFilterNull.click();
        await this.iconFilterLowtoHigh.click();
        await this.pageFilter.waitForDisplayed();
    }

    async filterZtoA() {
        await this.iconFilterNull.click();
        await this.iconFilterZtoA.click();
        await this.pageFilter.waitForDisplayed();
    }

    async filterAtoZ() {
        await this.iconFilterNull.click();
        await this.iconFilterAtoZ.click();
        await this.pageFilter.waitForDisplayed();

    }

    async detailProduk() {
        await this.iconCart.waitForDisplayed();
        await this.idProduk.click();
    }

    open() {
        return super.open('/inventory.html');
    }

}

module.exports = new HomePage();
