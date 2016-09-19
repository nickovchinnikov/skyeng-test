import EngController from './controller';

import Helpers from '../../system/helpers';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('test/eng', {
			url: '/test/eng',
			template: require('./index.html'),
			controller: EngController,
			controllerAs: 'vm',
			resolve: {
				"checkUsername": ($q, $cookies) => {
					return Helpers.checkUsername($q, $cookies);
				}
			}
		});
}