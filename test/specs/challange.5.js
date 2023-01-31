import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openFifthChallange()

        //5-1 part: Verify Error Message when NO option is selected!
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('No option is selected!')
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openFifthChallange()
        
        //await ChallangeActions.verifyRole()
       //5-2 part: Select each role + Confirm & verify text in message "[Role] is selected!"
      
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openFifthChallange()

        //5-3 part: To solve a challenge Confirm all professions at least once!
        await ChallangeActions.traverseRoles()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


