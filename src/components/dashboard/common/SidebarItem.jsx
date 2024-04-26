import { NavLink } from 'react-router-dom';

const SidebarItem = ({ icon, title, link }) => {
	return (
		<NavLink className={`pl-6 gap-3 flex items-center py-3 hover:bg-slate-100 `} to={link}>
			<img className='w-7 block' src={icon} alt="" />
			<h2 className="text-md font-bold text-wybt-primary ">{title}</h2>
		</NavLink>
	);
};

export default SidebarItem;
