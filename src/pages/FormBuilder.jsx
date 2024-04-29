import { useRef, useState } from 'react';
import timezone from '../utils/timezone.json';
import showToast from '../utils/showToast';
import { usePost } from '../utils/hooks';
import useEvents from '../utils/store/useEvents';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/circle-loader/Loader';

const FirstForm = ({ handleFormChange, formDetails, handleClick }) => {
	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-4">
				Describe your event{' '}
			</h1>
			<div className="mb-5">
				<label className="block text-sm mb-2" htmlFor="name">
					Name
				</label>
				<input
					className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="text"
					onChange={handleFormChange}
					required
					name="name"
					value={formDetails.name}
				/>
			</div>
			<div className="mb-5">
				<label className="block text-sm mb-2" htmlFor="name">
					Description
				</label>
				<textarea
					className="block resize-none w-full h-[5rem] rounded-md border border-wybt-secondary p-3"
					type="text"
					required
					onChange={handleFormChange}
					value={formDetails.description}
					name="description"
				/>
			</div>
			<div className="flex">
				<input
					onChange={handleFormChange}
					value={!formDetails.isPrivate}
					type="checkbox"
					name="isPrivate"
					checked={formDetails.isPrivate}
					id="private"
					className="w-4 h-4 accent-wybt-secondary"
				/>
				<label className="block text-sm mb-2 ml-3" htmlFor="private">
					Do you want to make this event private?
				</label>
			</div>
			<button
				onClick={handleClick}
				type="button"
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const SecondForm = ({ formDetails, handleFormChange, handleClick }) => {
	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-4">
				Set the time for your event{' '}
			</h1>
			<div className="flex justify-center items-end gap-3">
				<div className="w-[70%]">
					<label className="block text-sm" htmlFor="name">
						Event Start
					</label>
					<input
						className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
						type="date"
						required
						name="startDate"
						value={formDetails.startDate}
						onChange={handleFormChange}
					/>
				</div>
				<input
					className="block w-[30%] h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="time"
					required
					name="startTime"
					value={formDetails.startTime}
					onChange={handleFormChange}
				/>
			</div>
			<div className="flex justify-center items-end gap-3 my-4">
				<div className="w-[70%]">
					<label className="block text-sm" htmlFor="name">
						Evnet End
					</label>
					<input
						className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
						type="date"
						required
						name="endDate"
						value={formDetails.endDate}
						onChange={handleFormChange}
					/>
				</div>
				<input
					className="block w-[30%] h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="time"
					required
					name="endTime"
					value={formDetails.endTime}
					onChange={handleFormChange}
				/>
			</div>
			<div>
				<label htmlFor="description">Time zone</label>
				<div className="flex justify-between items-center border border-wybt-secondary rounded-md px-3 py-1 ">
					<img className="block w-5" src="/icons/world.svg" alt="world" />
					<select
						className=" p-3 h-[2.7rem]  w-full outline-none"
						name="timezone"
						required
						value={formDetails.timezone}
						onChange={handleFormChange}
					>
						{timezone.map((item, index) => (
							<option value={item} key={index}>
								{item}
							</option>
						))}
					</select>
				</div>
			</div>
			<button
				type="button"
				onClick={handleClick}
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const ThirdForm = ({ formDetails, handleFormChange, handleClick, setFormDetails }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			// Call your function here
			handleEnterKeyPress();
		}
	};

	const revomveItem =(index)=> {
		const newItems = formDetails.items;
		newItems.splice(index, 1);
		setFormDetails(prev => ({
			...prev,
			items: newItems
		}))
	}

	const handleEnterKeyPress = () => {
		// Perform your desired action 
		if(formDetails.items.length >= 5) {
			showToast.error("Reached Maximum items")
			return
		}
		setFormDetails(prev => ({
			...prev,
			items: [...prev.items, inputValue]
		}))
		// Reset the input value if needed
		setInputValue('');
	};

	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-4">
				Where is your event taking place?{' '}
			</h1>
			<div className="mb-5">
				<label className="block text-sm mb-2" htmlFor="name">
					Event Location
				</label>
				<input
					className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="text"
					required
					value={formDetails.location}
					onChange={handleFormChange}
					name="location"
				/>
			</div>
			<div className="mb-5">
				<label className="block text-sm mb-2" htmlFor="name">
					Event Items
				</label>
				<input
					className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3 placeholder:text-sm"
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					name="location"
					placeholder="Type event and press Enter"
				/>
				<div className="flex flex-wrap">
					{formDetails.items.map((item, index) => (
						<span
							className="px-3 py-1 bg-wybt-accent text-wybt-secondary font-semibold font-montserrat rounded-3xl mx-1 mt-2 text-sm flex justify-center items-center gap-3"
							key={index}
						>
							{item}
							<img
								className="w-2 cursor-pointer invert-[0.32] sepia-[0.43] saturate-[17.81] hue-rotate-[283deg] brightness-[0.87] contrast-[0.94]]"
								src="/icons/cancel.svg"
								onClick={()=>revomveItem(index)}
								alt=""
							/>
						</span>
					))}
				</div>
			</div>
			<button
				type="button"
				onClick={handleClick}
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const FourthForm = ({
	handleClick,
	setFormDetails,
	setFileImage,
	formDetails,
	loading,
}) => {
	const fileInputRef = useRef(null);

	const handleFileInputChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			setFileImage(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormDetails((prev) => ({
					...prev,
					image: reader.result,
				}));
			};
			reader.readAsDataURL(file);
			showToast.loading('Uploading Picture');
			return showToast.success('Upload Successful');
		}
	};

	const handleEditIconClick = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-12">
				Upload the Event Image{' '}
			</h1>
			<img
				className="cursor-pointer w-full h-[22rem] object-contain block mx-auto"
				onClick={handleEditIconClick}
				src={formDetails.image || '/icons/add-image.svg'}
				alt=""
			/>
			<input
				onChange={handleFileInputChange}
				className="hidden"
				ref={fileInputRef}
				type="file"
			/>
			<button
				className="bg-wybt-primary text-white py-3 px-10 mt-12  rounded-lg  block w-full font-bold disabled:opacity-50"
				onClick={handleClick}
				disabled={loading}
			>
				{loading ? (
					<span className="flex justify-center items-center w-full h-6">
						<Loader />
					</span>
				) : (
					'Submit'
				)}
			</button>
		</div>
	);
};

