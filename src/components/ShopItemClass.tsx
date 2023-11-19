import { Component } from 'react';
import { IShopItem } from '../types/ShopItem';

interface IProps {
	item: IShopItem;
}

class ShopItemClass extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		const { brand, title, description, descriptionFull, price, currency } = this.props.item;
		return (
			<div className='main-content'>
				<h2>{brand}</h2>
				<h1>{title}</h1>
				<span>Blue color</span>
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
	}
}

export default ShopItemClass;
