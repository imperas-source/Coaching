import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openTenthChallange()

        //10-1 part: Verify Error Message when all required fields are not filled!
        await ChallangeActions.fillInForm('', '', '', 0, '', 0)
        await expect(ChallangePage.alertText).toHaveTextContaining('No value entered in First Name field!')
    })

    it('should solve part#2', async () => {
        await ChallangeActions.openTenthChallange()

        //10-2 part: Verify Error Message when one of the mandatory field is not filled!
        await ChallangeActions.fillInForm(data.firstName, '', '', 0, '', 0)
        await expect(ChallangePage.alertText).toHaveTextContaining('No value entered in Last Name field!')
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openTenthChallange()

        //10-3 part: Verify Error Message when email has wrong format!
        await ChallangeActions.fillInForm(data.firstName, data.lastName, data.wrongValue, 0, data.mobileNumber, 0)
        await expect(ChallangePage.alertText).toHaveTextContaining('Email format is not valid!')
    });

    it('should solve part#4', async () => {
        await ChallangeActions.openTenthChallange()

        //10-4 part: To solve a challenge fill the registration form properly and SUBMIT!
        await ChallangeActions.fillInForm(data.firstName, data.lastName, data.email, data.phone, 1, 1)
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')  
    });
})


