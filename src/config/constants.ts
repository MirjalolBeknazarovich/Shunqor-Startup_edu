import { AiFillAmazonCircle, AiOutlineDashboard, AiOutlineDollar } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { FaApplePay, FaBookReader, FaDraftingCompass, FaQuestionCircle } from 'react-icons/fa';
import { MdImportContacts, MdOutlineContactMail } from 'react-icons/md';
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from 'react-icons/si';
import { AnnouncementIcons, CodingIcons, DesignIcons, EngIcons, FinishRightIcon, LaptopIcons, OnlineCourseIcon, OnlineLearningIcon, OnlineStudenticon, PersonIcons, PrintIcons, RightLinecons, RusIcons, TurkIcon, UzbIcons } from 'src/icons';
import { CourseType } from 'src/interface/course.interface';

export const navigation = [
	{
		title: 'sidebar_title_1',
		links: [
			{
				label: 'sidebar_title_1_explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'sidebar_title_1_courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'sidebar_title_1_books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'sidebar_title_1_articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'sidebar_title_2',
		links: [
			{
				label: 'sidebar_title_2_about',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'sidebar_title_2_contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'sidebar_title_2_pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'sidebar_title_2_faq',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
];

export const categories = [
	{
		name: 'design_category',
		id: 1,
		icon: DesignIcons,
	},
	{
		name: 'sales_marketing_category',
		id: 2,
		icon: AnnouncementIcons,
	},
	{
		name: 'development_it_category',
		id: 3,
		icon: CodingIcons,
	},
	{
		name: 'engineering_architecture_category',
		id: 4,
		icon: PrintIcons,
	},
	{
		name: 'personl_development_category',
		id: 5,
		icon: PersonIcons,
	},
	{
		name: 'finance_accounting_category',
		id: 6,
		icon: LaptopIcons,
	},
];

export const coursesFilter = [
	{
		title: 'filter_category_title',
		id: 'category',
		categoryList: [
			{ name: 'fitler_category_item_1', id: 'web-developments' },
			{ name: 'fitler_category_item_2', id: 'mobile-application' },
			{ name: 'fitler_category_item_3', id: 'graphic-design' },
			{ name: 'fitler_category_item_4', id: 'artificial-intelligence' },
		],
	},
	{
		title: 'fitler_rating_title',
		id: 'rating',
		categoryList: [
			{ name: 'fitler_rating_item_1', id: '4.5' },
			{ name: 'fitler_rating_item_2', id: '4' },
			{ name: 'fitler_rating_item_3', id: '3.5' },
			{ name: 'fitler_rating_item_4', id: '3' },
		],
	},
	{
		title: 'filter_language_title',
		id: 'language',
		categoryList: [
			{ name: 'filter_language_item_1', id: 'en' },
			{ name: 'filter_language_item_2', id: 'ru' },
			{ name: 'filter_language_item_3', id: 'uz' },
			{ name: 'filter_language_item_4', id: 'tr' },
		],
	},
	{
		title: 'filter_level_title',
		id: 'level',
		categoryList: [
			{ name: 'filter_level_item_1', id: 'beginner' },
			{ name: 'filter_level_item_2', id: 'medium' },
			{ name: 'filter_level_item_3', id: 'proffessional' },
		],
	},
];

export const courses: CourseType[] = [
	{
		image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
		title: 'JavaScript full course',
		slug: 'javaScript',
		lessonCount: 96,
		totalHour: 13.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 200,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
		title: 'VueJS full course',
		slug: 'vuejs',
		lessonCount: 30,
		totalHour: 10.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
		title: 'ReactJS full course',
		slug: 'reactjs',
		lessonCount: 70,
		totalHour: 19,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.5,
		reviewCount: 150,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
		title: 'VueX full course',
		slug: 'vuex',
		lessonCount: 120,
		totalHour: 24.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
		title: 'Redux full course',
		slug: 'redux',
		lessonCount: 39,
		totalHour: 8.2,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 4.9,
		reviewCount: 120,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
	{
		image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
		title: 'NodeJS full course',
		slug: 'nodejs',
		lessonCount: 56,
		totalHour: 20.6,
		level: 'Beginner',
		price: 20,
		reviewAvarage: 5,
		reviewCount: 250,
		author: {
			firstName: 'Samar',
			lastName: 'Badriddinov',
			avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
		},
	},
];

export const howItWorks = [
	{ title: 'how_it_works_first_step', icon: OnlineCourseIcon },
	{ title: '', icon: RightLinecons },
	{ title: 'how_it_works_second_step', icon: OnlineLearningIcon },
	{ title: '', icon: FinishRightIcon },
	{ title: 'how_it_works_third_step', icon: OnlineStudenticon },
];

export const instructorData = [
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
];

export const testimonialsData = [
	{
		name: 'Samar Badriddinov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Yusuf Khamdamov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Abdulloh Oripov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Shoxrux Yusupov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
];

export const trustedCompeny = [
	AiFillAmazonCircle,
	SiAmd,
	SiCisco,
	FaApplePay,
	SiLogitech,
	SiSpotify,
];

export const language = [
	{ nativeLng: 'English', lng: 'en', icon: EngIcons },
	{ nativeLng: "O'zbek", lng: 'uz', icon: UzbIcons },
	{ nativeLng: 'Türkçe', lng: 'tr', icon: TurkIcon },
	{ nativeLng: 'Русский', lng: 'ru', icon: RusIcons },
];

export const booksCategory = [
	{
		label: 'filter_all_category',
		id: 'all-categories',
	},
	{
		label: 'filter_programmin',
		id: 'programming',
	},
	{
		label: 'filter_design',
		id: 'design',
	},
	{
		label: 'filter_business',
		id: 'business',
	},
	{
		label: 'filter_history',
		id: 'history',
	},
	{
		label: 'filter_writing',
		id: 'writing',
	},
	{
		label: 'filter_lifestyle',
		id: 'lifestyle',
	},
];

export const dataBooksCard = [
	{
		name: 'JavaScript - Design Pattern',
		image: 'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
		category: 'programming',
		price: 10,
	},
	{
		name: 'Proffessional ReactJS',
		image: 'https://e1.pxfuel.com/desktop-wallpaper/595/427/desktop-wallpaper-js-posted-by-samantha-johnson-reactjs.jpg',
		category: 'programming',
		price: 40,
	},
	{
		name: 'HTML CSS - Web',
		image: 'https://t3.ftcdn.net/jpg/04/86/60/44/360_F_486604480_EKKklldKqiwmvAunlEeF4QdI0dfjDojA.jpg',
		category: 'programming',
		price: 15,
	},
	{
		name: 'Backend Programming',
		image: 'http://wbsimms.com/wp-content/uploads/2016/07/NodeJsBackground.png',
		category: 'programming',
		price: 30,
	},

	{
		name: 'Proffessional Photoshop',
		image: 'https://wallpaperaccess.com/full/1533478.jpg',
		category: 'design',
		price: 90,
	},
	{
		name: 'Illustrator',
		image: 'https://images5.alphacoders.com/114/1147598.png',
		category: 'design',
		price: 20,
	},
	{
		name: 'Premier Pro',
		image: 'https://wallpaperaccess.com/full/3539123.jpg',
		category: 'design',
		price: 15,
	},

	{
		name: 'Startup',
		image: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg',
		category: 'business',
		price: 30,
	},
	{
		name: 'Business idea',
		image: 'https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan-thumbnail.jpg',
		category: 'business',
		price: 24,
	},
	{
		name: 'Growth your plan',
		image:
			'https://online.stanford.edu/sites/default/files/styles/figure_default/public/you-have-a-business-idea-webinar-hero-image.jpg?itok=OaDnVEt0',
		category: 'business',
		price: 15,
	},

	{
		name: 'The History Of Website',
		image:
			'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		category: 'history',
		price: 30,
	},
	{
		name: 'Internet',
		image: 'https://wallpapercave.com/wp/G2c4FdC.jpg',
		category: 'history',
		price: 54,
	},
	{
		name: 'Difference Web And Web-app',
		image: 'https://wallpapercave.com/wp/wp4312426.jpg',
		category: 'history',
		price: 12,
	},

	{
		name: 'Writing An Essay',
		image:
			'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80',
		category: 'writing',
		price: 54,
	},
	{
		name: 'Professional Essay',
		image: 'https://wallpapercave.com/wp/wp7110644.jpg',
		category: 'writing',
		price: 12,
	},
];

export const faq = [
	{
		question: 'faq_question_1',
		answer: 'faq_answer_1',
	},
	{
		question: 'faq_question_2',
		answer: 'faq_answer_2',
	},
	{
		question: 'faq_question_3',
		answer: 'faq_answer_3',
	},
	{
		question: 'faq_question_4',
		answer: 'faq_answer_4',
	},
	{
		question: 'faq_question_5',
		answer: 'faq_answer_5',
	},
	{
		question: 'faq_question_6',
		answer: 'faq_answer_6',
	},
	{
		question: 'faq_question_7',
		answer: 'faq_answer_7',
	},
];

export const avatars = [
	{
		name: 'Ryan Florence',
		url: 'https://bit.ly/ryan-florence',
	},
	{
		name: 'Segun Adebayo',
		url: 'https://bit.ly/sage-adebayo',
	},
	{
		name: 'Kent Dodds',
		url: 'https://bit.ly/kent-c-dodds',
	},
	{
		name: 'Prosper Otemuyiwa',
		url: 'https://bit.ly/prosper-baba',
	},
	{
		name: 'Christian Nwamba',
		url: 'https://bit.ly/code-beast',
	},
];

export const voiceLanguages = [
	{
		language: 'en',
		codes: 'en-US',
		voiceUrl: 'Google US English',
	},
	{
		language: 'ru',
		codes: 'ru-RU',
		voiceUrl: 'Google русский',
	},
];