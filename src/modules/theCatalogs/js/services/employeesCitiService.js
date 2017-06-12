'use strict';
var angular = require('angular');

var employeesCitiService = function ($http, $q, $cookies){

    var server = "http://54.153.120.183/";

    this.getAnalistas = function(){
        var endpoint = server + "catalogsms/empleados/analistas";
        var appID = $cookies.get('applicationId');
        var content_type = 'application/json; charset=utf-8';
        var defered=$q.defer();
        var promise= defered.promise;
        var config = {
            headers : { 
                'Content-Type': content_type,
                'ApplicationID': appID
            }
        };
        $http.get(endpoint, config).then(function(response){
            defered.resolve(response.data);
        });
        return promise;
    };

    this.getLideres = function(){
        var endpoint = server + "catalogsms/empleados/lideres";
        var appID = $cookies.get('applicationId');
        var content_type = 'application/json; charset=utf-8';
        var defered=$q.defer();
        var promise= defered.promise;
        var config = {
            headers : { 
                'Content-Type': content_type,
                'ApplicationID': appID
            }
        };
        $http.get(endpoint, config).then(function(response){
            defered.resolve(response.data);
        });
        return promise;
    };
    
    this.getGerentes = function(){
        var endpoint = server + "catalogsms/empleados/gerentes";
        var appID = $cookies.get('applicationId');
        var content_type = 'application/json; charset=utf-8';
        var defered=$q.defer();
        var promise= defered.promise;
        var config = {
            headers : { 
                'Content-Type': content_type,
                'ApplicationID': appID
            }
        };
        $http.get(endpoint, config).then(function(response){
            defered.resolve(response.data);
        });
        return promise;
    }

    return{
        getGerentes: this.getGerentes,
        getLideres: this.getLideres,
        getAnalistas: this.getAnalistas
    };
}
module.exports= angular.module("app.locale").service("employeesCitiService", employeesCitiService);