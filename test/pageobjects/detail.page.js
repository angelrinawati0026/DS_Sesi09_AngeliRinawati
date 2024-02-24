const { $ } = require('@wdio/globals')
const Page = require('./page');

class DetailPage extends Page {
    get iconBack () { return $('#back-to-products'); }
    
    async validateDetailPage() {
        expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        expect(this.iconBack).toBeDisplayed()  
    }

    async buttonBack() {
        await this.iconBack.click();
    }

    open () {
        return super.open('/inventory-item.html?id=1'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new DetailPage();
