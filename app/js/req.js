$(function(){
    
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
    
    var hey = $('#hey');
    hey.html("A");

    
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //hey.html(body);
            // Print out the response body
            /*
            for(var i=0; i<body.length; i++) {
                if(body[i]['dstatus'] == "on") {
                    app = body[i]['dname'];
                    options2['qs']['pdname'] = app;
                    console.log(body[i]['dstatus'] + ", notepad, " + options2['qs']['pdname']);
                } else {
                    console.log(body[i]['dstatus']);
                }
            }
        
            /*
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
            */

            //console.log(body.length);
        }
    });

    
});