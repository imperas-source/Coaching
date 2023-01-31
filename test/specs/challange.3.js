import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openThirdChallange()

        //3-1 part: Verify that Green button is disabled by default!
        await expect(ChallangePage.greenButton).toBeDisabled()
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openThirdChallange()

        //3-2 part: Verify that Red button is disabled by default! 
        await expect(ChallangePage.redButton).toBeDisabled()
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openThirdChallange()

         //3-3 part: To solve a challenge light up Lithuanian flag by clicking on all buttons starting from Yellow! 
         await ChallangePage.yelowButton.click()
         await ChallangePage.greenButton.click()
         await ChallangePage.redButton.click()
         await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


