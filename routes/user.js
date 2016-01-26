var User=require('./dbSchema');

exports.postUser=function(req,res){
	var testUser= new User()
	testUser.first_name='harish'
	testUser.last_name= 'puli'
	testUser.email='hari@gmail.com'
		testUser.save(function(err,data){
			if (err) console.log(err);
			else console.log('Saved : ', data );
		})	
		
		res.end("done");
}