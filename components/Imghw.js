import React from 'react';

const Imghw = (props) => {
  return <>
      <div className="container d-flex align-items-center justify-content-center">
          <img src={props.src} height={props.height} width={props.width} /></div><br />
  </>;
};

export default Imghw;
