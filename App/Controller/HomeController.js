let connection = require('../databases/db')


exports.index = (req, res) => {
    
    connection.query('SELECT * FROM NOMES', (error, results, fields)=>{

        res.send(results)

    })
    
    
}