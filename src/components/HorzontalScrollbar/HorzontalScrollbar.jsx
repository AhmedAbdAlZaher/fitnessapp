import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';




const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
  <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}>
  </BodyPart>
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
























// import { Box, Typography } from '@mui/material'
// import React, { useContext } from 'react'
// import BodyPart from '../BodyPart/BodyPart'





// import RightArrowIcon from '../../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../../assets/icons/left-arrow.png';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



// export default function HorzontalScrollbar({data ,bodyPart , setBodyPart}) {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item)=>(
//       <Box 
//       key={item.id || item}
//       itemID={item.id || item}
//       title={item.id || item}
//       m={"0 40px"}
//       >
// <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}>
// </BodyPart>
//       </Box>)
      
//       )}
//     </ScrollMenu>
//   )
// }
