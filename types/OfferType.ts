type OfferType = {
	uuid: string
	tech: string
	title: string
	empType: string
	expLvl: string
	salaryFrom: number
	salaryTo: number
	image: string
	technology: { tech: string; techLvl: number }[]
	dateAdded: string
	descr: string
}

export default OfferType
