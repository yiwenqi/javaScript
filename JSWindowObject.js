
// Window对象在JavaScript扮演着及其核心的地位，它是客户端javaScript的全局变量

//     1.1.计时器
//         setInterval()和setTimeout()可以用来做在指定时间后调用或重复调用函数。

//         两者之间的区别
//             ※1.setTimeout(() => {
                
//             }, timeout);表示在指定时间timeout毫秒之后调用一个箭头函数

//             ※2.setInterval(() => {
                
//             }, interval);在interval毫秒之后调用一个箭头函数（循环此操作--每interval毫秒之后调用箭头函数）

//             eg:  //定时器应用函数
//                 function invoke(f,timeout,interval,end){
//                     if(!timeout) timeout=0;
//                     if(arguments.length<=2){  //单次调用
//                         setTimeout(f,timeout);
//                     }
//                     else {                    //多次调用
//                         setTimeout(repate,timeout);
//                         function repate(){
//                             var h = setInterval(f,interval);
//                             if(end) setTimeout(function (){clearInterval(h);},end);
//                         }
//                     }
//                 }

