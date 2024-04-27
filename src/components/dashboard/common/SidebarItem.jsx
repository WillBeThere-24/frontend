import { NavLink } from 'react-router-dom';
import useStore from '../../../utils/store/useStore';

const SidebarItem = ({ icon, title, link }) => {
	const setSideBar = useStore(state=> state.setSideBar)
	const handleClick =()=> {
		setSideBar(false)
	}
	return (
		<NavLink onClick={handleClick} className={`pl-6 gap-3 flex items-center py-3 hover:bg-slate-100 `} to={link}>
			<img className='w-7 block' src={icon} alt="" />
			<h2 className="text-md  text-wybt-primary ">{title}</h2>
		</NavLink>
	);
};

export default SidebarItem;
