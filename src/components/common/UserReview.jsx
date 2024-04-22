function UserReview({ name, title, review, imageUrl }) {
	return (
		<div className="border border-gray-300 rounded-xl px-6 pb-4 lg:w-[22rem] h-[17rem] mb-20">
			<div className="text-center relative bottom-10">
				<img
					className="w-20 h-20 rounded-full object-cover block mx-auto border-3 border-wybt-white shadow-xl"
					src={imageUrl}
					alt=""
				/>
				<h1 className="mt-4 font-bold">{name}</h1>
				<p className="text-sm text-gray-500">{title}</p>
			</div>
			<p className="relative bottom-5 text-center  text-wybt-primary">
				{review}
			</p>
		</div>
	);
}
export default UserReview;
