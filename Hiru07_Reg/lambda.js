let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	kinesis.putRecord({
		Data: 'Testedit',
		PartitionKey: '001',
		StreamName: 'Hiru_test_1',
		ExplicitHashKey: '012',
		SequenceNumberForOrdering: '123'
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