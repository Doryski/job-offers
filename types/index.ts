export type ApplicantType = {
	uuid: string
	name: string
	email: string
	introduction: string
	dateApplied: number
	processInFuture: boolean
	employerId: string
	offerId: string
}
export type EmployerType = {
	uuid: string
	email: string
	companyName: string
	companySize: number
	street: string
	city: string
	dateAdded: number
	offerId: string
}

export type OfferPageDataType = {
	offerId: OfferType['uuid']
	title: OfferType['title']
	tech: OfferType['tech']
	empType: OfferType['empType']
	expLvl: OfferType['expLvl']
	salaryFrom: OfferType['salaryFrom']
	salaryTo: OfferType['salaryTo']
	technology: OfferType['technology']
	description: OfferType['description']
	dateAdded: OfferType['dateAdded']
	employerId: EmployerType['uuid']
	companyName: EmployerType['companyName']
	companySize: EmployerType['companySize']
	street: EmployerType['street']
	city: EmployerType['city']
}
export type OfferType = {
	uuid: string
	title: string
	tech: string
	empType: string
	expLvl: string
	salaryFrom: number
	salaryTo: number
	technology: { tech: string; techLvl: number }[]
	dateAdded: string
	description: string
	employerId: string
}
export type ParamsType = {
	location?: string
	tech?: string
	expLvl?: string
	from?: number
	to?: number
	sort?: string
	search?: string
}
export type Query = {
	query: string
	value: string
}
export type Filter = { param: string | number; operation: boolean }

export type SliderType = [number, number]
