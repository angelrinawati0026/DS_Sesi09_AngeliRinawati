const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Lab' , () => {
    it('should login with standard_user credentials ' , async () => {
        //akan dibuatkkan skenario positif
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })
})

describe('Swag Lab' , () => {
    it('should login error with locked_out-user credentials ' , async () => {
        //akan dibuatkkan skenario negatif
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })
})

describe('Swag Lab' , () => {
    it('should login error with performance_glitch_user credentials ' , async () => {
        //akan dibuatkkan skenario negatif
        
    })
})

describe('Swag Lab' , () => {
    it('should login error with visual_user credentials ' , async () => {
        //akan dibuatkkan skenario negatif
        
    })
})