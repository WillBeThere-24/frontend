import './style.css';

function Toogle({ id, isAttending , handleChange }) {
	return (
		<div className="flex absolute top-2 right-1 items-center justify-center">
			<p
				className={`text-sm  border ${
					isAttending
						? 'text-green-700 bg-green-100  border-green-500'
						: 'text-red-700 bg-red-100  border-red-500'
				} px-3 py-1 rounded-md shadow-lg`}
			>
				{isAttending? "Attending": "Absent"}
			</p>
			<div className="toggle-switch">
				<input
					className="toggle-input"
					id={`toggle-${id}`}
					type="checkbox"
					name={`toggle-${id}`}
					checked={isAttending}
					onChange={handleChange}
				/>
				<label className="toggle-label" htmlFor={`toggle-${id}`}></label>
			</div>
		</div>
	);
}
export default Toogle;
