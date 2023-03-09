import React from 'react';

const hello = (props) => {
    console.log(props);
    return (
        <p>
            hello {props.name}
        </p>
    );
};

export default hello;