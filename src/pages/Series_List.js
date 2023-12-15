import './Series_List.css';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Series_List() {
    const { t, i18n } = useTranslation();

    const arr = Object.keys(data).map((id) => [id, t(`series.${id}.name`) ]);

    const [name, setName] = useState('');
    const [foundPerson, setFoundPerson] = useState(arr);

    const find = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = arr.filter((user) => {
                return user[1].toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundPerson(results);
        } else {
            setFoundPerson(arr);
        }
        setName(keyword);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <>
            <div className="series-block">
                <div className="series-wrapper">
                    <Form className="search-form">
                        <Form.Control
                            className="search-box"
                            type="search"
                            placeholder={t('searchCaption')}
                            onChange={find}
                            onKeyPress={handleKeyPress}
                        />
                    </Form>
                </div>

                <Card className="series-list-card">
                    <ListGroup variant="flush" className="series-listgroup">
                        {foundPerson && foundPerson.length > 0 ? (
                            foundPerson.map((id) => (
                                <ListGroup.Item
                                    key={id[0]}
                                    action
                                    as={Link}
                                    to={`${id[0]}`}
                                    className="series-list-item"
                                >
                                    <div className="series-card">
                                        <img
                                            src={require(`../img/${id[0]}/fface.png`)}
                                            className="series-photo"
                                            alt={`${id[0]}-photo`}
                                        />
                                        <div className="series-inf">
                                            <p className="series-fio">
                                                {t(`series.${id[0]}.name`)}{' '}
                                                {t(`series.${id[0]}.Start_Series`)}{' '}
                                                {t(`series.${id[0]}.End_Series`)}
                                            </p>
                                            <p className="series-descr">
                                                {t(`series.${id[0]}.shortDescription`)}
                                            </p>
                                            <p className="series-authors">
                                                {t(`series.${id[0]}.Authors`)}
                                            </p>
                                            <p className="series-composers">
                                                {t(`series.${id[0]}.Composers`)}
                                            </p>
                                            <p className="series-ex_prod">
                                                {t(`series.${id[0]}.Executive_Producers`)}
                                            </p>
                                            <p className="series-main_char">
                                                {t(`series.${id[0]}.Main_character`)}
                                            </p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))
                        ) : (
                            ''
                        )}
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}

export default Series_List;