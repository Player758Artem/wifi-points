const mysql = require('mysql2');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test1',
    password: 'Y69bs2xkxk'
});

conn.connect(err =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Connect ok')
    }
});