import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openSecondChallange()

        //2-1 part: Verify Error Message when nothing is entered!
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('No number is entered!')
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openSecondChallange()

         //2-2 part: Verify Error Message when entered number is more than 100!
        await ChallangePage.numberField.setValue(101)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openSecondChallange()

        //2-3 part: Verify Error Message when entered number is less than 0!
        await ChallangePage.numberField.setValue(-1)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('Entered number is NOT in range of 0-100!')
    });

    it('should solve part#4', async () => {
        await ChallangeActions.openSecondChallange()

         //2-4 part:  To solve a challenge enter the number between 0 - 100 & click VERIFY!
        await ChallangePage.numberField.setValue(55)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


