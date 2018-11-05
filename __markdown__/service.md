# 服务Service
内置服务

## $scope
## $rootScope
全局作用域
``` html

<!DOCTYPE html>
<html ng-app='myApp'>
    <head>
        <meta charset='utf-8'>
        <script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
    </head>
    <body>
        <div ng-controller='myCtrl1'>
            <div>myCtrl1 : {{name}}</div>
            <div>myCtrl1 : {{$root.name}}</div>
        </div>
        <div ng-controller='myCtrl2'>
            <div>myCtrl2 : {{name}}</div>
        </div>
        <script>
        
        	
            var app = angular.module("myApp",[])
            app.controller("myCtrl1",function($scope, $rootScope){
                $scope.name = 'scope';
            })
            app.controller("myCtrl2",function($scope, $rootScope){
                $rootScope.name = 'rootScope';
            })
        </script>
    </body>
</html>

```
## $location
## $http 
## $timeout 
## $interval 


# 自定义Service
```html
<!DOCTYPE html>
<html ng-app='myApp'>
    <head>
        <meta charset='utf-8'>
        <script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
    </head>
    <body>
        <div ng-controller='CalcController'>
            <div><input type="text" ng-model="number"></div>
            <button ng-click="square()">pow</button>
            <div>myCtrl1 : {{result}}</div>
        </div>
        
        <script>
        
        	
            var mainApp = angular.module("myApp",[])
            mainApp.config(function($provide) {
                $provide.provider('MathService', function() {
                   this.$get = function() {
                      var factory = {};
                      
                      factory.multiply = function(a, b) {
                         return a * b;
                      }
                      return factory;
                   };
                });
             });
                
             mainApp.value("defaultInput", 5);
             
             mainApp.service('CalcService', function(MathService){
                this.square = function(a) {
                   return MathService.multiply(a,a);
                }
             });
             
             mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
                $scope.number = defaultInput;
                $scope.result = CalcService.square($scope.number);

                $scope.square = function() {
                   $scope.result = CalcService.square($scope.number);
                }
             });
        </script>
    </body>
</html>
```
