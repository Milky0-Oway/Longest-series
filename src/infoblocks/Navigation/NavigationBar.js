import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import rus from "../../img/flagRus.svg";
import eng from "../../img/flagEng.svg";
import "./NavigationBar.css";
import { useTranslation } from "react-i18next";
import "../../i18n.js";

function NavigationBar() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<Navbar as="header" expand="lg" className="nav">
				<Container>
					<img src={logo} alt="logo" className="logo" />
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link to="" className="nav-link">
								{t("home_page")}
							</Link>
							<Link to="architects" className="nav-link">
								{t("list_of_arch")}
							</Link>
						</Nav>
						<div className="nav-languages">
							<Nav.Link
								className="lang"
								onClick={() => i18n.changeLanguage("ru")}
							>
								<img src={rus} alt="russian" className="flag" />
								<span>{t("russian_lang")}</span>
							</Nav.Link>

							<Nav.Link
								className="lang"
								onClick={() => i18n.changeLanguage("en")}
							>
								<img src={eng} alt="english" className="flag" />
								<span>{t("english_lang")}</span>
							</Nav.Link>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</>
	);
}

export default NavigationBar;
