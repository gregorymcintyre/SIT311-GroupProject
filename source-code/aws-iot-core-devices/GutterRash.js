const awsIot = require('aws-iot-device-sdk');
const fetch = require("node-fetch");

//modify bay variables here

var bay = [];
var bay1 = bay.push({"bayID": 951, "status": undefined, "restriction_duration": undefined });
var bay2 = bay.push({"bayID": 6919, "status": undefined, "restriction_duration": undefined });
var bay3 = bay.push({"bayID": 6920, "status": undefined, "restriction_duration": undefined });
var bay4 = bay.push({"bayID": 4712, "status": undefined, "restriction_duration": undefined });
var bay5 = bay.push({"bayID": 4725, "status": undefined, "restriction_duration": undefined });
var bay6 = bay.push({"bayID": 4735, "status": undefined, "restriction_duration": undefined });
var bay7 = bay.push({"bayID": 4739, "status": undefined, "restriction_duration": undefined });
var bay8 = bay.push({"bayID": 4745, "status": undefined, "restriction_duration": undefined });
var bay9 = bay.push({"bayID": 4750, "status": undefined, "restriction_duration": undefined });
var bay10 = bay.push({"bayID": 6834, "status": undefined, "restriction_duration": undefined });

//console.log(bay[0].bayID);

var timesBay = [];
var timesBay1 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay2 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay3 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay4 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay5 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay6 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay7 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay8 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay9 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});
var timesBay10 = timesBay.push({"starttime1" : undefined, "starttime2" : undefined, "starttime3" : undefined, "endtime1" : undefined, "endtime2" : undefined, "endtime3" : undefined, "typedesc1" : undefined , "typedesc2" : undefined , "typedesc3" : undefined});

