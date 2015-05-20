// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.files')

/**
 * Directive to detect chanegs on file inputs (ng-Change doesn't work in that type of input).
 *
 * @module mm.addons.files
 * @ngdoc directive
 * @name mmaFilesOnChange
 */
.directive('mmaFilesOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.mmaFilesOnChange);
      element.bind('change', onChangeHandler);
    }
  };
});