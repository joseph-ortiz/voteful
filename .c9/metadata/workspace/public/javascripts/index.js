{"filter":false,"title":"index.js","tooltip":"/public/javascripts/index.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":90,"column":0},"end":{"row":90,"column":3},"action":"insert","lines":["// "]},{"start":{"row":91,"column":0},"end":{"row":91,"column":3},"action":"insert","lines":["// "]},{"start":{"row":92,"column":0},"end":{"row":92,"column":3},"action":"insert","lines":["// "]},{"start":{"row":93,"column":0},"end":{"row":93,"column":3},"action":"insert","lines":["// "]},{"start":{"row":94,"column":0},"end":{"row":94,"column":3},"action":"insert","lines":["// "]},{"start":{"row":95,"column":0},"end":{"row":95,"column":3},"action":"insert","lines":["// "]},{"start":{"row":96,"column":0},"end":{"row":96,"column":3},"action":"insert","lines":["// "]},{"start":{"row":98,"column":0},"end":{"row":98,"column":3},"action":"insert","lines":["// "]},{"start":{"row":99,"column":0},"end":{"row":99,"column":3},"action":"insert","lines":["// "]},{"start":{"row":100,"column":0},"end":{"row":100,"column":3},"action":"insert","lines":["// "]},{"start":{"row":101,"column":0},"end":{"row":101,"column":3},"action":"insert","lines":["// "]},{"start":{"row":102,"column":0},"end":{"row":102,"column":3},"action":"insert","lines":["// "]},{"start":{"row":103,"column":0},"end":{"row":103,"column":3},"action":"insert","lines":["// "]},{"start":{"row":104,"column":0},"end":{"row":104,"column":3},"action":"insert","lines":["// "]},{"start":{"row":105,"column":0},"end":{"row":105,"column":3},"action":"insert","lines":["// "]},{"start":{"row":106,"column":0},"end":{"row":106,"column":3},"action":"insert","lines":["// "]},{"start":{"row":107,"column":0},"end":{"row":107,"column":3},"action":"insert","lines":["// "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":3},"action":"insert","lines":["// "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":3},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":110,"column":0},"end":{"row":110,"column":3},"action":"insert","lines":["// "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":3},"action":"insert","lines":["// "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":3},"action":"insert","lines":["// "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":3},"action":"insert","lines":["// "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":3},"action":"insert","lines":["// "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":3},"action":"insert","lines":["// "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":3},"action":"insert","lines":["// "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":3},"action":"insert","lines":["// "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":3},"action":"insert","lines":["// "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":3},"action":"insert","lines":["// "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":3},"action":"insert","lines":["// "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":3},"action":"insert","lines":["// "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":3},"action":"insert","lines":["// "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":3},"action":"insert","lines":["// "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":3},"action":"insert","lines":["// "]},{"start":{"row":126,"column":0},"end":{"row":126,"column":3},"action":"insert","lines":["// "]},{"start":{"row":127,"column":0},"end":{"row":127,"column":3},"action":"insert","lines":["// "]},{"start":{"row":128,"column":0},"end":{"row":128,"column":3},"action":"insert","lines":["// "]},{"start":{"row":129,"column":0},"end":{"row":129,"column":3},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":130,"column":0},"end":{"row":130,"column":3},"action":"insert","lines":["// "]},{"start":{"row":131,"column":0},"end":{"row":131,"column":3},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":138,"column":5},"action":"remove","lines":["// .controller('bodyController', ['$scope', '$http', '$mdToast', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){","//   $scope.openBottomSheet = function($event) {","//     $mdBottomSheet.show({","//       targetEvent:$event,","//       templateUrl: 'bottomSheet.html'","//     });","//   };","// }])","","// .controller('footerController', ['$scope', '$http', '$mdToast', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){","//   $scope.addLink = function ($event) {","//     $mdDialog.show({","//       targetEvent: $event,","//       templateUrl: 'add-link.html',","//       controller: 'AddLinkController'","//     });","//   };","//   $scope.changeLink = function ($event) {","//     $mdDialog.show({","//       targetEvent: $event,","//       templateUrl: 'change-link.html',","//       controller: 'ChangeLinkController'","//     });","//   };","// $scope.bugReport = function ($event) {","//   $mdDialog.show({","//     targetEvent: $event,","//     templateUrl: 'add-bug.html',","//     controller: 'AddBugController'","//   });","// };","// $scope.devTeam = function ($event) {","//   $mdDialog.show({","//     targetEvent: $event,","//     templateUrl: 'dev-team.html',","//     controller: 'DevTeamController'","//   });","// };"," ","//   $scope.scrape = function($event){","//     $http({","//       method: 'GET',","//       url: '/scrape',","//       data: {}  ","//     }).success(success).error(error);","//     function success(){","//       $mdToast.show($mdToast.simple().content('Win').capsule(true));","//     }","//     function error(){","      ","//     }","//   };","","// $scope.mouseOut = function($event) {","//     $mdBottomSheet.hide();","// };","// $scope.listItemClick = function($event) {","//     $mdBottomSheet.hide();","// };","// }])","// .controller('AddLinkController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){","//   $scope.save = function(url){","//     function success(data){","//       $mdToast.show($mdToast.simple().content('Link Added').capsule(true));","//       $mdDialog.hide();","//     }","//     function error(){","      ","//     }","//     $http({","//       method: 'POST',","//       url: '/link',","//       data: {link: {url: url}},","//       headers: {'X-CSRF-Token': $('meta[name=\"csrf-token\"]').attr('content')}  ","//     }).success(success).error(error);","//   };","//   $scope.close = function(){","//     $mdDialog.hide();","//   };","// }])","// .controller('ChangeLinkController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){","//   $scope.save = function(title, keyword){","//     function success(data){","//       $mdToast.show($mdToast.simple().content('Changes Added').capsule(true));","//       $mdDialog.hide();","//     }","//     function error(){","      ","//     }","//     $http({","//       method: 'PUT',","//       url: '/link',","//       data: {link: {title: title, keyword:keyword}},","//       headers: {'X-CSRF-Token': $('meta[name=\"csrf-token\"]').attr('content')}  ","//     }).success(success).error(error);","//   };","//   $scope.close = function(){","//     $mdDialog.hide();","//   };","// }])","// .controller('AddBugController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog) {","//   $scope.types = [{name:'Bug',value:'bug'},{name:'Feature',value:'feature'}];","//     $scope.fix = function(){","//     Trello.authorize({","//         type: \"popup\",","//         success: onAuthorize,","//         scope: { write: true, read: true }","//     })","// };"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":3},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":2},"end":{"row":43,"column":130},"action":"remove","lines":["//   Trello.post(\"cards\", { name:type + \":\" + message + \"from\" + user, due: \"null\", idList:'Bug / Feature', urlSource:\"null\" });"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":2},"end":{"row":43,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":37},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":2},"end":{"row":30,"column":5},"action":"insert","lines":["// "]},{"start":{"row":31,"column":2},"end":{"row":31,"column":5},"action":"insert","lines":["// "]},{"start":{"row":32,"column":2},"end":{"row":32,"column":5},"action":"insert","lines":["// "]},{"start":{"row":33,"column":2},"end":{"row":33,"column":5},"action":"insert","lines":["// "]},{"start":{"row":34,"column":2},"end":{"row":34,"column":5},"action":"insert","lines":["// "]},{"start":{"row":35,"column":2},"end":{"row":35,"column":5},"action":"insert","lines":["// "]},{"start":{"row":36,"column":2},"end":{"row":36,"column":5},"action":"insert","lines":["// "]},{"start":{"row":37,"column":2},"end":{"row":37,"column":5},"action":"insert","lines":["// "]},{"start":{"row":38,"column":2},"end":{"row":38,"column":5},"action":"insert","lines":["// "]},{"start":{"row":39,"column":2},"end":{"row":39,"column":5},"action":"insert","lines":["// "]},{"start":{"row":40,"column":2},"end":{"row":40,"column":5},"action":"insert","lines":["// "]},{"start":{"row":41,"column":2},"end":{"row":41,"column":5},"action":"insert","lines":["// "]},{"start":{"row":42,"column":2},"end":{"row":42,"column":5},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":2},"end":{"row":45,"column":4},"action":"remove","lines":["$scope.close = function(){","    $mdDialog.hide();","  };"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":7},"end":{"row":43,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":48,"column":3},"action":"remove","lines":[".controller('DevTeamController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog) {","  $scope.close = function(){","    $mdDialog.hide();","  };","}])"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":3},"end":{"row":44,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":56,"column":5},"action":"remove","lines":[".directive('autofocus', ['$timeout', function($timeout){"," return {","    restrict: 'A',","    link: function(scope, element){","      $timeout(function(){","        if(element[0].tagName.toUpperCase()){","          element[0].querySelector('input').focus();","        } else {","          element[0].focus();","        }","      }, 1000);","    }","  }; "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":1},"end":{"row":46,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":0},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"remove","lines":["}])"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":2},"end":{"row":22,"column":6},"action":"remove","lines":["$scope.search = function (term) {","    console.log(term);","    if(term.length > 2) {","      $http.get('/search.json', {params:{term: term}}).success(success).error(error);","      $('.loading-button').show();","    return;}","    function success(data, status, headers, config){","      console.log('success');","      $('.loading-button').hide();","      $scope.links = data.links;","    }","    function error(data, status, headers, config){","      console.log('error');","      $('.loading-button').hide();","      $scope.error = \"Unable to search at this time\";","    }","  };  "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":2},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":2},"end":{"row":5,"column":2},"action":"remove","lines":["$scope.searchTerm = '';","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":4,"column":2},"action":"remove","lines":["$scope.links = [];","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"insert","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":19},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":11},"action":"remove","lines":["$scope."]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"remove","lines":["// "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":4},"end":{"row":5,"column":6},"action":"insert","lines":["$("]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":1},"end":{"row":9,"column":4},"action":"remove","lines":[" $scope.expand = function($event) {","    $($event.target).removeClass('md-whiteframe-z1').addClass('md-whiteframe-z4');","  };","  $scope.shrink = function($event) {","    $event.target.removeClass('md-whiteframe-z4').addClass('md-whiteframe-z1');","  };"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":2},"end":{"row":3,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419056353512,"hash":"60d6c256e094d754a50c7ea6c62a2c2e0b9d27d5"}