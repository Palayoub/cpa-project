import "./index.css"

import background from "../../assets/background.jpeg";

function Content() {
    return (
        <div className={"page-content"} >
            <div className={"page-box"}>
                <img src={background} className={"img-box"} />
                <div className={"box-header"}>
                    Please enter your Stumble Guys Username or ID and select your platform.
                </div>
                <div className={"box-container"}>
                </div>
                <div className={"box-footer"}>
                </div>
            </div>
        </div>
    );
}

export default Content;
