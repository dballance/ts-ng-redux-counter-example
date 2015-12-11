declare var require: any;
require("./app.css");

import * as polyfills from "es6-shim";
import * as angular from "angular";
import { combineReducers } from "redux";
import * as ngRedux from "ng-redux";
import { rootReducer } from "./reducers/index";
import { counter } from "./components/counter";

angular.module("counter",  [ngRedux.default])
.config(($ngReduxProvider: ngRedux.INgReduxProvider ) => {
	$ngReduxProvider.createStoreWith(rootReducer);
	
})
.directive("counter", counter);