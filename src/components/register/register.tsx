import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, HStack, Icon, Input, InputGroup, InputRightElement, Stack, Text, useColorModeValue, } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useShowPassword } from 'src/hooks/useShowPassword';
import { RegisterProps } from './register.props';
import { useActions } from 'src/hooks/useActions';

const Register = ({ onNavigateStateComponent }: RegisterProps) => {
	const { show, toggleShow, showConfirm, toggleShowConfirm } = useShowPassword();
	const { t } = useTranslation();

	const { register } = useActions();

	const onSubmit = () => {
		register({email: "shunqor1@gmail.com", password: "123456"});
	};

	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('register_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('register_description', { ns: 'global' })}
			</Text>
			<FormControl isRequired>
				<FormLabel>{t('login_input_email_label', { ns: 'global' })}</FormLabel>
				<Input focusBorderColor='facebook.500' type='text' placeholder={'info@shunqor.com'} h={14} />
			</FormControl>
			<Flex gap={4}>
				<FormControl isRequired>
					<FormLabel>{t('login_input_password_label', { ns: 'global' })}</FormLabel>
					<InputGroup>
						<Input focusBorderColor='facebook.500' type={!show ? 'password' : 'text'} placeholder={'****'} h={14} />
						<InputRightElement pt={4}>
							<Icon as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>{t('register_input_confirm_password_label', { ns: 'global' })}</FormLabel>
					<InputGroup>
						<Input focusBorderColor='facebook.500' type={!showConfirm ? 'password' : 'text'} placeholder={'****'} h={14} />
						<InputRightElement pt={4}>
							<Icon as={!showConfirm ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShowConfirm} />
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</Flex>
			<HStack justify={'space-between'}>
				<Checkbox colorScheme={'facebook'}>{t('auth_remember_me', { ns: 'global' })}</Checkbox>
				<Box as={'a'} onClick={() => onNavigateStateComponent('account-recovery')} cursor={'pointer'} color={'teal.500'} _hover={{ textDecoration: 'underline' }}>
					{t('auth_forgot_password', { ns: 'global' })}
				</Box>
			</HStack>
			<Button
				w={'full'}
				bgGradient='linear(to-r, facebook.400,gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
				h={14}
				onClick={onSubmit}
			>
				{t('register_btn', { ns: 'global' })}
			</Button>
			<Text>
				{t('register_already_have_account', { ns: 'global' })}{' '}
				<Box
					as={'span'}
					onClick={() => onNavigateStateComponent('login')}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('register_redirect_to_login', { ns: 'global' })}
				</Box>
			</Text>
		</Stack>
	);
};

export default Register;