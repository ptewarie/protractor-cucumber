var fruitDetailsScr = function() {

    this.addToCardButton = element(by.buttonText('add to cart'));
    this.calories =  element.all(by.binding('product.cal')).get(0);
    this.nutrition = element.all(by.css('div[ng-view=""]')).get(0);

};
module.exports = new fruitDetailsScr();
