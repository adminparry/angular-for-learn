#过滤器filter
内置过滤器
过滤器可以使用一个管道字符（|）添加到表达式和指令中。

json
序列化对象
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
     {{1.98 + 2.98 | number:1 | json }}
    
    <ul>
        <li ng-repeat="x in now  | orderBy:'country' | limitTo:2" >{{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.search = '222';


        $scope.now = [{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]
    })
</script>
</html>
```
number
保留小数 
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
     {{1.98 + 2.98 | number:1 | json }}
    
    <ul>
        <li ng-repeat="x in now  | orderBy:'country' | limitTo:2" >{{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.search = '222';


        $scope.now = [{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]
    })
</script>
</html>
```

1 格式化字符串为大写 小写
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp">
    {{ 'my life is happy' | uppercase }}
    <div>{{'INSPECTION QUALIFIED' | lowercase }}</div>
    <div></div>
</body>
<script>
    var app = angular.module("myApp", []);
</script>
</html>
```

2 日期和时间
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
    
    <div>{{ now | date:'yyyy-MM-dd HH:mm:ss' }}</div>
    <div>{{ now | date:'medium' }}</div>
    <div>{{ now | date:'short' }}</div>
    <div>{{ now | date:'shortTime' }}</div>
    
    <div>{{ now | date:'fullDate' }}</div>
    <div>{{ now | date:'longDate' }}</div>
    <div>{{ now | date:'mediumDate' }}</div>
    <div>{{ now | date:'mediumTime' }}</div>
    <div>{{ now | date:'shortDate' }}</div>  
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.now = Date.now();
    })
</script>
</html>
```

3 货币
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
    
    {{0.618 | currency : '￥' : 5}}
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.now = Date.now();
    })
</script>
</html>
```

4 从数组项中选择一个子集
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
    <input type="text" ng-model="test">
    <ul>
        <li ng-repeat="x in now | filter:test " >{{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.search = '';


        $scope.now = [{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]
    })
</script>
</html>
```

5 根据某个表达式排列数组
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
    <input type="text" ng-model="test">
    <ul>
        <li ng-repeat="x in now | filter:test | orderBy:'country'" >{{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.search = '';


        $scope.now = [{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]
    })
</script>
</html>
```
6 数量限制
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./angular.min.js"></script>
</head>
<body  ng-app="myApp" ng-controller="life">
    <input type="text" ng-model="search | filter:'w'">
    <ul>
        <li ng-repeat="x in now  | orderBy:'country' | limitTo:2" >{{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</body>
<script>
    var app = angular.module("myApp", []);
    app.controller('life', function($scope){
        $scope.search = ['wangpeng','jiangfeng'];


        $scope.now = [{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]
    })
</script>
</html>
```

