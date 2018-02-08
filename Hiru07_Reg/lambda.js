let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	//added comments
	kinesis.putRecord({
		Data: 'Testedit2',
		PartitionKey: 'shardId-000000000001',
		StreamName: 'Hiru_test_1'
	}).promise()
		.then(data => {
			// your logic goes here
			console.log('test : ', data);
			callback(null, data);
		})
		.catch(err => {
			// error handling goes here
			console.log('sample : ', err);
			callback(null, err);
		});


	//callback(null, 'Successfully executed');
}