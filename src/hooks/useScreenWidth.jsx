import { useEffect, useState } from 'react';

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const resizeHandler = () => {
		setScreenWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	});
    return screenWidth;
};

export default useScreenWidth;
