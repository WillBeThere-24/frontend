import { useRef, useState } from 'react';
import timezone from "../utils/timezone.json";
import showToast from '../utils/showToast';

const FirstForm = () => {
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
				/>
			</div>
			<div>
				<label className="block text-sm mb-2" htmlFor="name">
					Description
				</label>
				<textarea
					className="block resize-none w-full h-[5rem] rounded-md border border-wybt-secondary p-3"
					type="text"
				/>
			</div>
			<button
				type="button"
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const SecondForm = () => {
	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-4">
				Set the time for your event{' '}
			</h1>
			<div className="flex justify-center items-end gap-3">
				<div className='w-[70%]'>
					<label className="block text-sm" htmlFor="name">
						Event Start
					</label>
					<input
						className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
						type="date"
					/>
				</div>
				<input
					className="block w-[30%] h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="time"
				/>
			</div>
      <div className="flex justify-center items-end gap-3 my-4">
				<div className='w-[70%]'>
					<label className="block text-sm" htmlFor="name">
						Time zone
					</label>
					<input
						className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3"
						type="date"
					/>
				</div>
				<input
					className="block w-[30%] h-[2.7rem] rounded-md border border-wybt-secondary p-3"
					type="time"
				/>
			</div>
			<div>

				<label htmlFor="description">Time zone</label>
        <div className='flex justify-between items-center border border-wybt-secondary rounded-md px-3 py-1 '>
          <img className='block w-5' src="/icons/world.svg" alt="world" />
          <select className=' p-3 h-[2.7rem]  w-full outline-none' name="timezone" id="">
            {timezone.map((item, index)=> (
              <option key={index}>{item}</option>
            ))}
          </select>

        </div>
			</div>
			<button
				type="button"
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const ThirdForm = () => {
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
				/>
			</div>
			<button
				type="button"
				className="bg-wybt-primary text-white py-3 px-10 mt-6  rounded-lg  block w-full font-bold"
			>
				Next
			</button>
		</div>
	);
};

const FourthForm = () => {
  const [eventImage, setEventImage] = useState(null);
  const fileInputRef = useRef(null);


  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEventImage(reader.result)
      }
      reader.readAsDataURL(file)
      showToast.loading('Uploading Picture')
      const formData = new FormData()
      formData.append('image', file)
      // const value = await dispatch(setCurrentDoctorProfileImage(formData))
    
      // if (value.error) {
      //   return showToast.error('An Error Occurred')
      // }
      return showToast.success('Upload Successful')
    }
  }

  const handleEditIconClick = () => {
    fileInputRef.current.click()
  }

	return (
		<div className="mt-8">
			<h1 className="text-center font-bold text-3xl font-montserrat text-wybt-primary mb-12">
				Upload the Event Image{' '}
			</h1>
      <img className='cursor-pointer w-full h-[22rem] object-contain block mx-auto'  onClick={handleEditIconClick} src={eventImage || "/icons/add-image.svg"} alt="" />
      <input onChange={handleFileInputChange} className='hidden' ref={fileInputRef} type="file" />
			<button
				type="button"
				className="bg-wybt-primary text-white py-3 px-10 mt-12  rounded-lg  block w-full font-bold"
			>
				Preview
			</button>
		</div>
	);
};

const FormBuilder = () => {
	const [currentForm, setCurrentForm] = useState(1);
	const [formDetails, setFormDetails] = useState({
		name: '',
		description: '',
		location: '',
		image: '',
	});

	const handleFormRendering = () => {
		if (currentForm == 1) {
			return (
				<FirstForm
					setCurrentForm={setCurrentForm}
					setFormDetails={setFormDetails}
				/>
			);
		} else if (currentForm == 2) {
			return (
				<SecondForm
					setCurrentForm={setCurrentForm}
					setFormDetails={setFormDetails}
				/>
			);
		} else if (currentForm == 3) {
			return (
				<ThirdForm
					setCurrentForm={setCurrentForm}
					setFormDetails={setFormDetails}
				/>
			);
		} else if (currentForm == 4) {
			return (
				<FourthForm
					setCurrentForm={setCurrentForm}
					setFormDetails={setFormDetails}
				/>
			);
		} else {
			return (
				<FirstForm
					setCurrentForm={setCurrentForm}
					setFormDetails={setFormDetails}
				/>
			);
		}
	};

	// eslint-disable-next-line no-unused-vars
	const handleNext = () => {
		if (currentForm == 4) return;
		setCurrentForm(currentForm + 1);
	};
	// eslint-disable-next-line no-unused-vars
	const handlePrevious = (e) => {
		if (currentForm == 1) return;
		setCurrentForm(currentForm - 1);
	};
	return (
		<main className="w-full pt-8 mb-8">
			<div className="flex gap-10 justify-center items-center px-6">
				<p
					onClick={() => setCurrentForm(1)}
					className="cursor-pointer hover:text-wybt-accent text-sm text-wybt-secondary font-bold"
				>
					Event Name
				</p>
				<p
					onClick={() => setCurrentForm(2)}
					className="cursor-pointer hover:text-wybt-accent text-sm text-wybt-secondary font-bold"
				>
					Event Time
				</p>
				<p
					onClick={() => setCurrentForm(3)}
					className="cursor-pointer hover:text-wybt-accent text-sm text-wybt-secondary font-bold"
				>
					Event Location
				</p>
				<p
					onClick={() => setCurrentForm(4)}
					className="cursor-pointer hover:text-wybt-accent text-sm text-wybt-secondary font-bold"
				>
					Event Image
				</p>
			</div>
			<form className="mx-auto w-[65%]">{handleFormRendering()}</form>
		</main>
	);
};

export default FormBuilder;
