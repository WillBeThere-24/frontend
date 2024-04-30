import { useState } from 'react';
import ClosedEye from '/icons/form/Closed-Eye.svg';
import OpenedEye from '/icons/form/Open-Eye.svg';
import useStore from '../utils/store/useStore';
import { useNavigate } from 'react-router-dom';
import showToast from '../utils/showToast';
import usePost from '../utils/hooks/usePost';
import handleGoogleAuth from '../utils/firebase/firebase.google';
import { Link } from 'react-router-dom';

const Login = () => {
	const setCurrentUser = useStore((state) => state.setUser);
	const { postData, loading } = usePost();
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
			const result = await postData(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				userDetails
			);
			setCurrentUser(result.data);
			navigate('/dashboard/overview');
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
	const loginWithGoogle = async () => {
		showToast.loading('Logging in');
		try {
			const userDetails = await handleGoogleAuth();
			console.log(userDetails);
			const result = await postData(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				{ ...userDetails, auth: 'google', name: userDetails.displayName }
			);
			setCurrentUser(result.data);
			navigate('/dashboard/overview');
			showToast.success('Welcome Back');
		} catch (error) {
			showToast.error(error.message);
		}
	};
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
				required
			/>
			<div className="relative flex flex-col">
				<label
					htmlFor="password"
					className="uppercase text-wybt-primary font-[500] mb-1 "
				>
					Password
				</label>
				<div>
					<input
						type={formData.showPassword ? 'text' : 'password'}
						name="password"
						id="password"
						placeholder="Enter Password"
						className="relatisve bg-wybt-white border w-full py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 pr-10"
						value={formData.password}
						onChange={handleChange}
						required
					/>
					<span
						className="absolute right-3 h-1/2 inline ml-[-1.5%] cursor-pointer align-middle items-center px-3 bg-transparent focus:outline-none text-wybt-white-gray"
						onClick={togglePassword}
						type="button"
					>
						{formData.showPassword ? (
							<img src={ClosedEye} alt="" className="p-0 m-0 h-full " />
						) : (
							<img src={OpenedEye} alt="" className="p-0 m-0 h-full " />
						)}
					</span>
				</div>
			</div>
			<button
				disabled={loading}
				className="bg-wybt-primary text-wybt-white p-2 rounded-lg disabled:opacity-50  "
			>
				Log In
			</button>
			<span className="text-center py-2  text-wybt-light-gray">Or</span>
			<div className="flex flex-col gap-5">
				<button
					disabled={loading}
					onClick={loginWithGoogle}
					type="button"
					className="bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border disabled:opacity-50"
				>
					Log in with Google
				</button>
			</div>
			<p className="text-wybt-light-gray mt-5 text-sm">
				Your privacy is important to us. We never sell your data.
			</p>
			<p className="text-wybt-primary">
				Doesn&apos;t have an account ?{' '}
				<Link
					to="/register"
					className="cursor-pointer font-semibold"
				>
					{' '}
					Sign Up
				</Link>
			</p>
		</form>
	);
};

export default Login;
