import React, { Component } from "react";
import Styles from "./LandingPage.module.scss";

/**
 * @class LandingPage
 */
export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.textSection}>
                    <h1 className="heading-stand-out">We are <span style={{ color: "#39FF14" }}>Green</span></h1>
                </div>
                <div className={Styles.subSection}>
                    <h3 className="standout-bg">To limit warming to 1.5C, global net CO2 emissions must drop by 45% between 2010 and 2030, and reach net zero around 2050</h3>
                </div>
                <div className={Styles.factsSection}>
                    <div className="card">
                        <p>2: 1-2°C up or down body temperature can cause fever and other symptoms to us Can't imagine how the seasonal patterns around the world would change if the average temperature rises Frankly its scary</p>
                        <p>Recent heavy rain fall through India in past 10 years God only knows what's going to happen next</p>
                    </div>
                </div>
            </div>
        )
    }

}
