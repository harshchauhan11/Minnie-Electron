var request = require('request');
var app = null;

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://preface-prhc.rhcloud.com/pr/getstatus.php',
    method: 'GET',
    json: true,
    headers: headers,
    qs: {'mid': 'MinThings_CF6A'}
}

var options2 = {
    url: 'http://preface-prhc.rhcloud.com/pr/updateMin2.php',
    method: 'GET',
    json: true,
    headers: headers,
    qs: {'uid': '1', 'pdname': '', 'pdstatus': 'off', 'pmpos': 'bedroom'}
}

var requestLoop = setInterval(function(){
// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        for(var i=0; i<body.length; i++) {
            if(body[i]['dstatus'] == "on") {
                app = body[i]['dname'];
                options2['qs']['pdname'] = app;
                console.log(body[i]['dstatus'] + ", notepad, " + options2['qs']['pdname']);
            } else {
                console.log(body[i]['dstatus']);
            }
        }
        if(app == "led1") {
            var cp = require('child_process');
            var child = cp.spawn('C:\\windows\\notepad.exe', '', { detached: true, stdio: [ 'ignore', 'ignore', 'ignore' ] });
            child.unref();
            
            request(options2, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    
                }
            });
            app = null;
        }

        //console.log(body.length);
    }
});
}, 5000);


/*
request({
  uri: "http://preface-prhc.rhcloud.com/pr/getstatus.php",
  method: "POST",
  form: {
    mid: "MinThings_CF6A"
  }
}, function(error, response, body) {
  console.log(body);
});
/*
request("http://preface-prhc.rhcloud.com/pr/getstatus.php?mid=MinThings_CF6A", function(error, response, body) {
  console.log(body);
});

/*
request({
    url: "http://preface-prhc.rhcloud.com/pr/getstatus.php?mid=MinThings_CF6A",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
},function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log('sucess!');
    }else{
        console.log('error' + response.statusCode);
    }
});
*/