


angular.module('webApp',['ui.router'])
    .config( function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl:'template/main.html',
                controller:'MainCtrl'
            })
            .state('serverdetail',{
                url: '/serverdetail/:id',
                templateUrl:'template/serverdetail.html',
                controller:'serverdeCtrl'
            })
            .state('server',{
                url: '/server',
                templateUrl:'template/server.html',
                controller:'serverCtrl'
            })
            .state('serverlist',{
                url: '/serverlist/:id1',
                templateUrl:'template/serverlist.html',
                controller:'serverlistCtrl'
            })
            .state('login',{
                url: '/login',
                templateUrl:'template/login.html',
                controller:'loginCtrl'
            })
            .state('register',{
                url: '/register',
                templateUrl:'template/register.html',
                controller:'registerCtrl'
            })



        $urlRouterProvider.otherwise('/main');
    })
    .controller('registerCtrl',function ($scope) {


    })
    .controller('loginCtrl',function ($scope) {


    })

    .controller('serverlistCtrl',function ($scope,$http,$stateParams) {

        console.log($stateParams)
       $http.get('http://localhost:3000/sellers')
            .success(function (items) {

                var index=$stateParams.id1-1
                console.log(items);

                $scope.item=items[index]


            })
        $http.get('http://localhost:3000/projects')
            .success(function (projects) {
                console.log(projects);
                $scope.projects=projects

            })
            .error(function (error) {
                console.log(error);
            })
        $('.pagedown').click(function () {

            var btns = $('#showPage a');

            for(var i =0;i<btns.length;i++){
                if ($(btns[i]).hasClass("acv") ) {
                    $(btns[i]).removeClass('acv');
                    console.log($(btns[i+1]));
                    $(btns[i+1]).addClass('acv')
                    break;
                }
            }
        })
        $(".fenye span").click(function () {

            $.ajax({
                url: "http://localhost:3000/sellers",
                dataType:"json",

                success: function(data){
                    var sales = data;
                    console.log(sales)
                    for(var i =0 ;i< sales.length;i++) {
                        var item = sales[i];
                       $('.ctop').after(
                           '<div  class="ctop ctopH" style="height: 200px;" >'+
                            '<img class="pic" src="'+item.img+'"'+
                        'width="150" height="150">'+
                            '<span class="spm spm2">'+
                            '<i>'+item.name1+'</i>'+
                        '<i style="color: #929292">'+item.description1+'</i>'+
                        '<i class="price"><b style="margin-left: 0">'+item.price+'<em>元/次</em></b>'+

                        '<b class="oldpic" style="display: inline-block; margin-left: 20px">原价<em>'+item.oldprice+'</em></b>'+

                        '</i>'+
                        '</span>'+
                        '<span class="spf">已售<i>'+item.sales+'</i></span>'+
                        '</div>')

                    }
                }
            });
        });


    })
    .controller('serverCtrl',function ($scope,$http) {

     $http.get('http://localhost:3000/sellers')
         .success(function (items) {
             $scope.items=items

         })
        $(".fenye span").click(function () {

            $.ajax({
                url: "http://localhost:3000/sellers",
                dataType:"json",

                success: function(data){
                    var sales = data;
                    console.log(sales)
                    for(var i =0 ;i< sales.length;i++) {
                        var sale = sales[i];

                        $(".ulactivety li:last-child").after(
                            '<li id="'+sale.id+'">' +
                            '<img src="'+sale.img+'"' +
                            'width="210" height="210">' +
                            '<p style="margin-top: 15px"><img style="margin-bottom: 5px" src="pcimages/home1.png" width="18"' +
                            'height="17"><b>e清洗</b></p>' +
                            ' <p class="pp">已接单'+sale.sales+'单<i>好评'+sale.goodRate+'%</i></p>' +
                            '</li>'
                        );
                    }
                }
            });
        });

        })
    .controller('serverdeCtrl',function ($scope,$http,$stateParams) {

        console.log($stateParams)
        $http.get('http://localhost:3000/sellers')
            .success(function (items) {

                var index=$stateParams.id-1
                console.log(items);

                $scope.item=items[index]




            })
            .error(function (error) {
                console.log(error);
            })

    })
    .controller('MainCtrl',  function ($scope,$http) {
        $(window).scroll( function(e) {
            e=e || window.event;
            if(e.wheelDelta) {
                if (e.wheelDelta == 120) {
                    $('.header').is(':visible')
                }
                ;
            }
            if(document.getElementsByTagName("body")[0].scrollTop>8&&document.getElementsByTagName("body")[0].scrollTop<140) {
              $('.header').hide()
               }else {

                $(".header").animate({height:"show"},400)
            }
        })


        $http.get('http://localhost:3000/sellers')
                .success(function (items) {
                    console.log(items);
                    $scope.items = items

                })
                .error(function (error) {
                    console.log(error);
                })
            $http.get('http://localhost:3000/projects')
                .success(function (projects) {
                    console.log(projects);
                    $scope.projects = projects

                })
                .error(function (error) {
                    console.log(error);
                })

        })
    .controller('MyCtrl',function ($scope) {

    })
