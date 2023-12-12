import './ArchitectsList.css'
import {Form, Image} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import data from "../data.json";
import {Link} from "react-router-dom";
import { useState } from "react"

function ArchitectsList() {
    const { t, i18n } = useTranslation();

    const arr = Object.keys(data).map((id) => [id, t(`architects.${id}.surname`) + " " + t(`architects.${id}.name`) + " " + t(`architects.${id}.patronymic`)])

    // search field
    const [name, setName] = useState('');
    // search result
    const [foundPerson, setFoundPerson] = useState(arr);

    const find = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = arr.filter((user) => {
                return user[1].toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundPerson(results);
        } else {
            setFoundPerson(arr);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <>
            <div className="architects-block">
                <div className="arch-wrapper">
                    <Form className="search-form">
                            <Form.Control className="search-box" type="search" placeholder={t("searchCaption")} onChange={find} />
                    </Form>
                </div>

                <Card className="architects-list-card">
                    <ListGroup variant="flush" className="architects-listgroup">

                        {foundPerson && foundPerson.length > 0 ? (
                        foundPerson.map((id) =>
                            <ListGroup.Item action as={Link} to={`${id[0]}`} className="arch-list-item">
                                <div className="arch-card">
                                    <img
					                    src={require(`../img/${id[0]}/fface.png`)}
					                    className="arch-photo"
				                    />
                                    <div className="arch-inf">
                                        <p className="arch-fio">{t(`architects.${id[0]}.surname`)} {t(`architects.${id[0]}.name`)} {t(`architects.${id[0]}.patronymic`)}</p>
                                        <p className="arch-descr">{t(`architects.${id[0]}.shortDescription`)}</p>
                                    </div>
                                </div>

                            </ListGroup.Item>

                        )) : ("")}

                    </ListGroup>
                </Card>

            </div>

        </>
    )
}

export default ArchitectsList