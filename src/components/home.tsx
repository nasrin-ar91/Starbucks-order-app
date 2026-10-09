import { useState } from "react";
import { BillMenu } from "./billMenu";
import { MainMenu } from "./mainMenu";
import { Header } from "./shared/header";
import { PRODUCT_DATA } from "../constanse/productData";

export type Product = {
	name: string;
	img: string;
	price: number;
	quantity: number;
	id: number;
};

export function Home() {
	const [cartItems, setCartItems] = useState<Product[]>(() =>
		PRODUCT_DATA.map((item, index) => ({
			...item,
			id: index + 1,
			quantity: 0,
		})),
	);

	return (
		<div className="flex flex-col items-center gap-2 p-3 w-full h-screen bg-mainpage ">
			<Header />
			<div className="flex flex-col items-center gap-2 overflow-y-auto">
				<MainMenu cartItems={cartItems} setCartItems={setCartItems} />
				<BillMenu cartItems={cartItems} setCartItems={setCartItems} />
			</div>
		</div>
	);
}
