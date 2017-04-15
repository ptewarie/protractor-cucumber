var myStepDefinitionsWrapper = function () {

    //Dependencies
    var q = require('q');
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    var expect = chai.expect;
    var log4js = require('log4js');
    var logger = log4js.getLogger();


    //PageObjects
    landingPage = require('./locators/landingScr.js');
    fruitDetailsPage = require('./locators/fruitDetailsScr.js');
    summaryPage = require('./locators/summaryScr.js');



    this.Given(/^I go to the fruit site$/, function () {
        return browser.driver.get(landingPage.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (fruit) {
        // browser.sleep(1000);
        landingPage.productNameList.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === fruit;
            });
        }).click();
    });

    this.When(/^I click the add button in fruit details screen$/, function () {
        // browser.sleep(1000);
        return fruitDetailsPage.addToCardButton.click();
    });

    this.When(/^the total items should be "([^"]*)" and the total price "([^"]*)"$/, function (arg1, arg2) {
        // browser.sleep(1000);

        if (arg1 < 1) {
            return expect(landingPage.shoppingBasket.getText()).to.eventually.equal(arg1 + ' items,' + ' $' + arg2);
        } else {
            return expect(landingPage.shoppingBasket.getText()).to.eventually.equal(arg1 + ' items,' + ' $' + arg2 + '\nthis item is in the cart');
        }

    });

    this.Then(/^I click on the clear button$/, function () {
        // browser.sleep(1000);
        return summaryPage.clearButtonWhenFull.click();

    });

    this.When(/^I search for "([^"]*)"$/, function (fruit) {
        // browser.sleep(1000);
        landingPage.searchBar.clear();
        return landingPage.searchBar.sendKeys(fruit);
    });

    this.Then(/^the correct amount of the "([^"]*)" should show$/, function (arg1) {
        // browser.sleep(1000);

        if ((arg1 === 'Apple') | (arg1 === 'Grape') | (arg1 === 'Orange')) {
            // console.log('there are several items shown');
            return expect(landingPage.productNameList.count()).to.be.eventually.greaterThan(1);
        } else {
            // console.log('there is only one item shown');
            return expect(landingPage.productNameList.count()).to.be.eventually.lessThan(2);
        }
    });

    this.Then(/^the price should be "([^"]*)" Dollar$/, function (item2priceStr) {
        // browser.sleep(2000);

        return expect(summaryPage.item2Price.getText()).to.eventually.equal("$" + item2priceStr);
    });

    this.When(/^add item to chart$/, function () {
        // browser.sleep(2000);

        return landingPage.addCartFirstItem.click();
    });

    this.When(/^I go to summary page$/, function () {
        return landingPage.shoppingCartButton.click();

    });

    this.When(/^I click on the increase arrow of product "([^"]*)"$/, function (arg1) {
        // browser.sleep(2000);
        return summaryPage.arrowUp.get(arg1 - 1).click();

    });

    this.Then(/^the total amount of item "([^"]*)" "([^"]*)" should be "([^"]*)"$/, function (arg1, arg2, arg3) {
        // browser.sleep(2000);

        return expect(summaryPage.totalCartItem1.get(arg1 - 1).getText()).to.eventually.equal(arg2 + "\n" + "$" + arg3)
    });

    this.When(/^the amount of calories should be "([^"]*)"$/, function (calories) {
        // browser.sleep(2000);

        return expect(fruitDetailsPage.calories.getText()).to.eventually.equal(calories);
    });


    this.When(/^the amount of "([^"]*)" should be "([^"]*)"$/, function (arg1, arg2) {
        // browser.sleep(2000);

        return expect(fruitDetailsPage.nutrition.getText()).to.eventually.contain(arg1 + " " + arg2);
    });

    this.Then(/^I order "([^"]*)" of "([^"]*)" at "([^"]*)"$/, function (quantity, fruit, unitPrice) {
        // browser.sleep(2000);

        summaryPage.priceProduct.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === fruit + '\n' + '$' + unitPrice;
            });
        }).first().element(by.css('input[role="spinner"]')).clear();


        summaryPage.priceProduct.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === fruit + '\n' + '$0.00';
            });
        }).first().element(by.css('input[role="spinner"]')).sendKeys(quantity);

    });

    this.Then(/^total price and quantity should equal the sum "([^"]*)" x "([^"]*)" and "([^"]*)" x "([^"]*)"$/, function (unitPrice, quantity, unitPrice2, quantity2) {
        // browser.sleep(2000);

        return q.all([
            expect(summaryPage.totalPrice.getText()).to.eventually.equal("$" + (unitPrice * quantity + unitPrice2 * quantity2).toFixed(2)),
            expect(summaryPage.totalQuality.getText()).to.eventually.contain(+quantity2 + +quantity)
        ]);
    });


    this.When(/^I add "([^"]*)" to the cart$/, function (max, callback) {

        for (var x = 0; x < max; x++) {
            landingPage.addCartAll.get(x).click();

        }
        callback();
    });

    this.Then(/^the total "([^"]*)" should be "([^"]*)"$/, function (arg1, arg2, callback) {

        if (arg1 === "Price") {
            expect(summaryPage.totalPrice.getText()).to.eventually.equal('$' + arg2 + "\.00");

        } else {
            expect(summaryPage.totalPrice.getText()).to.eventually.contain(arg2);
        }
        callback();
    });

    this.When(/^I delete "([^"]*)" items using the delete button$/, function (max, callback) {
        for (var x = 0; x < max; x++) {

            summaryPage.deleteItemButtonCrossAll.last().click();

        }
        callback();
    });

    this.When(/^Message will show "([^"]*)"$/, function (message) {
        return expect(summaryPage.emptyCardMessage.getText()).to.eventually.equal(message);

    });
};
module.exports = myStepDefinitionsWrapper;