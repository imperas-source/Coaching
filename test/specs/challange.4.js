import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openFourthChallange()

        //4-1 part: Verify that 1, 3, 5 checkboxes are checked by default!
        await expect(ChallangePage.checkboxOne).toBeChecked()
        await expect(ChallangePage.checkboxThree).toBeChecked()
        await expect(ChallangePage.checkboxFive).toBeChecked()
    });

    it('should solve part#2', async () => {
        await ChallangeActions.openFourthChallange()

        //4-2 part: Verify that 2, 4 checkboxes are NOT checked by default!
        await expect(ChallangePage.checkboxTwo).not.toBeChecked()
        await expect(ChallangePage.checkboxFour).not.toBeChecked()
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openFourthChallange()

        //4-3 part: Verify Error Message when NO checkbox is selected! 
        await ChallangePage.checkboxOne.click()
        await ChallangePage.checkboxThree.click()
        await ChallangePage.checkboxFive.click()
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('No checkbox is selected!')
    });

    it('should solve part#4', async () => {
        await ChallangeActions.openFourthChallange()

        //4-4 part: Verify Error Message when checkbox combination is not correct!
        await ChallangePage.checkboxFive.click()
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.alertText).toHaveTextContaining('The combination of selected profession(s) is NOT correct!')
    });

    it('should solve part#5', async () => {
        await ChallangeActions.openFourthChallange()

        //4-5 part:  To solve a challenge select only checkboxes related to software testing roles + Confirm
        await ChallangePage.checkboxOne.click()
        await ChallangePage.checkboxTwo.click()
        await ChallangePage.checkboxFour.click()
        await ChallangePage.checkboxFive.click()
        await ChallangePage.buttonVerify.click()
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


