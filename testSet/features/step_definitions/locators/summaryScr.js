var summaryScr = function() {

    this.clearButtonWhenFull = element.all(by.css('.btn.btn-block.btn-danger'));
    this.item2Price = element.all(by.binding('product.price ')).get(0);
    this.arrowUp = element.all(by.css('span.ui-icon.ui-icon-triangle-1-n'));
    this.totalCartItem1 = element.all(by.css('tr[ng-repeat="item in cart.items | orderBy:\'name\'"]'));
    this.deleteItemButtonCrossAll = element.all(by.css('.icon-remove'));
    this.totalPrice = element(by.binding('cart.getTotalPrice()'));
    this.totalQuality = element.all(by.css('.tdCenter')).last();
    this.priceProduct = element.all(by.css('tr[ng-repeat="item in cart.items | orderBy:\\\'name\\\'"]'))
    this.emptyCardMessage = element(by.css('td[colspan="4"]'));




};
module.exports = new summaryScr();
