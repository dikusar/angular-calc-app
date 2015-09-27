import $ from 'jquery';
import {calcApp} from './app';

$(function () {
	calcApp.controller('calcCtrl',
		function calcCtrl($scope) {

			$scope.dispVal = '0';
			$scope.operate = '';
			$scope.newNumber = true;
			$scope.memory = '';

			$scope.updatepVal = function (num) {
				if ($scope.dispVal === '0' || $scope.newNumber) {
					$scope.dispVal = num;
					$scope.newNumber = false;
				}else {
					$scope.dispVal += String(num);
				}
			};

			$scope.plus = function () {
				$scope.newNumber = true;
				$scope.memory = $scope.dispVal;
				$scope.operate = '+';
			};

			$scope.minus = function () {
				$scope.newNumber = true;
				$scope.memory = $scope.dispVal;
				$scope.operate = '-';
			};

			$scope.calculate = function () {
				if ($scope.operate === '+') {
					$scope.dispVal = parseFloat($scope.memory) + parseFloat($scope.dispVal);
				}
				if ($scope.operate === '-') {
					$scope.dispVal = parseFloat($scope.memory) - parseFloat($scope.dispVal);
				}
				$scope.operate = '';
				$scope.newNumber = true;
			};

			$scope.clearAll = function () {
				$scope.dispVal = '0';
				$scope.operate = '';
			};

			$scope.addComa = function () {
				$scope.dispVal += '.';
			};
		});
});

