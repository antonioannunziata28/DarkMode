import React from "react";

const Articolo = ({body, title}) => {
    return (<article>
        <div className="position-relative h-auto">
            <h4>{title}</h4>
        </div>
        <p>
            {body}
        </p>
        </article>)
    }
    
    export default Articolo;