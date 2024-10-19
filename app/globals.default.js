'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "solopool.pro",
		api_url : 'http://solopool.pro:4243',
		api_refresh_interval: 30,
		app_update_interval: 30*60000
	};
});
