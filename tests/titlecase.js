describe('titlecase filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('should convert words separated by a space to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('HeLLo worLD')).toEqual('Hello World');
		});
	});
	it('should convert words separated by a hyphen to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('mary-lo')).toEqual('Mary-Lo');
		});
	});
});