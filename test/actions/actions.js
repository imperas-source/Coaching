import Page from '../pageobjects/page.js'
import ChallangePage from '../pageobjects/challange.page.js'
const data = require('../data/data.js')

class ChallangeActions extends Page {

getRolesIndexSize () {
  var rolesIndexSize = data.rolesIndex.length;
  return rolesIndexSize;
}

getHamburgerIndexSize () {
  var hamburgerIndexSize = data.hamburgerIndex.length;
  return hamburgerIndexSize;
}

getCountryIndexSize () {
  var countryIndexSize = data.countryIndex.length;
  return countryIndexSize;
}

async login (username, password) {
  await ChallangePage.usernameField.setValue(username)
  await ChallangePage.passwordField.setValue(password)
  await ChallangePage.loginButton.click()
}

async traverseRoles(){
  for (let i = 0; i < this.getRolesIndexSize(); i++)
  {
      await $('#'+data.rolesIndex[i]).click()
      await ChallangePage.buttonVerify.click()
      await expect(ChallangePage.alertText).toHaveTextContaining(data.rolesConfirmationMessages[i])
  }
}

async traverseHamburger(){
  for (let i = 0; i < this.getHamburgerIndexSize(); i++)
  {
      await $('#'+data.hamburgerIndex[i]).click()
      await expect(ChallangePage.alertText).toHaveTextContaining('You have selected other section than VERIFY ME!')
  }  
}

async verifyNonLithuanianCountries(){
  for(let i = 0; i < this.getCountryIndexSize(); i++)
  {
    await ChallangePage.countriesDropDown.selectByAttribute("value", data.countryIndex[i])
    ChallangePage.buttonVerify.click()
    await expect(ChallangePage.alertText).toHaveText('Selected country is '+data.countryIndex[i]+', NOT Lithuania!')
  }
}

async fillInForm(name, lastName, email, mobile, sex, terms){
  await ChallangePage.nameField.setValue(name)
  await ChallangePage.lastName.setValue(lastName)
  await ChallangePage.email.setValue(email)
  await ChallangePage.mobileNumber.setValue(mobile)
  if (sex)
  {
    await ChallangePage.termsCheckbox.click()
  }
  if (terms)
  {
    await ChallangePage.sexFemale.click()
  }
  await ChallangePage.submitButton.click()
}

openFirstChallange () {
  return super.open('text-box.html');
}

openSecondChallange () {
  return super.open('input-number.html');
}

openThirdChallange () {
  return super.open('button.html');
}

openFourthChallange () {
  return super.open('check-box.html');
}

openFifthChallange () {
  return super.open('radio-button.html');
}

openSixthChallange () {
  return super.open('drop-down.html');
}

openSeventhChallange () {
  return super.open('hamburger-menu.html');
}

openEightChallange () {
  return super.open('slider.html');
}

openNinethChallange () {
  return super.open('login.html');
}

openTenthChallange () {
  return super.open('simple-form.html');
}

}

export default new ChallangeActions();
