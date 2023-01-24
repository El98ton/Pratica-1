const fstat= require('fs');

const requestHandler = (req , res) => {

    const url= req.url;
    const method = req.method;

    if(url === '/') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Enter message</title>');
    res.write('</head>');
    res.write('<body><h2>Hello developer!!</h2></body>');
    res.write('<body><form action="/create-user" method="POST" ><input type="text" name="create-user" placeholder="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    res.end();
    }
    else if(url ==='/user'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title> Enter message</title>');
        res.write('</head>')
        res.write('<body><ul><li>Odair</li><li>Cardoso</li><li>Antonio</li></ul></body>');
        res.write('</html>');
        res.end();
        
    }
    else if(url ==='/create-user' && method === 'POST'){
    
        const body=[];

        req.on('data', (inputdata) => {
            console.log(inputdata);
            body.push(inputdata);
        });
    
        req.on('end', () => {
            const parsedBody= Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            console.log(message);
            
        });
    
    
    }
};

module.exports= {
    handler: requestHandler,
    someText:"some hard coded"
}
