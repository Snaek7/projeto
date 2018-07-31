angular.module("meuModulo")
.controller("indexController",function($scope, $http){

    $scope.valorBuscaDepartment = 'Departamento';
    $scope.valorBuscaRole = '';
    $scope.departmentTitulo = 'Departamento';
    $scope.roleTitulo = 'Cargo';

    $scope.capturaValorDepartment = function (valor) {
        $scope.departmentTitulo = valor;
    }

    $scope.capturaValorRole = function (valor) {
        $scope.roleTitulo = valor;
    }

    $scope.filtrar = function() {
        $scope.valorBuscaDepartment = $scope.departmentTitulo;
        $scope.valorBuscaRole = $scope.roleTitulo;
        if($scope.roleTitulo != 'Cargo') {
            $scope.role = $scope.roleTitulo;
        } else {
            $scope.role = '';
        }
    }

    $http.get('../../usuarios.json').then(function(response) {
       $scope.users = response.data.users;

        $scope.usersDepartment = $scope.users.filter((user, index, self) =>
            index === self.findIndex((t) => (
                t.department === user.department 
            ))
        );


        $scope.usersRole = $scope.users.filter((user, index, self) =>
            index === self.findIndex((t) => (
                t.role === user.role 
            ))
        );
    

       $scope.accounting = $scope.users.filter(element => {
          return element.department === 'Accounting';
        });

       $scope.business = $scope.users.filter(element => {
          return element.department === 'Business Development';
        });
        
       $scope.engineering = $scope.users.filter(element => {
          return element.department === 'Engineering';
        });
        
       $scope.human = $scope.users.filter(element => {
          return element.department === 'Human Resources';
        });

       $scope.legal = $scope.users.filter(element => {
          return element.department === 'Legal';
        });

       $scope.marketing = $scope.users.filter(element => {
          return element.department === 'Marketing';
        });

       $scope.product = $scope.users.filter(element => {
          return element.department === 'Product Management';
        });

       $scope.research = $scope.users.filter(element => {
          return element.department === 'Research and Development';
        });

       $scope.sales = $scope.users.filter(element => {
          return element.department === 'Sales';
        });
        
       $scope.training = $scope.users.filter(element => {
          return element.department === 'Training';
        });

       $scope.services = $scope.users.filter(element => {
          return element.department === 'Services';
        });

       $scope.support = $scope.users.filter(element => {
          return element.department === 'Support';
        });
        
       

    });



});