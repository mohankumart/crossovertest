/**
 * directives
 */
var directives = angular.module('utApp.directives', []);

directives.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});

directives.directive('canvasPie',function(){
	return {
		restrict: 'EA',
	    replace: true,
	    scope: {
	    	data: '=',
	    	labels: '=',
	    	colors: '=',
	    	id: '@'
	    },
	    template: '<canvas width="70" height="70"></canvas>',
		link: function($scope,element,attrs){
			$scope.context = element[0].getContext("2d");
			for (var i = 0; i < $scope.data.length; i++) {
			    drawSegment(element[0], $scope.context, i, $scope.data, $scope.labels, $scope.colors);
			}
			
		}
	}
});

directives.directive('utPanelSet',function(){
	return {
		restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	    	config: '='
	    },
	    template: '<div class="ut-panel-container" ng-transclude></div>',
		controller: function($scope){
			this.panels = $scope.panels = [];
			this.addPanel = function(panel){
				$scope.panels.push(panel);
			};
			this.config = $scope.config;
		},
		link: function($scope,element,attrs){
		}
	}
});

directives.directive('utPanelHeading',function(){
	return {
		restrict: 'EA',
		replace: true,
		require: '^utPanelSet',
		templateUrl: 'utPanelHeading.html',
		scope: {
		},
		link: function($scope,element,attrs,utPanelSetCtlr){
			$scope.config = utPanelSetCtlr.config;
			$scope.setHeadStyles = function(col, $index){
				return {
					width: col.width
				}
			}
		}
	}
});

directives.directive('utPanel',function(){
	return {
		restrict: 'EA',
		replace: true,
		require: '^utPanelSet',
		templateUrl: 'utPanel.html',
		scope: {
			data: '=',
			collapse: '=collapse'
		},
		link: function($scope,element,attrs,utPanelSetCtlr){
			$scope.config = utPanelSetCtlr.config;
			$scope.setPanelCellStyles = function(col, $index){
				return {
					width: col.width
				}
			}
			
			$scope.toggleCollapse = function(){
				if(!$scope.collapse){
					$scope.collapse = !$scope.collapse;
				}else{
					//collapse all other panels
					$.each(utPanelSetCtlr.panels,function(index,panel){
						if(!panel.collaspe){
							panel.collapse = true;
						}
					});
					$scope.collapse = !$scope.collapse;
				}
				
			}

			$scope.showDialog = function(title){
				//get ngAppScope scope
				var utAppScope = angular.element('[ng-controller = utAppCtlr]').scope();
				utAppScope.triggerModal(title, 'InProgress --- TBD');
				
			};
			
			utPanelSetCtlr.addPanel($scope);
		}
	}
});





