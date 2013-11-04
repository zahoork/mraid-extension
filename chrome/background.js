/* global chrome:true */
var mraidUrl = 'http://cdn.adnxs.com/js/mraid.js';

chrome.webRequest.onBeforeRequest.addListener(
	_beforeRequest,
	{urls: ['<all_urls>']},
	['blocking']
);

function _beforeRequest(details){
	if (!/mraid\.js($|\?)/i.test(details.url)) return;
	if (details.url === mraidUrl) return;
	
	chrome.tabs.getSelected(null, function(tab){
		chrome.pageAction.show(tab.id);
	});

	return { redirectUrl: mraidUrl };
}
