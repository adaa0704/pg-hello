function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}
function userInfo() {

	info =  'Your personal data ' + '\n' +
			'=====' + '\n' +
			'User Name    : '     + 'Ada'     + '\n' + 
			'User Surname : '  + 'Galka' + '\n' + 
			'Email: ' + 'ada.galka0704@gmail.com' + '\n' + 

	navigator.notification.alert(info);
	
}