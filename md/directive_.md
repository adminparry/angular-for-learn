# 指令
AngularJS 通过被称为 指令 的新属性来扩展 HTML
AngularJS 通过内置的指令来为应用添加功能
AngularJS 有自己内置的指令和用户可以自定义指令

| Tables   |      Are      | 
|----------|:-------------:|
| ng-app   |  定义应用程序的根元素。 | 
| ng-bind  |    绑定 HTML 元素到应用程序数据   | 
| ng-bind-html | 绑定 HTML 元素的 innerHTML 到应用程序数据，并移除 HTML 字符串中危险字符 | 
| ng-bind-template |  规定要使用模板替换的文本内容 |  
| ng-blur |  规定 blur 事件的行为 |  
| ng-change |  规定在内容改变时要执行的表达式 |  
| ng-checked |  规定元素是否被选中 |  
| ng-class |  指定 HTML 元素使用的 CSS 类 |  
| ng-class-even |  类似 ng-class，但只在偶数行起作用 |  
| ng-class-odd |  类似 ng-class，但只在奇数行起作用 |  
| ng-click |  定义元素被点击时的行为 |  
| ng-cloak |  在应用正要加载时防止其闪烁 |  
| ng-controller |  定义应用的控制器对象 |  
| ng-copy |  规定拷贝事件的行为 |  
| ng-csp |  修改内容的安全策略 |  
| ng-cut |  规定剪切事件的行为 |  
| ng-dblclick |  规定双击事件的行为 |  
| ng-disabled |  规定一个元素是否被禁用 |  
| ng-focus |  规定聚焦事件的行为 |  
| ng-form |  指定 HTML 表单继承控制器表单 |  
| ng-hide |  隐藏或显示 HTML 元素 |  
| ng-href |  为 the &lt;a&gt; 元素指定链接 |  
| ng-if |  如果条件为 false 移除 HTML 元素 |  
| ng-include |  在应用中包含 HTML 文件 |  
| ng-init |  定义应用的初始化值 |  
| ng-jq |  定义应用必须使用到的库，如：jQuery |  
| ng-keydown |  规定按下按键事件的行为 |  
| ng-keypress |  规定按下按键事件的行为 |  
| ng-keyup |  规定松开按键事件的行为 |  
| ng-list |  将文本转换为列表 (数组) |  
| ng-model |  绑定 HTML 控制器的值到应用数据 |  
| ng-model-options |  规定如何更新模型 |  
| ng-mousedown |  规定按下鼠标按键时的行为 |  
| ng-mouseenter |  规定鼠标指针穿过元素时的行为 |  
| ng-mouseleave |  规定鼠标指针离开元素时的行为 |  
| ng-mousemove |  规定鼠标指针在指定的元素中移动时的行为 |  
| ng-mouseover |  规定鼠标指针位于元素上方时的行为 |  
| ng-mouseup |  规定当在元素上松开鼠标按钮时的行为 |  
| ng-non-bindable |  规定元素或子元素不能绑定数据 |  
| ng-open |  指定元素的 open 属性 |  
| ng-options |  在 &lt;select&gt; 列表中指定 &lt;options&gt; |  
| ng-paste |  规定粘贴事件的行为 |  
| ng-pluralize |  根据本地化规则显示信息 |  
| ng-readonly |  指定元素的 readonly 属性 |  
| ng-repeat |  定义集合中每项数据的模板 |  
| ng-selected |  指定元素的 selected 属性 |  
| ng-show |  显示或隐藏 HTML 元素 |  
| ng-src |  	指定 &lt;img&gt; 元素的 src 属性 |  
| ng-srcset |  指定 &lt;img&gt; 元素的 srcset 属性 |  
| ng-submit |  规定 onsubmit 事件发生时执行的表达式 |  
| ng-switch |  规定显示或隐藏子元素的条件 |  
| ng-transclude |  规定填充的目标位置 |  
| ng-value |  规定 input 元素的值 |  

## 自定义指令

这里及其需要说一下命名问题
第一点如果是注释指令那么一定是replace为true 因为注释不是标签不存在包含关系
第二点指令不存在大写都是通过大写字母转-

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
</head>
<body ng-app="myApp">

<!-- directive: directive-byMySelf -->
<directive-by-my-self></directive-by-my-self>
<div class="directive-by-my-self"></div>
<div directive-by-my-self></div>

<script>
var app = angular.module("myApp", []);
app.directive("directiveByMySelf", function() {
    return {
    	restrict:"MACE",
    	replace:true,
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

</body>
</html>
```
restrict 值可以是以下几种:
E 作为元素名使用
A 作为属性使用
C 作为类名使用
M 作为注释使用
restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。
### 指令的属性
1.restrict
restrict: 'AE',// 指令类型  E：element A：attribute M：comment C: class

2.template和templateUrl
模板字符串和模板字符串所在的路径

3.replace和transclude
是否使用模板替换当前元素
是否使用ng-transculde来包含html中指令包含的原有的内容，接收两个参数true/false

``` html
var app = angular.module("app", [])
    .directive("hello", function () {
        var option = {
            restrict: "AECM",
            template: "<h3>Hello, Directive</h3><span ng-transclude></span>",
            transculde: true  //这里transculde为true，所以原来的内容会被放在有ng-transclude属性的标签内
        };
        return option;
    })
```
4.指令中的scope
@ 绑定一个局部 scope 属性到当前 dom 节点的属性值。结果总是一个字符串，因为 dom 属性是字符串。
& 提供一种方式执行一个表达式在父 scope 的上下文中。如果没有指定 attr 名称，则属性名称为相同的本地名称。
= 通过 directive 的 attr 属性的值在局部 scope 的属性和父 scope 属性名之间建立双向绑定

5.controller、require以及link

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
</head>
<body ng-app="myApp">

<!-- directive: directive-byMySelf -->
<directive-by-my-self></directive-by-my-self>
<div class="directive-by-my-self"></div>
<div directive-by-my-self></div>

<script>
var app = angular.module("myApp", []);
app.directive("directiveByMySelf", function() {
    return {
    	restrict:"MACE",
    	replace:true,
        template : "<h1>自定义指令!</h1>"
    };
});
</script>

</body>
</html>
```
## 内置指令