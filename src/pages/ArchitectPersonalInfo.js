import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "./ArchitectPersonalInfo.css";
import data from "../data.json";
import "../i18n.js";
import { useParams } from "react-router-dom";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Carousel from "react-bootstrap/Carousel";
import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";

import { useTranslation } from "react-i18next";

function ArchitectPersonalInfo() {
	const { t, i18n } = useTranslation();
	const params = useParams();
	const id = params.id;
	const info = t(`architects.${id}.info`, { returnObjects: true });
	const captions = t(`architects.${id}.captions`, { returnObjects: true });
	return (
		<Stack className="architect-section">
			<Card className="architect-card">
				<Card.Img
					src={require(`../img/${id}/fface.png`)}
					className="architect-photo"
				/>
				<Card.Body className="architect-info">
					<Card.Title className="architect-name">
						{t(`architects.${id}.surname`)} {t(`architects.${id}.name`)}{" "}
						{t(`architects.${id}.patronymic`)}
					</Card.Title>
					<Card.Text className="architect-years">
						{data[id]["birthDate"]} - {data[id]["deathDate"]}
					</Card.Text>
					<Card.Text className="architect-description">
						{t(`architects.${id}.longDescription`)}
					</Card.Text>
				</Card.Body>
			</Card>
			<VerticalTimeline
				lineColor="rgb(255, 165, 0)"
				layout="1-column-left"
				className="vertical-info"
			>
				{data[id]["events"].map((time, index) => (
					<VerticalTimelineElement
						key={index}
						date={time}
						dateClassName="vertical-timeline-element-date-element"
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgb(128, 128, 128)",
							color: "#fff",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(128, 128, 128)",
						}}
						iconStyle={{
							background: "rgb(255, 165, 0)",
						}}
					>
						<p>{info[index]}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
			<Carousel interval={null} className="works-carousel">
				{data[id]["gallery"].map((name, index) => (
					<Carousel.Item key={index}>
						<img
							className="carousel-image"
							src={require(`../img/${id}/${name}`)}
							alt={`${index + 1}`}
						/>
						<Carousel.Caption className="carousel-caption">
							<p>{captions[index]}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<div className="video-wrapper">
				<iframe
					className="person-video"
					src={`https://www.youtube.com/embed/${data[id]["videoLink"]}`}
					allow="accelerometer; autoplay, picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<YMaps>
				<Map
					defaultState={{
						center: data[id]["mapCoordinates"],
						zoom: 9,
						controls: ["zoomControl", "fullscreenControl", "typeSelector"],
					}}
					modules={[
						"control.ZoomControl",
						"control.FullscreenControl",
						"control.TypeSelector",
					]}
					className="person-map"
				>
					<Placemark defaultGeometry={data[id]["mapCoordinates"]} />
				</Map>
			</YMaps>
		</Stack>
	);
}

export default ArchitectPersonalInfo;
