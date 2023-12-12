import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./ArchSm.css";
import data from "../../data.json";
import "../../i18n.js";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function PersonOfDay() {
	const { t, i18n } = useTranslation();
	const keys = Object.keys(data);
	let index = getRandomInt(5);
	let id = keys[index];
	return (
		<Stack className="person-section">
			<h2 className="heading_person-section">{t("person_of_day")}</h2>
			<Card className="person-card">
				<Card.Img
					src={require(`../../img/${id}/fface.png`)}
					className="person-photo"
				/>
				<Card.Body className="person-info">
					<Card.Title className="person-name">
						{t(`architects.${id}.surname`)} {t(`architects.${id}.name`)}
					</Card.Title>
					<Card.Text className="person-years">
						{data[id]["birthYear"]} - {data[id]["deathYear"]}
					</Card.Text>
					<Card.Text className="person-description">
						{t(`architects.${id}.shortDescription`)}
					</Card.Text>
					<Button className="button-more" as={Link} to={`architects/${id}`}>
						{t("personButton")}
					</Button>
				</Card.Body>
			</Card>
		</Stack>
	);
}

export default PersonOfDay;
