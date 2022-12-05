import React from 'react';

import { useLiff } from '../../context/LiffContext';

function Binding() {
  const { liff } = useLiff();
  console.log(liff);
  return (
    <div>Binding</div>
  );
}

export default Binding;
