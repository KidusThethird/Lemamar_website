import React from 'react';

import CoveImage from '../assets/cover 2.jpg';

export function Cover() {
  return (
    <div>
          {/* COver image Holder start */}

<div className='sticky top-0'>
  <img src={CoveImage} alt="" />
</div>

  {/* Cover image Holder End */}
    
    </div>
  )
}

