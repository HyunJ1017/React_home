import React, { useState, useRef } from 'react';

import Cat from 'images/circle_cropped_cat.png';

import 'css/main/door.css'


function Door() {

  const [doorCheck, setDoorCheck] = useState(true);

  const doorTop = useRef(null);
  const doorBottom = useRef(null);

  const doorOpen = () => {

    doorTop.current.style.top = '-55vh';
    doorBottom.current.style.bottom = '-50vh';

    setTimeout(() => {
      setDoorCheck(false);
    }, 1500);
  }

  return (
    <>
    {doorCheck === true && (
    <div className="door-frame">
      <div
        className="door-top"
        ref={doorTop}
      >
        <hr className='door-topLine'/>
        <div className='door-harfCircle'>
          <div className='door-smallCircle'>
            <img
              src={Cat}
              alt="A-Cat"
              onClick={doorOpen}
            />
          </div>
        </div>
      </div>
      <div
        className="door-bottom"
        ref={doorBottom}
      >
      </div>
    </div>
    )}
    </>
  );
}

export default Door;