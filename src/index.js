module.exports = function check(str, bracketsConfig) {
  // your solution
  var openingBrackets = []; //['(', '[']
    var closingBrackets = []; // [')', ']']
    var strArr = str.split(''); // ['[', ']', '(', ')']
    var stack = [];
    var expectedOpenBracket;
    
    
    if ((str.length%2)==1){
        return false;
	}
    
    //Считываем открывающиеся и закрывающиеся скобки из bracketsConfig
    for(var i = 0; i < bracketsConfig.length; i++){
        for(var j = 0; j < bracketsConfig[i].length; j++){
            if(bracketsConfig[i][j] == '(' || bracketsConfig[i][j] == '[' || bracketsConfig[i][j] == '{' || bracketsConfig[i][j] == '|'){
                openingBrackets.push(bracketsConfig[i][j]);
            } else {
                closingBrackets.push(bracketsConfig[i][j]);  //реализовать проверку на ||
            }
        }
    }
    

    for (var i = 0; i < strArr.length; i++) {
        //если в openingBrackets есть скобка из str, тогда
        if (openingBrackets.indexOf(strArr[i]) != -1) {
        //записать полученную скобку в stak
            stack.push(strArr[i]);
        //если в closingBrackets есть скобка из str, тогда
        } else if (closingBrackets.indexOf(strArr[i]) != -1) {
        //ожидаемая откр. скобка будет равна элементу в openingBrackets с индексом найденного
        //элемента из closingBrackets
            expectedOpenBracket = openingBrackets[closingBrackets.indexOf(strArr[i])];
        //если последний элемент stack (добавленная открытая скобка) не равен expectedOpenBracket - false
            if (stack.pop() !== expectedOpenBracket) {
                return false;
            } else {
                return true;
            }
        } 
    }

    return (stack.length === 0);
}
