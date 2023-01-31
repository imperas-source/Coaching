import ChallangePage from '../pageobjects/challange.page.js'
import ChallangeActions from '../actions/actions.js'
const data = require('../data/data.js')

describe('Test Automation Challanges', () => {  
    
    it('should solve part#1', async () => {
        await ChallangeActions.openSixthChallange()

        //6-1 and 2 part:   Verify Error Message and Country when selected country is NOT Lithuania!
        //                  Verify Error Message with at least 3 countries
        await ChallangeActions.verifyNonLithuanianCountries()
    });

    it('should solve part#3', async () => {
        await ChallangeActions.openSixthChallange()

        //6-3 part: To solve a challenge select the country Lithuania from drop down list and VERIFY it!
        await ChallangePage.countriesDropDown.selectByAttribute("value", "Lithuania")
        await expect(ChallangePage.countriesDropDown).toHaveTextContaining('Lithuania')
        await ChallangePage.buttonVerify.click() 
        await expect(ChallangePage.successPage).toHaveTextContaining('Wohoo!')
    });
})


