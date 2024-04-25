import './style.css';

function Loader({ className }) {
	return (
		<div className={`linear-progress small ${className}`}>
			<div className="bar bar1"></div>
			<div className="bar bar2"></div>
		</div>
	);
}
export default Loader;
