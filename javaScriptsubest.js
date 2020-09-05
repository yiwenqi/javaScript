// //javaScript 的子集
// 1.1.1.Javascript的精华部分:
//     子集的目标是简化这门语言，规避掉语言中的怪癖，缺陷部分，最终实现
//     编程更加轻松，程序更加健壮。

// 1.1.2.子集的安全性:
//     为了让JavaScript代码静态地通过安全检查，必须移除一些javascript特性

//     ·   evel()和function()构造函数在任何安全子集里都是禁止使用的，因为他们可以执行任意代码，
//         而且javaScript无法对这些代码做静态分析。
    
//     ·   禁止使用this关键字，因为函数(在非严格模式中)可以通过this访问全局对象。
//         而沙箱系统的一个重要目的就是阻止对全局对象的访问。
    
//     ·   禁止使用with关键字，因为with关键字会增加静态代码的检查难度
    
//     ·   禁止使用某些全局变量。在客户端javaScript中，浏览器窗口对象可以当作全局变量，同样
//         除了当作普通的全局变量外，还能通过他们去操作浏览器和DOM元素，因此不能有对windows对象的引用，同样
//         客户端document也定义了操作页面的方法，而将对document的控制权交给一个不信任的代码会有很多隐患。
//         安全子集提供了两种方法去处理类似的document，第一种:完全禁用它们，并自定义api用以对分配给他的web页面
//         做有限制的访问。第二种：在沙箱代码所运行的"容器"中定义一个只对外提供安全标准的DOM API的"外观面板"或"documen 代理对象"

//     ·   禁止使用某些属性和方法，以免在沙箱中代码拥有过多的权限。

//     ·   安全子集通常禁止使用方括号，除非方括号内是一个数字或字符串直接量，因为我们无法对方括号进行静态分析。

//     这里有一些比较重要的安全子集已经实现了：
//                 ADsafe 第一个正式提出安全子集。ADsafe 只包含静态检查，它使用JSLint 作为检查器。

//                 dojox.secure

//                 Caja 

//                 FBJS

//                 Microsaft Web Sandbox 

