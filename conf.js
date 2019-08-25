/*jslint node: true */
"use strict";
exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;
exports.bFaster=true;
exports.storage = 'sqlite';

// TOR is recommended.  If you don't run TOR, please comment the next two lines
//exports.socksHost = '127.0.0.1';
//exports.socksPort = 9050;

exports.WS_PROTOCOL = 'wss://',
exports.hub = 'obyte.org/bb-test',
//exports.WS_PROTOCOL = 'ws://',
//exports.hub = '172.17.0.1:6611',
exports.deviceName = 'Mock attestation bot';
exports.permanent_pairing_secret = '0000';
exports.control_addresses = [''];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';

exports.bIgnoreUnpairRequests = true;
exports.bSingleAddress = false;
exports.bStaticChangeAddress = true;
exports.KEYS_FILENAME = 'keys.json';

//email
exports.useSmtp = false;
exports.admin_email = '';
exports.from_email = '';

// witnessing
exports.bRunWitness = false;
exports.THRESHOLD_DISTANCE = 20;
exports.MIN_AVAILABLE_WITNESSINGS = 100;


exports.priceInUSD = 0.0005;
exports.rewardInUSD = 2;
exports.referralRewardInUSD = 2;

// set this in conf.json
exports.salt = null;

exports.webPort = 8080;
