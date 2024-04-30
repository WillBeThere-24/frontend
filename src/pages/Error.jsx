import { Link } from 'react-router-dom';

const Error = ({ error, title, text, path, pathText }) => {
	return (
		<div className="w-full bg-wybt-accent bg-opacity-15 z-10 p-5 md:p-20 min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center  text-wybt-primary">
			<div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center gap-4 md:gap-8">
				<p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider ">
					{error}
				</p>
				<p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider  mt-2">
					{title}
				</p>
				<p className="text-lg md:text-xl lg:text-2xl">{text}</p>
				<Link
					to={path}
					className="flex items-center space-x-2 bg-wybt-primary text-wybt-white px-4 py-2 rounded transition duration-500"
				>
					{pathText}
				</Link>
			</div>
			<div className=" -z-10 w-full md:w-1/2 lg:h-full flex lg:items-end justify-center p-4">
				<img src="/icons/error.svg" alt="error" />
			</div>
		</div>
	);
};
export default Error;
