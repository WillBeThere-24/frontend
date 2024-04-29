import showToast from './showToast';

const handleCopy = async (e, text) => {
   e.stopPropagation()
	try {
		await navigator.clipboard.writeText(text);
		showToast.success('Copied Event Link');
	} catch (err) {
		showToast.error("Couldn't copy link");
	}
};
export default handleCopy;
