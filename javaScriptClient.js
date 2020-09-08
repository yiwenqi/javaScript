// 1.1.客户端javaScript
//     window对象的onload处理程序是最重要的事件处理程序之一。当显示在窗口中的文档内容稳定并可以操作时会触发它。
//     JavaScript代码通常封装在onload事件处理程序之中。
//     eg: //显示内容的简单客户端javaScript
//         <!DOCTYPE  html>    
//         <html>
//         <heda>
//         <style>
//            {/* 本页的css样式 */}
//             .reveal * {display: none;}
//             {/* reveal的内容都不显示 */}
//             .reveal *.handle {display:block;}
//             {/* 除了handle元素 */}
//         </style>
//         <script>
//             {/* 所有逻辑都在onload事件之后启动 */}
//             window.onload = function () {
//                 //找到所有reveal容器元素
//                 var elements = document.getElementByClassName("reveal");
//                 for(var i = 0;i < elements.length; i++){
//                     var elt = elements[i];
//                     //找到容器中的handle元素
//                     var title = elt.getElementByClassName("handle")[0];
//                     //当点击这个元素的时候，呈现剩下的内容
//                     addRevealHandler(title,elt);
//                 }
//                 function addRevealHandler(title,elt){
//                     DataTransferItemList.onclick = function(){
//                         if (et.className == "reveal")
//                             elt.className = "revealed";
//                         else if (elt.className == "revealed")
//                             elt.className = "reveal";
//                     }
//                 }


//             }
            
//         </script>
//         </heda>
//         <body>
//             <div class="reveal">
//                 <h1 class="handle">Click Here to Reveal Hidden Text</h1>
//                 <p>this paragraph is hidden. it appears when you click on the title</p>
//             </div>
//         </body>
//         </html>

// 1.2.在html里嵌入javaScript
//             在html文档里嵌入客户端代码有四种方法:
//                 ·   内联，放置在<script>和</script>标签对之间。

//                 ·   放置在外部文件中，使用script中的src指定文件。

//                 ·   放置在html的事件处理机构中，如window.onload或者onmouseover这样的html属性中

//                 ·   放置在一个URL中，这个URL使用特殊的"JavaScript:"协议

//                 tip:下面两种方式在现代javaScript中很少使用，一般按照内容和行为分开原则，将javaScript代码和html代码分开

//             1.2.2.外部文件中的脚本
//                 使用src属性时会忽略<script>和</script>标签之间的内容。如果有需要可以加上代码的补充说明文档或版权信息。但是要注意在标签之间
//                 如果出现任何非空格或javaScript注释的文本，html5校验器会报错！

//                 使用src属性方式的优点:
//                     ·   可以把大块的javaScript代码从html中删除，这有助于保持内容和行为的分离，从而简化代码，保持代码的整洁

//                     ·   如果有多个web页面共同使用相同的javaScript文件，我们可以让其管理一个javascript而不用在每个html页面中都进行修改

//                     ·   如果一个javascript代码被共同使用，我们只需要进行第一次页面的下载，后面页面的引用可以在缓存中检索。

//                     ·   由于src属性的值可以是任意的url，因此来自一个web服务器的javaScript程序或web页面可以使用另一个web服务器输出的代码。
//                         大多数互联网广告依赖与此。

//                     ·   从其它网站载入脚本的能力，可以让我们更好的利用缓存。

//                     tip:但是要注意从文档服务器之外的服务器里载入脚本有重要的安全隐患。

//             1.2.3.脚本类型
//                 javaScript是web的原始脚本语言，而在默认情况下，假定<script>元素包含或引用JavaScript代码。
//                 如果使用不标准的脚本语言，如Mircosoft的VBScript(只有IE支持)，就必须要用type指定脚本的MIME类型:

//                     <script type="text/vbscript">
//                         这里是代码
//                     </script>

//                 tip:type的默认值是"text/javascript",在老的浏览器上会用language代替type。
//                     当web浏览器遇到<script>,并且这个<script>包含其值不被浏览器识别的type属性时，他会解析这个元素，但不会显示和执行里面的内容。
//                     这意味着<script>里面可以嵌入任意的文本数据到文档，只需要type属性为数据声明一个不可执行的类型。

//             1.2.5.URL中的JavaScript
//                 在url后面跟一个javascript:协议限定符，是另一种嵌入JavaScript代码到客户端的方式。
//                     eg: //超链接里面的JavaScript URL可以是这样

//                         <a href="javascript:alert(new Date().toLocaleTimeString());">
//                             检查时间，而不必覆盖整个文档
//                         </a>

//                     当浏览器载入这种类型的URL时，它会执行JavaScript代码，但是由于没有返回值（alert()方法返回undefine）作为新文档的显示内容，类似Firefox的浏览器
//                     不会替换当前显示的文档。（上面的链接通过button的onclick处理程序会更好，因为a元素通常应该保留为超链接，用来载入新文档）
//                     如果要确保javascript:URL不会覆盖当前文档，可以使用void操作符来进行强制函数调用或给赋值表达式赋予undefine值;

//                         eg: //打开一个新的窗口
//                             <a href="javascript:void window.open('about:blank')">打开一个窗口</a>

