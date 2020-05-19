import React from 'react';
import { useLocation } from 'react-router';

const Drd3 = () => {
  const location = useLocation();
  console.log('DRD3 location:::', location);

  return (
    <>
      <div>DRD 3</div>
      <div>coming from {location.state.from}</div>
    </>
  );
};

export default Drd3;
