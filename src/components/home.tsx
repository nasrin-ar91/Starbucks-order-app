import { MainMenu } from "./mainMenu";
import { Header } from "./shared/header";

export function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<Header />
			<MainMenu />
		</div>
	);
}
