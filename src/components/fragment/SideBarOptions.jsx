import React, {useRef} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./SideBarOptions.scss"

function SideBarOptions(props) {
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const sideBarRef = useRef();
    const href = props.href;
    return (
        <Button onClick={()=>{sideBarRef.current.click();}} className={className}startIcon={Icon && <Icon/>}>
            <Link ref={sideBarRef} to={href}/>
            <b>{title}</b>
        </Button>
    );
}

export default SideBarOptions;