import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openNinethChallange()

        //9-1 part:  Click Log in when nothing is entered. Verify the message!
        //await ChallangePage.loginButton.click()
        await ChallangeActions.login('', '')
        await expect(ChallangePage.alertText).toHaveTextContaining('You have NOT filled Username field')
    })

    it('should solve part#2', async () => {
        await ChallangeActions.openNinethChallange()

         //9-2 part:  Click Log in when Username is filled & Password is empty. Verify the message! 
        await ChallangeActions.login(data.username, '')
        await expect(ChallangePage.alertText).toHaveTextContaining('Either password is incorrect or not filled!')
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openNinethChallange()

         //9-3 part:  Click Log in when Username is NOT filled & Password is filled. Verify the message!
        await ChallangeActions.login('', data.password)
        await expect(ChallangePage.alertText).toHaveTextContaining('You have NOT filled Username field')
    });

    it('should solve part#4', async () => {
        await ChallangeActions.openNinethChallange()

        //9-4 part:  Click Log in when Username is filled but Password is invalid. Verify the message!
        await ChallangeActions.login(data.username, data.wrongValue)
        await expect(ChallangePage.alertText).toHaveTextContaining('Either password is incorrect or not filled!')
    });

    it('should solve part#5', async () => {
        await ChallangeActions.openNinethChallange()

        //9-5 part:  To solve a challenge click Log in when Username & Password are correctly filled!
        await ChallangeActions.login(data.username, data.password)
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


