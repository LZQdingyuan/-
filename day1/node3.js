// 回调函数

function callFunction(fun, name){
    fun(name);
}

// function sayHi(){
//     console.log('Hi');
// }

// sayHi();

var sayByr = (name) => {
    console.log(name + ' Bye')
}

callFunction(sayByr, '黄慧');