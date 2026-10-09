import { ProductCard } from "../base/productCard";
import type { Product } from "./home";

export function MainMenu({ cartItems, setCartItems }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<p className="text-green-900 font-bold text-3xl">
				Starbucks Online Coffee Order
			</p>
			<div className="grid grid-cols-5 gap-3">
				{cartItems.map((item: Product) => (
					<ProductCard
						item={item}
						menuFlag={true}
						key={item.id}
						cartItems={cartItems}
						setCartItems={setCartItems}
					/>
				))}
			</div>
		</div>
	);
}
