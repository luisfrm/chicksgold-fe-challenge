import Header from "./components/Header";
import Products from "./components/Products";

function App() {
	return (
		<>
			<Header />

			<main id="main">
				<section id="content">
					<h1>Condimentum consectetur</h1>
					<Products />
				</section>
			</main>
		</>
	);
}

export default App;
