import { useState } from 'react';
import { ClosedEye, OpenedEye } from './common/svg';
import useStore from '../utils/store/useStore';
import { useNavigate } from 'react-router-dom';
import showToast from '../utils/showToast';
import usePost from '../utils/hooks/usePost';
import { BASEURL } from '../utils/constants';

const SignUp = ({ handleTabChange }) => {
	const setCurrentUser = useStore((state) => state.setUser);
	const { postData, loading } = usePost();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		fullName: '',
		emailAddress: '',
		password: '',
		showPassword: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		showToast.loading('Registering User ...');
		console.log(formData);
		const userDetails = {
			name: formData.fullName,
			email: formData.emailAddress,
			password: formData.password,
		};
		try {
			const result = await postData(`${BASEURL}/auth/register`, userDetails);
			setCurrentUser(result.data);
			navigate('/dashboard');
			showToast.success('Registration Successful');
		} catch (error) {
			showToast.error(error.message);
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((oldValue) => {
			return { ...oldValue, [name]: value };
		});
	};

	const togglePassword = () => {
		setFormData((prevState) => {
			return { ...prevState, showPassword: !prevState.showPassword };
		});
	};
	return (
		<form action="" onSubmit={handleSubmit} className="flex flex-col py-8">
			<label
				htmlFor="name"
				className="uppercase text-wybt-primary font-[500] mb-1"
			>
				Full Name
			</label>
			<input
				type="text"
				name="fullName"
				id="name"
				placeholder="Enter Full Name"
				className="border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 bg-wybt-white"
				value={formData.fullName}
				onChange={handleChange}
			/>
			<label
				htmlFor="email"
				className="uppercase text-wybt-primary font-[500] mb-1"
			>
				Email Address
			</label>
			<input
				type="email"
				name="emailAddress"
				id="mail"
				placeholder="Enter Email Address"
				className="border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 bg-wybt-white"
				value={formData.emailAddress}
				onChange={handleChange}
			/>
			<div className="relative flex flex-col z0">
				<label
					htmlFor="password"
					className="uppercase text-wybt-primary font-[500] mb-1"
				>
					Password
				</label>
				<input
					type={formData.showPassword ? 'text' : 'password'}
					name="password"
					id="password"
					placeholder="Enter Password"
					className="border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 pr-10 bg-wybt-white"
					value={formData.password}
					onChange={handleChange}
				/>
				<button
					className="absolute right-0 flex items-center px-3 bg-transparent focus:outline-none text-wybt-white-gray"
					onClick={togglePassword}
				>
					{formData.showPassword ? (
						<ClosedEye className="text-wybt-white-gray" />
					) : (
						<OpenedEye />
					)}
				</button>
			</div>
			<p className="my-2 text-wybt-light-gray text-sm">
				By completing Sign Up,you agree to{' '}
				<a href="/terms" className="underline">
					WBT Terms and Services
				</a>
			</p>
			<button
				disabled={loading}
				className="bg-wybt-primary text-wybt-white p-2 rounded-lg  "
			>
				Sign Up
			</button>
			<span className="text-center py-2  text-wybt-light-gray">Or</span>
			<button
				disabled={loading}
				className="bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border"
			>
				Sign Up with Google
			</button>
			<p className="text-wybt-light-gray mt-5 text-sm">
				Your privacy is important to us.We never sell your data.
			</p>
			<p className="text-wybt-light-primary">
				Already have an account?{' '}
				<span
					onClick={() => handleTabChange('login')}
					className="cursor-pointer font-semibold"
				>
					{' '}
					Log In
				</span>
			</p>
		</form>
	);
};

export default SignUp;
