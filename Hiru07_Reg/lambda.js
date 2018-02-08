let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	kinesis.describeStream({
		StreamName: 'Hiru_test',
		ExclusiveStartShardId: 'shardId-000000000000'
	}).promise()
		.then(data => {
			// your logic goes here
		})
		.catch(err => {
			// error handling goes here
		});



	//callback(null, 'Successfully executed');
}