exports.run = (msg,Discord,client,color,arg1) => {
    const gis = require('g-i-s');
    gis(arg1, (err, res) => {
       if(err) return;
       var ran = parseInt(Math.floor(Math.random()*res.length));
     //  console.log(JSON.parse(JSON.stringify(res, null, '  ')));
       let img=JSON.parse(JSON.stringify(res, null, '  '));
        msg.channel.send({embed : {
             image: {
                 url: img[ran].url
             },
            color: color
        }});
  })
}
