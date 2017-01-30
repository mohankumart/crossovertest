/* testing filters */
 
describe('capital first letter filter', function() {
	beforeEach(module('utApp'));
	var $filter;
	  
	beforeEach(inject(function(_$filter_){
		$filter = _$filter_;
	}));

	it('returns coverted string', function() {
		var captial = $filter('capital');
		expect(captial('pending')).toEqual('Pending');
	});
	
	it('returns same string', function() {
		var captial = $filter('capital');
		expect(captial('Pending')).toEqual('Pending');
	});
	
});

/* testing controllers */
describe('utAppCtlr', function() {
  beforeEach(module('utApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  describe('$scope.triggerModal', function() {
	  var $scope, controller;

	  beforeEach(function() {
		  $scope = {};
	      controller = $controller('utAppCtlr', { $scope: $scope });
	  });
	    
	  it('should launch modal dialog', function() {
		  $scope.triggerModal();
		  expect($scope.showModal).toEqual(true);
	  });
	  
	  it('should close modal dialog', function() {
		  $scope.triggerModal();
		  $scope.modalClose();
		  expect($scope.showModal).toEqual(false);
	  });
	  
  });
});

/*testing service*/
describe('No Two panel should open at same time', function() {
	beforeEach(module('utApp'));
	it('should simulate ut details promise', inject(function($q, $rootScope) {
		  var deferred = $q.defer();
		  var promise = deferred.promise;
		  var resolvedValue;
		  promise.then(function(panels) { 
			  var count = 0;
			  $.each(panels, function(index, panel){
				  if(!panel.collapse){
					  count++;
				  }
			  });
			  resolvedValue = count; 
		  });
		  expect(resolvedValue).toBeUndefined();
		  deferred.resolve(window.utModel.utPanleData);
		  expect(resolvedValue).toBeUndefined();
		  
		  $rootScope.$apply();
		  expect(resolvedValue).toEqual(1);
	}));
	
});

/* testing directives */
describe('test canvas directive', function() {
	var $compile,
		$rootScope;

	beforeEach(module('utApp'));

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

  it('Replaces canvasPie with empty content', function() {
	  var panel1 = window.utModel.utPanleData[0];
	  $rootScope.id = panel1.id;
	  $rootScope.data = panel1.unit_test.data.pie.data;
	  $rootScope.labels = panel1.unit_test.data.pie.labels;
	  $rootScope.colors = panel1.unit_test.data.pie.colors;
	  var element = $compile("<canvas-pie id=\"{{id}}\" data=\"data\" labels=\"labels\" colors=\"colors\"></canvas-pie>")($rootScope);
	  $rootScope.$digest();
	  expect(element.html()).toEqual("");
  });
  
  it('check canvas data is available in canvas pie directive', function() {
	  var panel1 = window.utModel.utPanleData[0];
	  $rootScope.id = panel1.id;
	  $rootScope.data = panel1.unit_test.data.pie.data;
	  $rootScope.labels = panel1.unit_test.data.pie.labels;
	  $rootScope.colors = panel1.unit_test.data.pie.colors;
	  var element = $compile("<canvas-pie id=\"{{id}}\" data=\"data\" labels=\"labels\" colors=\"colors\"></canvas-pie>")($rootScope);
	  $rootScope.$digest();
	  var directiveScope = element.isolateScope();
	  expect(directiveScope.data.length).toEqual(2);
  });
  
  it('check canvas colors are available in canvas pie directive', function() {
	  var panel1 = window.utModel.utPanleData[0];
	  $rootScope.id = panel1.id;
	  $rootScope.data = panel1.unit_test.data.pie.data;
	  $rootScope.labels = panel1.unit_test.data.pie.labels;
	  $rootScope.colors = panel1.unit_test.data.pie.colors;
	  var element = $compile("<canvas-pie id=\"{{id}}\" data=\"data\" labels=\"labels\" colors=\"colors\"></canvas-pie>")($rootScope);
	  $rootScope.$digest();
	  var directiveScope = element.isolateScope();
	  expect(directiveScope.colors.length).toEqual(2);
	  
  });
  
  it('check canvas lables are available in canvas pie directive', function() {
	  var panel1 = window.utModel.utPanleData[0];
	  $rootScope.id = panel1.id;
	  $rootScope.data = panel1.unit_test.data.pie.data;
	  $rootScope.labels = panel1.unit_test.data.pie.labels;
	  $rootScope.colors = panel1.unit_test.data.pie.colors;
	  var element = $compile("<canvas-pie id=\"{{id}}\" data=\"data\" labels=\"labels\" colors=\"colors\"></canvas-pie>")($rootScope);
	  var directiveScope = element.isolateScope();
	  expect(directiveScope.labels.length).toEqual(2);
  });
  
});










