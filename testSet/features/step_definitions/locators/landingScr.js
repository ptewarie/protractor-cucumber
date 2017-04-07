var landingScr = function() {


    this.productNameList = element.all(by.binding('product.name'));
    this.searchBar = element.all(by.model('search'));
    this.productNameList = element.all(by.binding('product.name'));
    this.addCartFirstItem =element.all(by.linkText('add to cart')).get(0);
    this.addCartAll =element.all(by.linkText('add to cart'));
    this.shoppingCartButton = element.all(by.css('a[title="go to shopping cart"]')).get(0);
    this.shoppingBasket = element.all(by.css('a[title="go to shopping cart"]')).get(0);

    // Background
    this.url = "http://demo.componentone.com/Wijmo/Angular/ShoppingCart/ShoppingCart/#/store";




};
module.exports = new landingScr();
