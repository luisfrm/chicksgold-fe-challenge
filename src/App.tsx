import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Widgets from "./components/Widgets";

function App() {
	return (
		<>
			<Header />

			<main id="main">
				<section id="content">
					<h1 id="title">Condimentum consectetur</h1>
					<Products />
				</section>
			</main>

			<Footer />
			<Widgets />
		</>
	);
}

export default App;
