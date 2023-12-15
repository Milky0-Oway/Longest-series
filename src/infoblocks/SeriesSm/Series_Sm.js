import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./Series_Sm.css";
import data from "../../data.json";
import "../../i18n.js";
import { Link } from "react-router-dom";
import {id_day} from "../../pages/Home.js"

import { useTranslation } from "react-i18next";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function PersonOfDay() {
	const { t, i18n } = useTranslation();
	const keys = Object.keys(data);
	let index = id_day;
	let id = keys[index];
	return (
		<Stack className="series-section">
			<h2 className="heading_series-section">{t("Cinema_of_the_day")}</h2>
			<Card className="series-card">
				<Card.Img
					src={require(`../../img/${id}/fface.png`)}
					className="series-photo"
				/>
				<Card.Body className="series-info">
					<Card.Title className="series-name">
						{t(`series.${id}.name`)}
					</Card.Title>
					<Card.Text className="series-years">
						{t(`series.${id}.Start_Series`)} {t(`series.${id}.End_Series`)}
					</Card.Text>
					<Card.Text className="series-description">
						{t(`series.${id}.shortDescription`)}
					</Card.Text>
					<Button className="button-more" as={Link} to={`series/${id}`}>
						{t("Cinema_Button")}
					</Button>
				</Card.Body>
			</Card>
		</Stack>
	);
}

export default PersonOfDay;