// 1.2.常量，和局部变量
//         在javaScript1.5及后续版本中，我们使用const关键字定义常量，常量可以当作不可
//         重复赋值的变量。const关键字和var的行为相似，常量赋值会被提前到函数顶部。
//         javaScript针对JavaScript没有块级作用域，增加了let关键字，关键字const一直都是
//         JavaScript的保留字，而let并不是保留字，在JavaScript1.7之后才能使用，所以需要手动添加版本号。
    // let 有四种使用方式
    //     1.可以作为声明变量使用，和var一样。
    //     2.for或for/in循环中，代替var使用。
    //     3.在语句块中，定义一个新变量并显示的指定它的作用域。
    //     4.定义一个在表达式内部作用域中的变量，这个变量只在表达式内可用。

    // 使用let最简单的方式就是批量，替换程序中的var。通过var声明的变量在函数中都是可用的，
    // 而通过let声明的变量则只属于就近的花括号括起来的语句块（当然包括它嵌套的语句块）。

    //     eg:
    //         let x = 1, y = 2;
    //         let (x=x+1,y=x+2){
    //             console.log(x+y);   //输出5
    //         };
    //         console.log(x+y);   //输出3

    // 1.3.解构赋值
    //     定义:等号右侧是一个数组或对象（一个结构化的值），指定左侧一个或多个变量的语法和右侧的数组和对象直接量的语法保持格式一致。
            
    //         eg:
    //             let [x,y] = [1,2];      //x=1,y=2
    //             [x,y] = [x+1,y+1];      //x=x+1，y=y+1
    //             [x,y] = [y,x];          //交换两个变量的值
    //             console.log([x,y]);
    //     结构赋值右侧不必和左侧一一对应，多余的变量赋值为undefined，而右侧多余的值会自动忽略。左侧变量可以用连续的逗号来跳过右侧的值
    //         eg:
    //             let [x,y] = [1];  //x=1
    //             [,,x,y] = [1,2,3,4];   //x=3 ,y=4
    //             [x,y] = [1,2,3]   //x=1,y=2
    //         整个解构运算返回右侧整个数据结构
    //         all = [x,y] = [1,2,3,4]   //all = [1,2,3,4] , x=1 , y=2

    //         let [one ,[twoA ,towB ]] = [1,[2,2.5],3];  //twoA = 2 ,twoB = 2.5 one = 1

    //         就像嵌套数组可以用于解构赋值一样，嵌套对象也可以用于解构赋值，实际上，两种语法可以合在一起使用，可以用来描述任意的数据的数据构。

    //             //一个嵌套的数据结构:一个对象中包含数组，数组中包含对象
    //             let data = {
    //                 name:"destructuring assignment",
    //                 type:"extension",
    //                 impl:[{engine:"spidermonkey",version:1.7},
    //                         {engine:"rhion",version:1.6}]
    //             }

    //             //使用结构赋值从数据结构中提取四个值
    //             let({name:feature,impl:[{engine:impl1,version:v1},{engine:impl2,version:v2}]} = data)
    //             {
    //                 console.log(feature);     //输出data中的数据结构  --destructuring assignment
    //                 console.log(impl1);        //spidermonkey
    //                 console.log(impl2);         //rhion
    //                 console.log(v1);            //1.7
    //                 console.log(v2);            //1.6
    //             }


    // 1.4.1.迭代
    //         for/eache 循环和for/in循环非常相似。但for/each并不是遍历对象的属性，而是遍历属性的值：
    //             let o = {one: 1,two: 2,three: 3};
    //             for(let p in o) console.log(p); //输出 'one','two','three'
    //             for each (let v in o) console.log(v) //输出 1 ，2 ，3

    //         for/in在循环遍历数组时返回的是索引
    //         for/each循环返回的是数组的值


    //         1.4.2.迭代器
    //             定义:迭代器是一个对象，这个对象允许对他的值集合进行遍历，并保持任何必要的状态以便追踪到当前遍历的”位置“

    //             迭代器必须包含next（）方法，每一次调用next()都返回集合的下一个值。

    //             eg:
    //                 function count(start){
    //                     let nextValue = Math.round(start); //返回一个私有状态
    //                     return {
    //                         next:function(){return nextValue++;}  //返回迭代器对象
    //                     };
    //                 }

    //                 let serialNumberGenerator = count(1000);
    //                 let sn1 = serialNumberGenerator.next();   //1000
    //                 let sn2 = serialNumberGenerator.next();   //1001
                
    //             当迭代器用于有限的集合时，当遍历完所有的值并且没有多余的值可以进行迭代时，再调用next()会抛出StopIteration。 
    //             它的值是一个普通的对象，本身是没有属性的，只是为了终结迭代 的目的而保留的一个对象。

    //             eg：对一个整数进行迭代，它可以迭代某个范围内的整数
                    
    //                 function rangIter(first,last){
    //                     let nextValue = Math.ceil(first);
    //                     return {
    //                         next:function(){
    //                             if(nextValue>last) throw StopIternation;
    //                             return nextValue++;
    //                         }
    //                     };
    //                 }

    //                 //使用这个范围迭代器进行一次糟糕的迭代
    //                 let r = rangIter(1,5);
    //                 while(true){
    //                     try{
    //                         console.log(r.next());
    //                     }
    //                     catch(e){
    //                         if(e == StopIternation) break;  //出现StopIteration,迭代完成
    //                         else throw e ;
    //                     }
    //                 }
    //                 //循环的使用迭代对象，并显示的处理StopIteration是一种糟糕的方式
    //                 //因此通常我们不使用迭代对象，而使用可迭代对象。
    //                 //可迭代对象表示一组可迭代对象的值。可迭代对象必须定义一个_Iterator_()的方法，用以返回这个集合的迭代器对象

    //                 //javaScript 1.7对for/in循环功能进行扩展，可以用它来遍历可迭代对象。如果关键字in的右侧是一个可迭代对象，
    //                 //则for/in会自动调用_Iterator_（）方法获得一个迭代器对象。 for/in循环会自动处理StopIteration异常。

    //                 eg: 定义一个range()函数，这个函数返回一个可迭代对象，用以表示这个范围的整数。

    //                     function range(min,max){
    //                         return{   //返回一个表示这个范围的对象  
    //                             get min() { return min;},
    //                             get max() { return max;},
    //                             include(){
    //                                 //判断x是否是在这个范围内
    //                                 return x<=max&&x>=min;
    //                             },
    //                             toString(){
    //                                 return "["+min+","+max+"]"
    //                             },
    //                             _iterator_:function(){
    //                                 let val = Math.ceil(min);
    //                                 return{
    //                                     next:function(){
    //                                         if(val>max) 
    //                                             throw StopIternation;
    //                                         return val++;
    //                                     }
    //                                 }
    //                             }


    //                         }

    //                     }
    //                     //这里我们对这个区间进行迭代
    //                     for (let i in range(1,20)) console.log(i)   //输出1~20之间的数字

    //                     需要注意的是，尽管我们必须写一个_iterator_()的方法并抛出一个异常，但在正常使用的时候我们是不会去手动调用
    //                     _iterator_()方法和处理异常，通常for/in循环会为我们处理这些逻辑！

    //                     如果想要从可迭代对象中显示的获得一个对象，只需要调用Iterator()函数即可（这个函数是javaScript1.7中的全局函数）。
    //                     如果这个函数的参数是一个可迭代对象，则返回这个对象的_iterator_()方法的调用结果，从而保持代码整洁干净。

    //                     然而，引入Iterator()函数还有一个重要的目的，如果传入的对象或者数组没有定义_iterator_()方法则它会返回这个对象可迭代的自定义迭代器！
    //                     由于这个对象是可迭代的迭代器，因此它可以直接用于for/in循环，而不用调用next()方法，这意味着可以将Itertor（）函数和解构赋值一起使用！
    //                     这样可以更加方便的对对象或数组的属性和值进行遍历！

    //                     eg：
    //                         for(let [k,v] in Iterator({a:1,b:2}))
    //                             console.log(k+"="+v)     //输出"a=1"和"b=2"
    //                     Iterator()函数有两个重要的特性，1.它只对自有属性进行遍历而忽略继承属性。2.如果给Iterator()函数传入第二个参数true，返回的迭代器
    //                     只对属性名进行遍历，而忽略属性的值。

    //                     eg:
    //                         o = {x:1,y:2};
    //                         Object.prototype.z=3;   //所有对象都继承了z
    //                         for(p in o){
    //                             console.log(p);  //输出"x","y","z"
    //                         }
    //                         for(p in Iterator(o,true)){
    //                             console.log(p)   //只输出"x"和"y"
    //                         }

































