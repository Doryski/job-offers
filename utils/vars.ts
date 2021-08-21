const DATE_FORMAT = 'DD.MM.YYYY'
const FIELD_REQUIRED_ERR = ' is a required field.'
const VAL_TOO_BIG_ERR = 'Value is too big.'
const VAL_IS_ZERO_ERR = 'Value should be more than 0.'
const MAX_SLIDER_VALUE = 50000
const EMP_TYPE_OPTIONS = ['B2B', 'UoP', 'UZ', 'UoD']
const EXP_LVL_OPTIONS = ['Junior', 'Mid', 'Senior']
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
const UNAUTHORIZED_ERROR =
	'You need to be signed in to have access to this data.'
const ICON_SIZE = 'small'
const FILTER_NAMES = ['search', 'location', 'expLvl', 'from', 'to', 'tech']
const isClient = typeof window !== 'undefined'

const LOCATIONS = [
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

const NAV_LINKS = [{ title: 'Offers', path: '/' }]

const SORT_OPTIONS = [
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

const TECH_LVL_OPTIONS = [
	{ id: 1, title: 'Nice to have' },
	{ id: 2, title: 'Junior' },
	{ id: 3, title: 'Regular' },
	{ id: 4, title: 'Advanced' },
	{ id: 5, title: 'Expert' },
]

const TECHNOLOGIES = [
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

export {
	DATE_FORMAT,
	FIELD_REQUIRED_ERR,
	VAL_TOO_BIG_ERR,
	VAL_IS_ZERO_ERR,
	MAX_SLIDER_VALUE,
	EMP_TYPE_OPTIONS,
	EXP_LVL_OPTIONS,
	EMAIL_REGEX,
	PASSWORD_REGEX,
	UNAUTHORIZED_ERROR,
	ICON_SIZE,
	FILTER_NAMES,
	isClient,
	LOCATIONS,
	NAV_LINKS,
	SORT_OPTIONS,
	TECH_LVL_OPTIONS,
	TECHNOLOGIES,
}
