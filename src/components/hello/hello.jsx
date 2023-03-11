import React from 'react';

const hello = ({name, age}) => {
    // console.log(props);
    return (
        <>
            <p>
                hello {name}
            </p>
            <p>
                age {age}
            </p>
        </>

        
    );
};

export default hello;