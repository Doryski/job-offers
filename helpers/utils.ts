export const DATE_FORMAT = 'DD.MM.YYYY'
export const FIELD_REQUIRED_ERR = ' is a required field.'
export const VAL_TOO_BIG_ERR = 'Value is too big.'
export const VAL_IS_ZERO_ERR = 'Value should be more than 0.'
export const MAX_SLIDER_VALUE = 50000
export const EMP_TYPE_OPTIONS = ['B2B', 'UoP', 'UZ', 'UoD']
export const EXP_LVL_OPTIONS = ['Junior', 'Mid', 'Senior']
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
export const UNAUTHORIZED_ERROR =
	'You need to be signed in to have access to this data.'
export const ICON_SIZE = 'small'

export const LOCATIONS = [
	'Warszawa',
	'Kraków',
	'Wrocław',
	'Poznań',
	'Trójmiasto',
	'Śląsk',
	'Białystok',
	'Bielsko-Biała',
	'Bydgoszcz',
	'Lublin',
	'Łódź',
	'Olsztyn',
	'Opole',
	'Rzeszów',
	'Szczecin',
	'Others',
]

export const NAV_LINKS = [{ title: 'Offers', path: '/' }]

export const SORT_OPTIONS = [
	{
		id: 'sal-up',
		name: 'lowest salary',
	},
	{
		id: 'sal-down',
		name: 'highest salary',
	},
	{
		id: '',
		name: 'latest',
	},
]

export const TECH_LVL_OPTIONS = [
	{ id: 1, title: 'Nice to have' },
	{ id: 2, title: 'Junior' },
	{ id: 3, title: 'Regular' },
	{ id: 4, title: 'Advanced' },
	{ id: 5, title: 'Expert' },
]

export const TECHNOLOGIES = [
	'JS',
	'HTML',
	'PHP',
	'Python',
	'Java',
	'Mobile',
	'.Net',
	'C',
	'Ruby',
	'UX/UI',
	'Testing',
	'DevOps',
	'PM',
	'Game',
	'Analytics',
	'Security',
	'Data',
	'Go',
	'Support',
	'Other',
]
