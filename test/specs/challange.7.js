import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openSeventhChallange()

        //7-1 part:  Verify Error Message for all options except VERIFY ME
        await ChallangePage.hamburgerExpand.click()
        await ChallangeActions.traverseHamburger()
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openSeventhChallange()

        //7-2 part:  To solve a challenge, select the option VERIFY ME
        await ChallangePage.hamburgerExpand.click()
        await ChallangePage.hamburgerMenuVerify.click()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


