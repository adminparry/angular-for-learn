# 表达式

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app>
<p>我的第一个表达式: {{ 5 + 5 }}</p>
</div>

</body>
</html>
```

## 数字
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="quantity=1;cost=5">
<p>总价: {{ quantity * cost }}</p>
</div>

</body>
</html>

```
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="quantity=1;cost=5">
<p>总价: <span ng-bind="quantity * cost"></span></p>
</div>

</body>
</html>

```
## 字符串

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="firstName='John';lastName='Doe'">

<p>姓名: {{ firstName + " " + lastName }}</p>

</div>

</body>
</html>

```
## 对象
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

<p>姓为 {{ person.lastName }}</p>

</div>

</body>
</html>
```
## 数组
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script> 
</head>
<body>

<div ng-app="" ng-init="points=[1,15,19,2,40]">

<p>第三个值为 {{ points[2] }}</p>

</div>

</body>
</html>

```