const mysql = require('mysql2')

const isEnvProd = process.env.NODE_ENV === 'production'
const db = mysql.createConnection({
	host: isEnvProd ? process.env.MYSQL_HOST : process.env.MYSQL_LOCAL_HOST,
	port: isEnvProd ? process.env.MYSQL_PORT : process.env.MYSQL_LOCAL_PORT,
	database: isEnvProd
		? process.env.MYSQL_DATABASE
		: process.env.MYSQL_LOCAL_DATABASE,
	user: isEnvProd ? process.env.MYSQL_USER : process.env.MYSQL_LOCAL_USER,
	password: isEnvProd
		? process.env.MYSQL_PASSWORD
		: process.env.MYSQL_LOCAL_PASSWORD,
})

db.connect(err => (err ? console.error(err) : console.log('Connected!')))

module.exports.db = db
