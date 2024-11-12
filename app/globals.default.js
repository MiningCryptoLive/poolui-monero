'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "xmr.solopool.us",
		api_url : 'https://xmr.solopool.us/api',
		api_refresh_interval: 30,
		app_update_interval: 30*60000
	};
});
