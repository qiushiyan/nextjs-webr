import { WebR } from "@r-wasm/webr";

export default async function Home() {
	const webr = new WebR();
	await webr.init();

	return <div>loaded</div>;
}