const parking1 = awsIot.device({
	certPath:	'./certificates/parking1/4c54dfc22e-certificate.pem.crt',
	keyPath:	'./certificates/parking1/4c54dfc22e-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking2',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking2 = awsIot.device({
	certPath:	'./certificates/parking2/a6b4294fb4-certificate.pem.crt',
	keyPath:	'./certificates/parking2/a6b4294fb4-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking2',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking3 = awsIot.device({
	certPath:	'./certificates/parking3/2554f696ef-certificate.pem.crt',
	keyPath:	'./certificates/parking3/2554f696ef-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking3',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking4 = awsIot.device({
	certPath:	'./certificates/parking4/21e85a4a82-certificate.pem.crt',
	keyPath:	'./certificates/parking4/21e85a4a82-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking4',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking5 = awsIot.device({
	certPath:	'./certificates/parking5/e1227c5cce-certificate.pem.crt',
	keyPath:	'./certificates/parking5/e1227c5cce-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking5',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking6 = awsIot.device({
	certPath:	'./certificates/parking6/a450ae3190-certificate.pem.crt',
	keyPath:	'./certificates/parking6/a450ae3190-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking6',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking7 = awsIot.device({
	certPath:	'./certificates/parking7/bbb6f3aded-certificate.pem.crt',
	keyPath:	'./certificates/parking7/bbb6f3aded-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking7',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking8 = awsIot.device({
	certPath:	'./certificates/parking8/02a7125063-certificate.pem.crt',
	keyPath:	'./certificates/parking8/02a7125063-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking8',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});
const parking9 = awsIot.device({
	certPath:	'./certificates/parking9/a7b98e4de2-certificate.pem.crt',
	keyPath:	'./certificates/parking9/a7b98e4de2-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking9',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});
const parking10 = awsIot.device({
	certPath:	'./certificates/parking10/975dc8e754-certificate.pem.crt',
	keyPath:	'./certificates/parking10/975dc8e754-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking10',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

const parking11 = awsIot.device({
	certPath:	'./certificates/parking11/51e2e1c5c1-certificate.pem.crt',
	keyPath:	'./certificates/parking11/51e2e1c5c1-private.pem.key',
	caPath:		'./certificates/rootCA.crt',
	clientId:	'parking11',
	host:		'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

//console.log('Conected to: '); 

var connectCount = 0;	//to simplify connections in the future
 
parking1.on('connect', function() {
	isConnectedParking1=true;
	connectCount++;
	console.log ('parking1 connected');
	//console.log(connectCount + ' of 10 devices connected');
		
		//parking1.publish('parking1', '{"data" : "test"}');
		//console.log ('parking1 message published');
});

parking2.on('connect', function() {
	//parking2.on('error', (msg) => { console.log('error: ' + msg); });
	
	isConnectedparking2=true;
	connectCount++;
	console.log ('parking2 connected');
	//console.log(connectCount + ' of 10 devices connected');
		
		//parking2.publish('parking2', '{"data" : "test"}');
		//console.log ('parking2 message published');
});

parking3.on('connect', function() {
	isConnectedparking3=true;
	connectCount++;
	console.log ('parking3 connected');
	//console.log(connectCount + ' of 10 devices connected');
	
		//parking3.publish('parking3', '{"data" : "test"}');
		//console.log ('parking3 message published');
});

parking4.on('connect', function() {
	isConnectedparking4=true;
	connectCount++;
	console.log ('parking4 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking5.on('connect', function() {
	isConnectedparking5=true;
	connectCount++;
	console.log ('parking5 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking6.on('connect', function() {
	isConnectedparking6=true;
	connectCount++;
	console.log ('parking6 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking7.on('connect', function() {
	isConnectedparking7=true;
	connectCount++;
	console.log ('parking7 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking8.on('connect', function() {
	isConnectedparking8=true;
	connectCount++;
	console.log ('parking8 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking9.on('connect', function() {
	isConnectedparking9=true;
	connectCount++;
	console.log ('parking9 connected');
	//console.log(connectCount + ' of 10 devices connected');
});

parking10.on('connect', function() {
	isConnectedparking10=true;
	connectCount++;
	console.log ('parking10 connected');
	//console.log(connectCount + ' of 10 devices connected');
});


//store is device is connected or not 
let isConnectedparking1=false; 
let isConnectedparking2=false; 
let isConnectedparking3=false; 
let isConnectedparking4=false; 
let isConnectedparking5=false; 
let isConnectedparking6=false; 
let isConnectedparking7=false; 
let isConnectedparking8=false; 
let isConnectedparking9=false; 
let isConnectedparking10=false; 

//store a reference carSimulation method callback 
let timeout=null; 

//console.log(connectCount);

	//function publishData (bay1, bay2, bay3, bay4, bay5, bay6, bay7, bay8, bay9, bay10) {
	function publishData (bay) {
		
		console.log('Publish initiated');
		
		for(var i = 0 ; i < 3 ; i++){
			try{
				parking1.publish('parking' + (i+1), '{"bayID": ' + bay[i].bayID + ', "status": ' + bay[i].status + ', "restriction_duration": '+ bay[i].restriction_duration +'}');
				console.log ('parking' + (i+1) + ' message published');
			}catch(err){
				console.log('Parking '+ (i+1) + ': ' + err.name);
			}
		}
	}

	function queryBays(bay){
		console.log('Bay queries intiaited');
		
		var currentDate = new Date();
		var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();		//for comparrison with pulled times
		
		/*
		//for ( var i = 0 ; i < 2 ; i++ ){
		//var i = 0;
		//while(i<10){
		
		console.log('querying Bay ID ' + bay[i].bayID);
		fetch('https://data.melbourne.vic.gov.au/resource/vh2v-4nfs.json?bay_id=' + bay[i].bayID)
			.then(res => res.json())
			.then( json => {
				//console.log(json),
				//console.log(json[i].status),
				bay[i].status = json[0].status
				//console.log(JSON.stringify(bay1.status))
				//console.log(bay[0])
			})
			.catch(error => { 
				console.log("Bay Info: " + error);
			})
			
		fetch('https://data.melbourne.vic.gov.au/resource/ntht-5rk7.json?bayid=' + bay[i].bayID)
			.then(res => res.json())
			.then(json => {
				//console.log(json),
				timesBay[i].starttime1 = json[0].starttime1,
				timesBay[i].starttime2 = json[0].starttime2,
				timesBay[i].starttime3 = json[0].starttime3,
				timesBay[i].endtime1 = json[0].endtime1,
				timesBay[i].endtime2 = json[0].endtime2,
				timesBay[i].endtime3 = json[0].endtime3,
				timesBay[i].typedesc1 = json[0].typedesc1,
				timesBay[i].typedesc2 = json[0].typedesc2,
				timesBay[i].typedesc3 = json[0].typedesc3
				//console.log(timesBay[i])
			})

			.catch(error => {
				console.log("Restriction Info: " + error);
			})
		
		if(currentTime >= timesBay[i].starttime1 && currentTime < timesBay[i].endtime1){
			bay[i].restriction_duration = timesBay[i].typedesc1;
		}else if(currentTime >= timesBay[i].starttime2 && currentTime < timesBay[i].endtime2){
			bay[i].restriction_duration = timesBay[i].typedesc2;
		}else if(currentTime >= timesBay[i].starttime3 && currentTime < timesBay[i].endtime3){
			bay[i].restriction_duration = timesBay[i].typedesc3;
		} else{
			bay[i].restriction_duration = "Error";
		}	
		
		console.log(bay[1].bayID + " : " + bay[1].status + " : " + bay[1].restriction_duration);
		
		//i++;
		//}
		*/
		
		console.log('querying Bay ID ' + bay[0].bayID);
		fetch('https://data.melbourne.vic.gov.au/resource/vh2v-4nfs.json?bay_id=' + bay[0].bayID)
			.then(res => res.json())
			.then( json => {
				//console.log(json),
				//console.log(json[i].status),
				bay[0].status = json[0].status
				//console.log(JSON.stringify(bay1.status))
				//console.log(bay[0])
			})
			.catch(error => { 
				console.log("Bay Info: " + error);
			})
			
		fetch('https://data.melbourne.vic.gov.au/resource/ntht-5rk7.json?bayid=' + bay[0].bayID)
			.then(res => res.json())
			.then(json => {
				//console.log(json),
				timesBay[0].starttime1 = json[0].starttime1,
				timesBay[0].starttime2 = json[0].starttime2,
				timesBay[0].starttime3 = json[0].starttime3,
				timesBay[0].endtime1 = json[0].endtime1,
				timesBay[0].endtime2 = json[0].endtime2,
				timesBay[0].endtime3 = json[0].endtime3,
				timesBay[0].typedesc1 = json[0].typedesc1,
				timesBay[0].typedesc2 = json[0].typedesc2,
				timesBay[0].typedesc3 = json[0].typedesc3
				//console.log(timesBay[0])
			})
			
			.catch(error => {
				console.log("Restriction Info: " + error);
			})
		
		if(currentTime >= timesBay[0].starttime1 && currentTime < timesBay[0].endtime1){
			bay[0].restriction_duration = timesBay[0].typedesc1;
		}else if(currentTime >= timesBay[0].starttime2 && currentTime < timesBay[0].endtime2){
			bay[0].restriction_duration = timesBay[0].typedesc2;
		}else if(currentTime >= timesBay[0].starttime3 && currentTime < timesBay[0].endtime3){
			bay[0].restriction_duration = timesBay[0].typedesc3;
		} else{
			bay[0].restriction_duration = "Error";
		}	
		console.log(bay[0].bayID + " : " + bay[0].status + " : " + bay[0].restriction_duration);
		
		
		console.log('querying Bay ID ' + bay[1].bayID);
		fetch('https://data.melbourne.vic.gov.au/resource/vh2v-4nfs.json?bay_id=' + bay[1].bayID)
			.then(res => res.json())
			.then( json => {
				//console.log(json),
				//console.log(json[i].status),
				bay[1].status = json[0].status
				//console.log(JSON.stringify(bay1.status))
				//console.log(bay[0])
			})
			.catch(error => { 
				console.log("Bay Info: " + error);
			})
			
		fetch('https://data.melbourne.vic.gov.au/resource/ntht-5rk7.json?bayid=' + bay[0].bayID)
			.then(res => res.json())
			.then(json => {
				//console.log(json),
				timesBay[1].starttime1 = json[0].starttime1,
				timesBay[1].starttime2 = json[0].starttime2,
				timesBay[1].starttime3 = json[0].starttime3,
				timesBay[1].endtime1 = json[0].endtime1,
				timesBay[1].endtime2 = json[0].endtime2,
				timesBay[1].endtime3 = json[0].endtime3,
				timesBay[1].typedesc1 = json[0].typedesc1,
				timesBay[1].typedesc2 = json[0].typedesc2,
				timesBay[1].typedesc3 = json[0].typedesc3
				//console.log(timesBay[0])
			})
			
			.catch(error => {
				console.log("Restriction Info: " + error);
			})
		
		if(currentTime >= timesBay[1].starttime1 && currentTime < timesBay[1].endtime1){
			bay[1].restriction_duration = timesBay[1].typedesc1;
		}else if(currentTime >= timesBay[1].starttime2 && currentTime < timesBay[1].endtime2){
			bay[1].restriction_duration = timesBay[1].typedesc2;
		}else if(currentTime >= timesBay[1].starttime3 && currentTime < timesBay[1].endtime3){
			bay[1].restriction_duration = timesBay[1].typedesc3;
		} else{
			bay[1].restriction_duration = "Error";
		}	
		console.log(bay[1].bayID + " : " + bay[1].status + " : " + bay[1].restriction_duration);
	
	
		console.log('querying Bay ID ' + bay[2].bayID);
		fetch('https://data.melbourne.vic.gov.au/resource/vh2v-4nfs.json?bay_id=' + bay[2].bayID)
			.then(res => res.json())
			.then( json => {
				//console.log(json),
				//console.log(json[i].status),
				bay[2].status = json[0].status
				//console.log(JSON.stringify(bay1.status))
				//console.log(bay[0])
			})
			.catch(error => { 
				console.log("Bay Info: " + error);
			})
			
		fetch('https://data.melbourne.vic.gov.au/resource/ntht-5rk7.json?bayid=' + bay[2].bayID)
			.then(res => res.json())
			.then(json => {
				//console.log(json),
				timesBay[2].starttime1 = json[0].starttime1,
				timesBay[2].starttime2 = json[0].starttime2,
				timesBay[2].starttime3 = json[0].starttime3,
				timesBay[2].endtime1 = json[0].endtime1,
				timesBay[2].endtime2 = json[0].endtime2,
				timesBay[2].endtime3 = json[0].endtime3,
				timesBay[2].typedesc1 = json[0].typedesc1,
				timesBay[2].typedesc2 = json[0].typedesc2,
				timesBay[2].typedesc3 = json[0].typedesc3
				//console.log(timesBay[0])
			})
			
			.catch(error => {
				console.log("Restriction Info: " + error);
			})
		
		if(currentTime >= timesBay[2].starttime1 && currentTime < timesBay[2].endtime1){
			bay[2].restriction_duration = timesBay[2].typedesc1;
		}else if(currentTime >= timesBay[2].starttime2 && currentTime < timesBay[2].endtime2){
			bay[2].restriction_duration = timesBay[2].typedesc2;
		}else if(currentTime >= timesBay[2].starttime3 && currentTime < timesBay[2].endtime3){
			bay[2].restriction_duration = timesBay[2].typedesc3;
		} else{
			bay[2].restriction_duration = "Error";
		}	
		
		console.log(bay[2].bayID + " : " + bay[2].status + " : " + bay[2].restriction_duration);
	
	
	}
	
	
	setInterval(
		function(){
			queryBays(bay);
			publishData(bay);
		}, 10000		//10 seconds (testing)
		//}, 120000		//2 Minutes
	);
	
	
	
	
	
	
	
	
	
	
	
	
	