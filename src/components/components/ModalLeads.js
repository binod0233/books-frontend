import React from 'react'
import { useState } from 'react';

const ModalLeads = (props) => {
    const {show, close}=props;
    const [isAppear, setIsAppear] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsAppear(!isAppear);

    }
  return (
    <div>
     {show?( <div  onClick={() => close()} style={{position:'absolute' , background:"white", right:'0'}}>
<div>
<ul>
<li>Anup</li>
<li>Anup</li>
<li>Anup</li>
<li>Anup</li>
<li>Anup dsfs</li>
</ul>
</div>
    </div>)
    : 
    null
}
    </div>
  )
}

export default ModalLeads
