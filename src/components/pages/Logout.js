import React from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
    const history = useHistory();
    return(
       <>
        {localStorage.clear()}
        {history.push("/")}
    </>
    )
};

// export default Logout;