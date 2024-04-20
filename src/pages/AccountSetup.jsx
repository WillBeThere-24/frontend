import Tabs from '../components/Tabs';
// import tabsData from '../components/tabsData'
// import TabsContent from '../components/TabsContent'
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import aPen from '../assets/A-pen-beside-a-note.png';

const AccountSetup = () => {
	// const data = tabsData

	return (
		<>
			<NavBar />
			<div className="px-8 py-12 md:px-24 block md:flex gap-8 bg-wybt-white font-montserrat">
				<Tabs />
				<div className="md:flex items-center justify-center w-[350px] hidden z-0 m-auto ">
					<img
						src={aPen}
						alt="A pen beside a notebook"
						className="w-[350px] self-center"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AccountSetup;
