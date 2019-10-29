import React from 'react';

const Title = ({title}) => {
    return (
        <div className="row">
            <div className="col text-center text-capitalize my-5">
                <h1 className="display-6 font-weight-bold">{title}</h1>
            </div>
        </div>
    );
};

export default Title;