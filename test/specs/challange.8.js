import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openEightChallange()

        //8-1 part:  Verify Error Message when number is NOT 100. Use boundary values!
        await ChallangePage.slider.dragAndDrop({x: 180, y: 0})
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('You have NOT reached 100 yet, try harder!🤪')
        //await ChallangeActions.fakeMethod();
    })

    it('should solve part#2', async () => {
        await ChallangeActions.openEightChallange()

        //8-2 part: To solve a challenge reach 100 and click Verify button!
        await ChallangePage.slider.dragAndDrop({x: 200, y: 0})
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


