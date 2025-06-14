import React from 'react';

const page = ({ params }) => {

    return (
        <div>
            <h1>This is the params page id:{params.id}</h1>
        </div>
    );
};

export default page;