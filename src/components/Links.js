import React from "react";

function Links({github, linkedin}) {
    return (
    <>
        <h3>Links</h3>
        <a href={github} alt={github}>
        {github}
        </a>
        <br />
        <a href={linkedin} alt={linkedin}>
        {linkedin}
        </a>
    </>
    )
};

export default Links;