import React from "react";
import s from './About.module.css';


const About = (props) => {
    return (
        <div className={s.about}>
            <div className={s.side}></div>

            <div className={s.inicial}>
                <div className={s.img}></div>
                <p className={s.names}>Name: {props.name}</p>
                <p className={s.names}>Surname: {props.surname}</p>
            </div>

        </div>
    )
};

export default About;