//                             tip:如果这里没有void操作符，则当前文档会被覆盖为包含该字符串的文档
//                                     [object window]

//             1.3.1.同步，异步和延迟的脚本
//                 javascript第一次添加到web浏览器时，还没有api可以用来进行遍历和操作文档的结构和内容。
//                 当文档还在载入时，JavaScript影响文档的唯一方法是快速生成内容，它使用document.write()方法
//                 完成上述任务。

//                     eg: //载入时生成的文档内容
//                         <h1>table of factorials</h1>
//                         <script>
//                             function factorials(n){
//                                 if(n<=1) return n;
//                                 else retuen n*factorials(n-1);
//                             }

//                             document.write("<table>");
//                             document.write("<tr><th>n</th><th>n!</th></tr>")
//                             for(var i = 1; i<=10 i++){
//                                 document.write("<tr><td>" + i +"</td><td>"+factorials(i)+"</td></tr>");
//                             }
//                             document.write("</table>");
//                             document.write("Generated at " + new Date());
//                         </script>

//                 当HTML解析器遇到<script>元素时，它默认必须先执行脚本，然后再恢复文档的解析和渲染。这对于内联脚本没有问题，但如果脚本源代码是一个由src属性
//                 指定的外部文件，这意味着脚本后面的文档部分在下载和执行脚本之前，都不会出现浏览器中。
                
//                 脚本的执行只会在默认情况下是同步和阻塞的。<script></script>标签中可以有defer和async属性，这可以改变脚本的执行方式。html5说这些属性只能和src属性
//                 联合使用时才有效。
//                                 eg:
//                                     <script defer src = "deffer.js"></script>
//                                     <script async src = "async.js"></script>

//                         tip:defer和async属性都在告诉浏览器链接进来的脚本不会有doucment.write()，也不会生成文档内容，因此浏览器可以在下载脚本时继续解析和渲染文档。
//                             defer使得浏览器延迟脚本的执行，而async属性使得浏览器快速执行脚本，使得在下载脚本的时候能够继续解析和渲染文档。
//                             如果<script>标签同时有这两个值，那么浏览器会执行async忽略defer。
//                             注意延迟脚本会按照他们在文档中的出现顺序执行，而异步脚本在他们加载后执行，这意味着他可能会时无序的执行

        // 1.3.2.事件驱动的javaScript
        //     setTimeout()和setInterval()函数（这些都是windows对象的方法，因此他们都是客户端的JavaScript的全局对象）会在一段事件之后触发指定函数的调用。
        //     传递给setTimeout()的函数和真实事件处理程序的注册不同，他们通常叫做"回调函数",而不是处理程序，但是他们和处理程序是一样的，也是异步。


        //     eg: //onLoad()，当文档加载完成后调用一个函数
        //     function onLoad(f){
        //         if(onLoad.load)                     //如果文档载入完成
        //             windows.setTimeout(f,0);        //则将f放入异步队列，并尽快执行
        //         else if(window.addEventListener)    //注册事件的标准方法
        //             windows.addEventListener("load",f,false);
        //         else if(window.attachEvent)         //IE以及更早的IE版本浏览器注册事件的方法
        //             window.attachEvent("load",f);
        //     }
        //     //给onLoad设置一个标签，用来表示文档是否加载完成
        //     onLoad.load = false;
        //     //注册一个函数当文档载入完成时设置这个标签
        //     onLoad(function (){onLoad.load = true;});
        
        // 1.3.4.客户端javaScript时间线
        //     1.web浏览器创建document对象，并且开始解析web页面，解析HTML元素和它们的文本内容后添加ELement对象和Text节点到文档中。
        //     在这个阶段document的readystate属性值是"loading"

        //     2.当html解析器遇到没有async和defer属性的<script>元素时，它把这些元素添加到文档中，然后执行行内和外部脚本。这些脚本会同步执行，并且在
        //     脚本下载和执行时解释器也会暂停。这样的脚本可以使用document.write()来把文本插入到输入流中，当解释器恢复时这些文本会成为解释器的一部分。

        //     3.当解释器遇到有async和defer的<script>元素时，它开始下载脚本文本，并继续解析文本，脚本会在它下载好后快速的执行，但解析器不会停下来。
        //     异步脚本禁止使用documen.write()方法。

        //     4.当文档解析完成后，document.readystate 属性变为"interactive"。

        //     5.所有defer属性的脚本，他会按照文档里的出现顺序执行。而异步脚本可能也会在这个时候执行。延迟脚本能访问完整的文档树，禁止使用document.write()方法

        //     6.浏览器在Document对象上触发DOMContentLoaded事件。这标志着程序执行从同步脚本执行阶段转换到异步脚本驱动阶段。但要注意这里可能任然有异步脚本没有执行
        //     完成。

        //     7.这时文档已经全部解析完成，但浏览器可能任然在等待资源，如加载图片等。并且所有的异步脚本完成执行和载入，Document.readystate的属性变为 "complet",
        //     Web浏览器触发window.load()事件

        //     8.从此刻开始，调用异步事件，以异步响应用户输入事件，网络事件，计时器过期等。






                
                
                
                


