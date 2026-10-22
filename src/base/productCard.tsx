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
		<div className="bg-green-900 flex flex-col items-center gap-2 p-3 pb-8 rounded-xl w-full">
			<img
				src={`/images/${item.name}.png`}
				alt={item.name}
				className="w-full md:w-50"
			/>
			<div className="flex flex-col items-start gap-5 w-full">
				<h4 className="text-white text-5xl md:text-xl font-bold px-10 md:px-3">
					{item.name}
				</h4>
				<h3 className="text-amber-100 text-5xl md:text-2xl px-10 md:px-3">
					${item.price}
				</h3>
				{menuFlag && (
					<div className="flex justify-center px-3 py-1 w-full ">
						<button
							onClick={() => handleAddItem(item)}
							className="bg-amber-100 w-45 md:w-25 text-black text-4xl md:text-xl font-bold text-center p-6 md:p-3 rounded-l-lg cursor-pointer"
						>
							+
						</button>
						<p className="bg-white w-45 md:w-25 text-center text-black text-4xl md:text-xl p-6 md:p-3">
							{item.quantity}
						</p>
						<button
							onClick={() => handleReduceItem(item)}
							className="bg-amber-100 w-45 md:w-25 text-black text-4xl md:text-xl font-bold text-center p-6 md:p-3 rounded-r-lg cursor-pointer"
						>
							-
						</button>
					</div>
				)}
				{!menuFlag && (
					<div className="text-white text-5xl md:text-xl font-semibold px-10 md:px-3">
						Qty:{item.quantity}
					</div>
				)}
			</div>
		</div>
	);
}
