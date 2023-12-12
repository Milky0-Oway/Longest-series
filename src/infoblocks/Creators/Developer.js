import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './Developer.css'
import dev1 from "../../img/dev1.png";
import dev2 from "../../img/dev2.png";
import dev3 from "../../img/dev3.png";
import {useTranslation} from "react-i18next";
import '../../i18n.js';

function Developer() {
    const { t, i18n } = useTranslation();
    return (
        <Stack className="developers-section">
            <h2 className="heading_developers">{t("developers")}</h2>
            <div className="developers">
                <Card className="developer-card">

                    <Card.Link href="https://github.com/DenKorporation" target="_blank" className="developer-photo">
                        <Card.Img src={dev1} />
                    </Card.Link>
                    <Card.Body className="developer-info">
                        <Card.Link  href="https://github.com/DenKorporation" target="_blank" className="developer-name">{t("dev1")}</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Link href="https://github.com/Owllark" target="_blank">
                        <Card.Img src={dev2} className="developer-photo"/>
                    </Card.Link>
                    <Card.Body className="developer-info">

                        <Card.Link  href="https://github.com/Owllark" target="_blank" className="developer-name">{t("dev2")}</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Link href="https://github.com/iamnovik" target="_blank">
                        <Card.Img src={dev3} className="developer-photo"/>
                    </Card.Link>
                    <Card.Body className="developer-info">

                        <Card.Link  href="https://github.com/iamnovik" target="_blank" className="developer-name">{t("dev3")}</Card.Link>
                    </Card.Body>
                </Card>
            </div>

        </Stack>
    );
}


export default Developer;