import WBT from '../../../assets/WBT.png';
import useStore from '../../../utils/store/useStore';

const DashNavBar = () => {
	const currentUser = useStore((state) => state.user);
	const setSideBar = useStore((state) => state.setSideBar);
	const sideBarState = useStore((state) => state.sideBarState);
	const handleCloseBar =()=> setSideBar(false);
	const handleOpenBar =()=> setSideBar(true);

	return (
		<nav className="flex justify-between h-[10vh] py-10 md:px-14 px-8 w-full items-center sticky top-0 shadow-md bg-white z-50 dash__nav">
			<div>
				<div>
					<a
						href="/"
						className={` justify-center flex flex-col items-center z- min-w-[6px] relative z-50 `}
					>
						<img src={WBT} alt="WBT Logo" width="62px" />
						<p className="font-[Cinzel] font-[800] text-wybt-primary md:text-[10px] text-center text-nowrap text-[9px] mt-[-4px]">
							WILL BE THERE
						</p>
					</a>
				</div>
			</div>
			<div className=" items-center justify-center gap-3 hidden md:flex">
				<span className="">
					<img
						className="w-10 h-10 rounded-full"
						src="/images/no-profile.jpg"
						alt=""
					/>
				</span>
				<div className="">
					<p className="font-bold">{currentUser.name}</p>
					<span className="text-sm block text-gray-500 ">
						{currentUser.email}
					</span>
				</div>
			</div>
			{!sideBarState && (
				<span onClick={handleOpenBar} className="w-10 h-10 md:hidden ">
					<img className="invert-[.5]" src="/icons/hamburger.svg" alt="" />
				</span>
			)}

			{sideBarState && (
				<span onClick={handleCloseBar} className="w-9 h-9 p-3 bg-slate-300 rounded-full md:hidden ">
					<img
						className="invert brightness-200"
						src="/icons/cancel.svg"
						alt=""
					/>
				</span>
			)}
		</nav>
	);
};

export default DashNavBar;
