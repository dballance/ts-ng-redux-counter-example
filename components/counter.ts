declare var require;
import * as CounterActions from "../actions/counter";
import { INgRedux } from "ng-redux";


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
	constructor($ngRedux: INgRedux, $scope: ng.IScope) {
		const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
		console.log(this);
		$scope.$on("$destroy", unsubscribe);
	}
	
	mapStateToThis(state) {
		return {
			value: state.counter
		}
	}
}