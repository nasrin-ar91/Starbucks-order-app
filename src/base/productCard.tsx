import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../components/home";

interface ProductCardProps {
	item: Product;
	menuFlag: boolean;
	cartItems: Product[];
	setCartItems: Dispatch<SetStateAction<Product[]>>;
}

export function ProductCard({
	item,
	menuFlag,
	cartItems,
	setCartItems,
}: ProductCardProps) {
	const handleAddItem = (item: Product): void => {
		setCartItems(
			cartItems.map((cartItem) =>
				cartItem.id === item.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem,
			),
		);
	};

	const handleReduceItem = (item: Product): void => {
		setCartItems(
			cartItems.map((cartItem) =>
				cartItem.id === item.id
					? {
							...cartItem,
							quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
						}
					: cartItem,
			),
		);
	};

	return (
		<div className="bg-green-900 flex flex-col items-center gap-2 p-3 rounded-lg">
			<img src={`/images/${item.name}.png`} alt={item.name} className="w-50" />
			<div className="flex flex-col items-start gap-2 w-full">
				<h4 className="text-white text-xl font-bold">{item.name}</h4>
				<h3 className="text-amber-100 text-xl">${item.price}</h3>
				{menuFlag && (
					<div className="flex justify-center px-3 py-1 w-full ">
						<button
							onClick={() => handleAddItem(item)}
							className="bg-amber-100 w-25 text-black text-xl font-bold text-center p-3 rounded-l-lg cursor-pointer"
						>
							+
						</button>
						<p className="bg-white w-25 text-center text-black text-xl p-3">
							{item.quantity}
						</p>
						<button
							onClick={() => handleReduceItem(item)}
							className="bg-amber-100 w-25 text-black text-xl font-bold text-center p-3 rounded-r-lg cursor-pointer"
						>
							-
						</button>
					</div>
				)}
				{!menuFlag && (
					<div className="text-white text-xl font-semibold">
						Qty:{item.quantity}
					</div>
				)}
			</div>
		</div>
	);
}
