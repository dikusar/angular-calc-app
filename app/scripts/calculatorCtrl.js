import $ from 'jquery';
import {calcApp} from './app';

$(function () {
	'use strict';

	calcApp.controller('calcCtrl',
		function calcCtrl($scope) {

			$scope.dispVal = '0';
			$scope.operate = '';
			$scope.newNumber = true;
			$scope.memory = '';
			$scope.dispMemory = '0';

			function refreshData(operate) {
				$scope.newNumber = true;
				$scope.memory = $scope.dispVal;
				$scope.operate = operate;
			}

			$scope.updatepVal = function (num) {
				if ($scope.dispVal === '0' || $scope.newNumber) {
					$scope.dispVal = num;
					$scope.newNumber = false;
				}else {
					$scope.dispVal = $scope.dispVal + String(num);
				}
				if (num === ' ' && $scope.dispVal !== '0') {
					$scope.dispVal = $scope.dispVal.slice(0, $scope.dispVal.length - 2);
				}
			};

			$scope.memoryAction = function (action) {
				if (action === 'M+') {
					$scope.dispMemory = parseFloat($scope.dispMemory) + parseFloat($scope.dispVal);
				}
				if (action === 'MR' && $scope.dispMemory !== '0') {
					$scope.dispVal = $scope.dispMemory;
				}
				if (action === 'MC') {
					$scope.dispMemory = '0';
				}
			};

			$scope.plus = function () {
				refreshData('+');
			};

			$scope.minus = function () {
				refreshData('-');
			};

			$scope.divide = function () {
				refreshData('/');
			};

			$scope.multiply = function () {
				refreshData('*');
			};

			$scope.percent = function () {
				refreshData('%');
			};

			$scope.clearAll = function () {
				$scope.dispVal = '0';
				$scope.operate = '';
			};

			$scope.addComa = function () {
				if (String($scope.dispVal).indexOf('.') > 0) {
					return;
				}
				$scope.dispVal = $scope.dispVal + '.';
			};

			$scope.reverseNum = function () {
				if (parseFloat($scope.dispVal) > 0) {
					$scope.dispVal = '-' + $scope.dispVal;
				} else if (parseFloat($scope.dispVal) === 0) {
					$scope.dispVal = '0';
				} else {
					$scope.dispVal = $scope.dispVal.slice(1, $scope.dispVal.length);
				}
			};

			$scope.calculate = function () {
				if ($scope.operate === '+') {
					$scope.dispVal = parseFloat($scope.memory) + parseFloat($scope.dispVal);
				}
				if ($scope.operate === '-') {
					$scope.dispVal = parseFloat($scope.memory) - parseFloat($scope.dispVal);
				}
				if ($scope.operate === '/') {
					$scope.dispVal = parseFloat($scope.memory) / parseFloat($scope.dispVal);
				}
				if ($scope.operate === '*') {
					$scope.dispVal = parseFloat($scope.memory) * parseFloat($scope.dispVal);
				}
				if ($scope.operate === '%') {
					$scope.dispVal = parseFloat($scope.memory) / parseFloat($scope.dispVal);
					$scope.dispVal = $scope.dispVal * parseFloat('100%');
					$scope.dispVal = Math.round($scope.dispVal);
					$scope.dispVal = $scope.dispVal + '%';
				}
				$scope.operate = '';
				$scope.newNumber = true;
			};

		});
});

