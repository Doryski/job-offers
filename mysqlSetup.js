// @ts-ignore
const mysql = require('mysql2')

const db = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DATABASE,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	// socketPath: '/cloudsql/' + process.env.CLOUD_SQL_CONNECTION_NAME,
})

db.connect(function (err) {
	if (err) {
		return console.log(err)
	}
	console.log('Connected!')
})

module.exports.db = db
