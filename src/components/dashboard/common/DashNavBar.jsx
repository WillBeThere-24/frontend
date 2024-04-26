import WBT from '../../../assets/WBT.png';
import useStore from '../../../utils/store/useStore';

const DashNavBar = () => {
  const currentUser = useStore(state => state.user)
	return (
		<nav className="flex justify-between h-[10vh] py-10 md:px-14 px-8 w-full items-center mb-14 sticky top-0 shadow-md bg-white z-50">
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
			<div className="flex items-center justify-center gap-3 ">
				<span className="">
					<img
						className="w-10 h-10 rounded-full"
						src="/images/no-profile.jpg"
						alt=""
					/>
				</span>
				<div className="hidden md:block">
					<p className="font-bold">{currentUser.name}</p>
					<span className="text-sm block text-gray-500 ">
						{currentUser.email}
					</span>
				</div>
			</div>
		</nav>
	);
};

export default DashNavBar;
