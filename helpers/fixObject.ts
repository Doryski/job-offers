import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2'

export default function fixObject(
	object:
		| RowDataPacket[]
		| RowDataPacket[][]
		| OkPacket
		| OkPacket[]
		| ResultSetHeader
		| Object
		| Array<any>
) {
	return JSON.parse(JSON.stringify(object))
}
