import { AiOutlineDashboard, AiOutlineDollar } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { FaBookReader, FaDraftingCompass, FaQuestionCircle } from 'react-icons/fa';
import { MdImportContacts, MdOutlineContactMail } from 'react-icons/md';

export const navigation = [
	{
		title: 'General',
		links: [
			{
				label: 'Explore',
				route: '/',
				icon: AiOutlineDashboard,
			},
			{
				label: 'Courses',
				route: '/courses',
				icon: CiViewList,
			},
			{
				label: 'Books',
				route: '/books',
				icon: FaBookReader,
			},
			{
				label: 'Articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		],
	},
	{
		title: 'Pages',
		links: [
			{
				label: 'About',
				route: '/about',
				icon: FaDraftingCompass,
			},
			{
				label: 'Contact',
				route: '/contact',
				icon: MdOutlineContactMail,
			},
			{
				label: 'Pricing',
				route: '/pricing',
				icon: AiOutlineDollar,
			},
			{
				label: 'Faq',
				route: '/faq',
				icon: FaQuestionCircle,
			},
		],
	},
];