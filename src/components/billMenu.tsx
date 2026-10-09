import { ProductCard } from "../base/productCard";
import type { Product } from "./home";

export function BillMenu({ cartItems, setCartItems }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<p className="text-green-900 font-bold text-3xl">Bill</p>
			<div className="grid grid-cols-5 gap-3">
				{cartItems.map((item: Product) => (
					<ProductCard
						item={item}
						menuFlag={false}
						key={item.id}
						cartItems={cartItems}
						setCartItems={setCartItems}
					/>
				))}
			</div>
			<p className="text-3xl text-green-900 font-bold">
				{" "}
				Total: $
				{cartItems.reduce((acc: number, currunt: Product) => {
					return acc + currunt.quantity * currunt.price;
				}, 0)}
			</p>
			<button className="bg-amber-200 text-white text-2xl font-bold p-2 w-full rounded-lg sticky bottom-0 focus:bg-amber-400 cursor-pointer">
				Submit Order
			</button>
		</div>
	);
}
