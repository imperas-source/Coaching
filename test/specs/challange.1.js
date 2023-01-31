import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openFirstChallange()

        //1-1 part: Verify Error Message when nothing is entered!
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('No value entered in Name field!')
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openFirstChallange()

        //1-2 part: Verify Error Message when less than 2 letters are entered!
        await ChallangePage.nameField.setValue(data.oneChar)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('Name has to have at least 2 letters!')
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openFirstChallange()

        //1-3 part: Verify Error Message when non letters are entered!
        await ChallangePage.nameField.setValue(data.twoDigits)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('Name can only have letters!')
    });

    it('should solve part#4', async () => {
        await ChallangeActions.openFirstChallange()

        //1-4 part: Verify Error Message when more than 30 letters are entered!
        await ChallangePage.nameField.setValue(data.longText)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('Name cannot have more than 30 letters!')
    });

    it('should solve part#5', async () => {
        await ChallangeActions.openFirstChallange()

        //1-5 part: To solve a challenge simply write your name and click VERIFY!
        await ChallangePage.nameField.setValue(data.firstName)
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


