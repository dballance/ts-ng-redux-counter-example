declare var require: any;
import * as CounterActions from "../actions/counter";
import * as ngRedux from "ng-redux";


export function counter() {
	return {
		restrict: "E",
		controllerAs: "counter",
		controller: CounterController,
		template: require("./counter.html"), 
		scope: {}
	}
}

class CounterController {
	constructor($ngRedux: ngRedux.INgRedux, $scope: ng.IScope) {
		const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
		$scope.$on("$destroy", unsubscribe);
	}
	
	mapStateToThis(state) {
		return {
			value: state.counter
		}
	}
}