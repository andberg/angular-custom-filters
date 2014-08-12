describe('unique filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('take an array of strings and returns only the uniqe words', function () {
		angular.mock.inject(function (uniqueFilter) {
			expect(uniqueFilter(['Mary', 'Jane', 'Mary', 'Joe'])).toEqual(['Mary', 'Jane', 'Joe']);
		});
	});
});