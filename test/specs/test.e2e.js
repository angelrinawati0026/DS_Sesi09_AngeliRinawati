const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const DetailPage = require('../pageobjects/detail.page')
const AddCartPage = require('../pageobjects/addcart.page')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const checkoutPage = require('../pageobjects/checkout.page')

describe('Swag Lab' , () => {
    //Login Page
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })

    it('should login with problem_user credentials ' , async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePageProblemUser()  
    })

    it('should login error with valid username and invalid password' , async () => {
         await LoginPage.open()
         await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_FALSE)
         await LoginPage.validateErrorInvalidPass()
        
    })

    it('should get login error with empty username and empty password', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_EMPTY, process.env.PASSWORD_EMPTY)
        await LoginPage.validateErrorEmptyUser()
    })
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    //Sort and Filter Page
    it('should get  homepage show all product that have been sorted from highest to lowlest price', async () => {
        await HomePage.open()
        await HomePage.filterHightoLow()
    })

    it('should get  homepage show all product that have been sorted from lowlest to highest price', async () => {
        await HomePage.open()
        await HomePage.filterLowtoHigh()
    })

    it('should get  homepage show all product that have been sorted from Z to A', async () => {
        await HomePage.open()
        await HomePage.filterZtoA()
    })

    it('should get  homepage show all product that have been sorted from A to Z', async () => {
        await HomePage.open()
        await HomePage.filterAtoZ()
    })

    //detail produk
    it('should navigate to detail product "Sauce Labs Backpack" page which shows product names,image,description,price properly', async () => {
        await HomePage.open()
        await HomePage.detailProduk()
        await DetailPage.validateDetailPage()
    })

    it('should navigate to Home Page when user click button back', async () => {
        await DetailPage.validateDetailPage()
        await DetailPage.buttonBack()
        await HomePage.open()
    })

    //add to Cart Page
    it('should product already add to cart, button add to cart change to remove, qty icon cart increases From Home Page', async () => {
        await HomePage.open()
        await AddCartPage.addToCartFromHome()
    })

    it('should product already add to cart, button add to cart change to remove, qty icon cart increases From Detail Page', async () => {
        await DetailPage.validateDetailPage()
        await AddCartPage.addToCartFromDetail()
    })

    //cart page
    it('should navigate to cart page and show all product that have been added before ', async () => {
        await HomePage.validateHomePage()
        await CartPage.cartPageFromHome()
    })

    it('should navigate to cart page and show all product that have been added before ', async () => {
        await HomePage.validateHomePage()
        await DetailPage.validateDetailPage()
        await CartPage.cartPageFromHome()
    })

    it('should remove product that have been added before ', async () => {
        await CartPage.removecartPage()
    })

    it('should navigate to homepage and user can add more product', async () => {
        await CartPage.addProductToCart()
        await AddCartPage.addMoreToCartFromHome()
        await CartPage.cartPageFromHome()
    })

    //checkoutpage
    it('should navigate to personal information checkout page', async () => {
        await CheckoutPage.checkoutStepOne()
        await CheckoutPage.open()
    })

    it('should fill personal information credentials', async () => {
        //await CheckoutPage.open()
        await CheckoutPage.fillDataInformation(process.env.FIRST_NAME, process.env.LAST_NAME,process.env.POSTAL_CODE)
    })

})