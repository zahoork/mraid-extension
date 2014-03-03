var Mraid = require('./mraid'),
	options = require('./options'),
	$ = require('./private-jquery');

if (window.mraid){
	if (typeof window.mraid.enable === 'functon'){
		window.mraid.enable();
	}

	return;
}

window.mraid = new Mraid({
	placementType: 'inline',
	screen: options.getScreenSize()
});

if (!window.mocha){
	if (window.document.readyState === 'complete'){
		window.mraid.triggerReady();
	} else {
		$(function(){
			window.mraid.triggerReady();
		});
	}
}
