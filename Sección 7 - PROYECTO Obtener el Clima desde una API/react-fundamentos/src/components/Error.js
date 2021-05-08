import React from 'react';

const Error = ({mensaje}) => {
    return(
        <p className="red darken-4 error">{mensaje}</p>
    );
}

export default Error