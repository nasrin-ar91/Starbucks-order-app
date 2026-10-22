import { ProductCard } from "../base/productCard";
import type { Product } from "./home";

export function BillMenu({ cartItems, setCartItems }) {
	return (
		<div className="flex flex-col items-center gap-10 md:gap-6 w-full">
			<p className="text-green-900 font-bold text-6xl md:text-3xl">Bill</p>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-3">
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
			<p className="text-5xl md:text-3xl text-green-900 font-bold">
				{" "}
				Total: $
				{cartItems.reduce((acc: number, currunt: Product) => {
					return acc + currunt.quantity * currunt.price;
				}, 0)}
			</p>
			<button className="bg-amber-200 text-white text-4xl md:text-2xl font-bold p-8 md:p-2 w-full rounded-lg sticky bottom-0 focus:bg-amber-400 cursor-pointer">
				Submit Order
			</button>
		</div>
	);
}
