import React from 'react';

const Imgfluid = (props) => {
  return <>
        <br/>
      <div className=" d-flex align-items-center justify-content-center ">
          <img className="img-fluid" src={props.src} />
      </div>
  </>;
};

export default Imgfluid;
