var username = localStorage.getItem('username');
var login_time = localStorage.getItem('login_time');
var token = localStorage.getItem('token');
var server_addr = localStorage.getItem('server_addr');
var mac = localStorage.getItem('mac');
var flight_id=localStorage.getItem('flight_id');
var crew_id=localStorage.getItem('crew_id');
var user_info = {
	'username': username,
	'login_time': login_time,
	'token': token,
	'mac': mac,
	'flight_id':flight_id
};