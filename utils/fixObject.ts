import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2'

const fixObject = (
	object:
		| RowDataPacket[]
		| RowDataPacket[][]
		| OkPacket
		| OkPacket[]
		| ResultSetHeader
): any[] => JSON.parse(JSON.stringify(object))

export default fixObject
