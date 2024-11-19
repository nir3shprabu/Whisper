import { Link, useNavigate } from 'react-router-dom';

import { RiUserSearchLine } from 'react-icons/ri';
import { createClassesFromArray } from 'src/lib/utils';
import { requestBrowserNotificationPermissions } from 'src/lib/browserNotification';
import { useApp } from 'src/context/AppContext';
import useCloseChat from 'src/hooks/useCloseChat';
import { useEffect } from 'react';

const centerElement = 'flex flex-col items-center justify-center';

const Start = () => {
	const { app } = useApp();
	const navigate = useNavigate();
	const { handleClose } = useCloseChat();

	useEffect(() => {
		if (app.isSearching) {
			navigate('/searching');
		}

		requestBrowserNotificationPermissions();
	}, []);

	return (
		<div
			className={createClassesFromArray([
				centerElement,
				'bg-light',
				'dark:bg-primary',
				'min-w-[calc(100%-120px)]',
				'text-primary',
				'dark:text-white',
				'min-h-full',
			])}
		>
			<RiUserSearchLine style={{ transform: 'scale(8)' }} className="text-secondary mb-6" />
			<h1 className="text-[calc(1.2vh+1.2vh+1.2vmin)]">Search For Someone</h1>

			<div className="flex items-center gap-6">
				{/* from the below link user will trigger search of another user*/}
				<Link
					to={app.currentChatId ? '/founduser' : '/searching'}
					className={createClassesFromArray([
						centerElement,
						'hover:no-underline',
						'hover:text-black',
						'text-black',
						'text-xl',
						'px-11 py-2',
						'rounded-3xl',
						'transition duration-300 ease-in-out',
						'bg-[#FF9F1C] hover:bg-[#FBBF24]',
					])}
				>
					{app.currentChatId ? 'Open Chat' : 'Start'}
				</Link>

				{app.currentChatId && (
					<button
						onClick={handleClose}
						className="px-11 py-2 border-red border rounded-3xl text-xl hover:bg-red transition hover:text-white"
					>
						Close Chat
					</button>
				)}
			</div>
		</div>
	);
};

export default Start;
