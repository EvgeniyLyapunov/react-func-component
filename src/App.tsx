import { FC, useState } from 'react';

import ShopItem from './components/ShopItem';
import ShopItemClass from './components/ShopItemClass';
import { IShopItem } from './types/ShopItem';

import './App.css';

const App: FC = () => {
	const [changeColor, setChangeColor] = useState<boolean>(false);
	const item: IShopItem = {
		brand: 'Tiger of Sweden',
		title: 'Leonard coat',
		description: 'Minimalistic coat in cotton-blend',
		descriptionFull:
			"Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
		price: 399,
		currency: '£',
	};
	return (
		<div className='container'>
			<div className='background-element'></div>
			<div className={!changeColor ? 'highlight-window' : 'highlight-window-blue'}>
				<div className={!changeColor ? 'highlight-overlay' : 'highlight-overlay-blue'}></div>
			</div>
			<div className='window'>
				{!changeColor && <ShopItem item={item} />}
				{changeColor && <ShopItemClass item={item} />}
				<button className='button' onClick={() => setChangeColor(!changeColor)}>
					Other colors
				</button>
			</div>
		</div>
	);
};

export default App;
