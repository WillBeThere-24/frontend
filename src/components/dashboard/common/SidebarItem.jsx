import { NavLink, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon, title, link, handleClick }) => {
	const location = useLocation();


	return (
		<NavLink onClick={handleClick} className={`${location.pathname == link && "active__link"} pl-6 gap-3 flex items-center py-3 hover:bg-slate-100 `} to={link}>
			<img className='w-7 block' src={icon} alt="" />
			<h2 className="text-md  text-wybt-primary ">{title}</h2>
		</NavLink>
	);
};

export default SidebarItem;
