import Stack from 'react-bootstrap/Stack';
import './Info.css'
import {useTranslation} from "react-i18next";
import '../../i18n.js';

function AboutSection() {
    const { t, i18n } = useTranslation();
    return (
        <Stack className="about">
            <h1 className="greetings">
                {t("greetings")}
            </h1>
            <div className="text">
                <p>
                    {t("about1")}
                </p>
                <p>
                    {t("about2")}
                </p>
            </div>
        </Stack>

    )
}

export default AboutSection;