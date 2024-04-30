import './style.css';

function Toogle({ id, isAttending , handleChange, loading }) {
	return (
		<div className={`flex relative top-2 right-1 items-center justify-center ${loading && "opacity-50"}`}>
			
			<div className="toggle-switch">
				<input
					className="toggle-input"
					id={`toggle-${id}`}
					type="checkbox"
					name={`toggle-${id}`}
					checked={isAttending}
					onChange={handleChange}
					disabled={loading}
				/>
				<label className="toggle-label" htmlFor={`toggle-${id}`}></label>
			</div>
			<p
				className={`text-sm  border ${
					isAttending
						? 'text-green-700 bg-green-100  border-green-500'
						: 'text-red-700 bg-red-100  border-red-500'
				} px-3 py-1 rounded-md shadow-lg`}
			>
				{isAttending? "Attending": "Absent"}
			</p>
		</div>
	);
}
export default Toogle;
