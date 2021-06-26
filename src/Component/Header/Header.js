import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    return(
        <>
            <header className="d-flex align-items-center justify-content-between auth-header p-4 fixed-top">
                <div>
                    <img src={props.web? props.web.siteLogoWhite:''} alt="logo"/>
                </div>
                <div>
                    <Link 
                        to={props.url}
                        className="btn btn-primary"
                        style={{ background: "royalblue" }}
                    >
                        {props.title}
                    </Link>
                </div>
            </header>
        </>
    );
}