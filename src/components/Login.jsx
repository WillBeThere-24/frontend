import { useState } from 'react';
import { ClosedEye, OpenedEye } from './common/svg';
import useStore from '../utils/store/useStore';
import { useNavigate } from 'react-router-dom';
import showToast from '../utils/showToast';
import usePost from '../utils/hooks/usePost';
import { BASEURL } from '../utils/constants';

const Login = ({ handleTabChange }) => {
	const setCurrentUser = useStore((state) => state.setUser);
	const { postData, loading  } = usePost();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		emailAddress: '',
		password: '',
		showPassword: false,
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		showToast.loading('Logging In...');
		const userDetails = {
			email: formData.emailAddress,
			password: formData.password,
		};
		try {
			const result = await postData(`${BASEURL}/auth/login`, userDetails);
			setCurrentUser(result.data);
			navigate('/dashboard');
			showToast.success('Welcome Back');
		} catch (error) {
			showToast.error(error.message);
			console.log(error);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => {
			return { ...prevData, [name]: value };
		});
	};
	const togglePassword = () => {
		setFormData((prevState) => {
			return { ...prevState, showPassword: !prevState.showPassword };
		});
	};
	console.log(formData);
	return (
		<form action="" onSubmit={handleSubmit} className="flex flex-col py-8">
			<label
				htmlFor="mail"
				className="uppercase text-wybt-primary font-[500] mb-1"
			>
				Email Address
			</label>
			<input
				type="email"
				name="emailAddress"
				id="mail"
				placeholder="Enter Email"
				className="border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 bg-wybt-white"
				onChange={handleChange}
				value={formData.emailAddress}
			/>
			<div className="relative flex flex-col">
				<label
					htmlFor="password"
					className="uppercase text-wybt-primary font-[500] mb-1 "
				>
					Password
				</label>
				<input
					type={formData.showPassword ? 'text' : 'password'}
					name="password"
					id="password"
					placeholder="Enter Password"
					className="bg-wybt-white border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 pr-10"
					value={formData.password}
					onChange={handleChange}
				/>
				<button
					className="absolute right-0 flex items-center px-3 bg-transparent focus:outline-none"
					onClick={togglePassword}
					type='button'
				>
					{formData.showPassword ? <ClosedEye /> : <OpenedEye />}
				</button>
			</div>
			<button disabled={loading} className="bg-wybt-primary text-wybt-white p-2 rounded-lg disabled:bg-wybt-accent ">
				Log In
			</button>
			<span className="text-center py-2  text-wybt-light-gray">Or</span>
			<div className="flex flex-col gap-5">
				<button disabled={loading} className="bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border disabled:bg-wybt-accent">
					Log in with Google
				</button>
			</div>
			<p className="text-wybt-light-gray mt-5 text-sm">
				Your privacy is important to us. We never sell your data.
			</p>
			<p className="text-wybt-primary">
				Doesn&apos;t have an account ?{' '}
				<span
					onClick={() => handleTabChange('signup')}
					className="cursor-pointer font-semibold"
				>
					{' '}
					Sign Up
				</span>
			</p>
		</form>
	);
};

export default Login;
