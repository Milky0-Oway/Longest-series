import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "./Series_Personal_Info.css";
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

function Series_Personal_Info() {
	const { t, i18n } = useTranslation();
	const params = useParams();
	const id = params.id;
	const info = t(`series.${id}.info`, { returnObjects: true });
	const captions = t(`series.${id}.captions`, { returnObjects: true });
	return (
		<Stack className="series-section2">
			<Card className="series-card">
				<Card.Img
					src={require(`../img/${id}/fface.png`)}
					className="series-photo"
				/>
				<Card.Body className="series-info">
					<Card.Title className="series-name2">
						{t(`series.${id}.name`)}
					</Card.Title>
					<Card.Text className="series-years">
						{t(`series.${id}.Start_Series`)} {t(`series.${id}.End_Series`)}
					</Card.Text>
					<Card.Text className="series-description">
						{t(`series.${id}.longDescription`)}
					</Card.Text>
				</Card.Body>
			</Card>
			<VerticalTimeline
				lineColor="rgb(20, 149, 219)"
				layout="1-column-left"
				className="vertical-info"
			>
				{data[id]["events"].map((time, index) => (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "rgba(0,0,0,0)",
							color: "#fff",
						}}
						contentArrowStyle={{
							borderRight: "7px solid  rgb(128, 128, 128)",
						}}
						iconStyle={{
							background: "rgb(20, 149, 219)",
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
					className="series-video"
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
					className="series-map"
				>
					<Placemark defaultGeometry={data[id]["mapCoordinates"]} />
				</Map>
			</YMaps>
		</Stack>
	);
}

export default Series_Personal_Info;