const FormBuilder = () => {
	const [currentForm, setCurrentForm] = useState(1);
	const [fileImage, setFileImage] = useState(null);
	const addNewEvent = useEvents((state) => state.addEvent);
	const [loading, setLoading] = useState(false);
	const setCurrentEvent = useEvents((state) => state.setCurrentEvent);
	const [formDetails, setFormDetails] = useState({
		name: '',
		description: '',
		location: '',
		image: '',
		startDate: '',
		startTime: '',
		endDate: '',
		endTime: '',
		timezone: '',
		items: [],
		isPrivate: false,
	});
	const { postData } = usePost();
	const navigate = useNavigate();

	const handleNext = () => {
		if (currentForm == 4) return;
		setCurrentForm(currentForm + 1);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		e.currentTarget.checkValidity();
		// run api stuff here
		try {
			const formData = new FormData();
			formData.append('image', fileImage);
			formData.append('name', formDetails.name);
			formData.append('description', formDetails.description);
			formData.append('location', formDetails.location);
			formData.append(
				'start',
				new Date(
					`${formDetails.startDate} ${formDetails.startTime}`
				).toISOString()
			);
			formData.append(
				'end',
				new Date(
					`${formDetails.endDate} ${formDetails.endTime}`
				).toISOString()
			);
			formData.append('timezone', formDetails.timezone);
			formData.append('isPrivate', formDetails.isPrivate);
			const { data } = await postData(
				`${import.meta.env.VITE_BASE_URL}/events`,
				formData
			);
			setCurrentEvent(data);
			addNewEvent(data);

			showToast.success('Form Submitted');
			navigate(`/dashboard/events/${data._id}`);
		} catch (error) {
			console.error(error);
			showToast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleFormChange = (e) => {
		const { name, value } = e.currentTarget;
		setFormDetails((prev) => ({
			...prev,
			[name]: name == 'isPrivate' ? !formDetails.isPrivate : value,
		}));
	};

	const handleFormRendering = () => {
		if (currentForm == 1) {
			return (
				<FirstForm
					handleClick={handleNext}
					handleFormChange={handleFormChange}
					formDetails={formDetails}
				/>
			);
		} else if (currentForm == 2) {
			return (
				<SecondForm
					handleClick={handleNext}
					handleFormChange={handleFormChange}
					formDetails={formDetails}
				/>
			);
		} else if (currentForm == 3) {
			return (
				<ThirdForm
					handleClick={handleNext}
					handleFormChange={handleFormChange}
					formDetails={formDetails}
					setFormDetails={setFormDetails}
				/>
			);
		} else if (currentForm == 4) {
			return (
				<FourthForm
					handleClick={handleFormSubmit}
					handleFormChange={handleFormChange}
					formDetails={formDetails}
					setFormDetails={setFormDetails}
					setFileImage={setFileImage}
					loading={loading}
				/>
			);
		} else {
			return (
				<FirstForm
					handleClick={setCurrentForm}
					handleFormChange={handleFormChange}
					formDetails={formDetails}
				/>
			);
		}
	};

	return (
		<main className="w-full pt-8 mb-8">
			<div className="flex gap-10 justify-center items-center px-6">
				<p
					onClick={() => setCurrentForm(1)}
					className={` cursor-pointer hover:text-wybt-accent text-sm ${
						currentForm === 1 ? 'text-wybt-secondary' : 'text-gray-600'
					} font-bold`}
				>
					Event Name
				</p>
				<p
					onClick={() => setCurrentForm(2)}
					className={` cursor-pointer hover:text-wybt-accent text-sm ${
						currentForm === 2 ? 'text-wybt-secondary' : 'text-gray-600'
					} font-bold`}
				>
					Event Time
				</p>
				<p
					onClick={() => setCurrentForm(3)}
					className={` cursor-pointer hover:text-wybt-accent text-sm ${
						currentForm === 3 ? 'text-wybt-secondary' : 'text-gray-600'
					} font-bold`}
				>
					Event Location
				</p>
				<p
					onClick={() => setCurrentForm(4)}
					className={` cursor-pointer hover:text-wybt-accent text-sm ${
						currentForm === 4 ? 'text-wybt-secondary' : 'text-gray-600'
					} font-bold`}
				>
					Event Image
				</p>
			</div>
			<form
				onSubmit={handleFormSubmit}
				className="mx-auto w-full md:w-[65%]"
			>
				{handleFormRendering()}
			</form>
		</main>
	);
};

export default FormBuilder;
