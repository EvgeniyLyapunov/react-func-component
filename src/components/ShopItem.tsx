import { FC } from 'react';
import { IShopItem } from '../types/ShopItem';

interface IProps {
	item: IShopItem;
}

const ShopItem: FC<IProps> = ({ item }) => {
	const { brand, title, description, descriptionFull, price, currency } = item;
	return (
		<div className='main-content'>
			<h2>{brand}</h2>
			<h1>{title}</h1>
			<span>Black color</span>
			<h3>{description}</h3>
			<div className='description'>{descriptionFull}</div>
			<div className='highlight-window mobile'>
				<div className='highlight-overlay'></div>
			</div>
			<div className='divider'></div>
			<div className='purchase-info'>
				<div className='price'>{currency + price}</div>
				<button>Добавить в корзину</button>
			</div>
		</div>
	);
};

export default ShopItem;
