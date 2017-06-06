//相对路径用./ 上层路径用../ 如果不指定则从node_modules中找
var config = require('./config.json')
module.exports = function() {
    var greet = document.createElement('div')
    greet.textContent = config.greetText
    return greet;
}