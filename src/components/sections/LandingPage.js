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
            <div className={Styles.textSection}>
                <h1 className="heading-stand-out">Experience the <span style={{ color: "#39FF14" }}>Thrill</span></h1>
            </div>
        )
    }

}
