const ws2tcp =  require('./ws2tcp-functionality');

try{
    ws2tcp(8000,'127.0.0.1',5900);
    ws2tcp(5556,'192.168.0.121',5900);
}
catch(e){
    console.log(e);
}
