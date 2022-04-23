import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import HeaderLinks from "./Header/HeaderLinks.js";

const dashboardRoutes = [];

export default function Layout({ children }) {
	return (
		<>
			<Header
			  	color="transparent"
			  	routes={dashboardRoutes}
			  	brand="Botsail.io"
			  	rightLinks={<HeaderLinks />}
			  	fixed
			  	changeColorOnScroll={{
					height: 400,
					color: "white",
			  	}}
			/>

      		{children}
    	</>
  	)
}
