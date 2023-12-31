import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from '../BodyPart/BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
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

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart ,isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
    {isBodyParts ?<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}>
    </BodyPart>
    : <ExerciseCard exercise={item}></ExerciseCard>}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;



//og code
// import React, { useContext } from 'react';
// import { Box, Typography } from '@mui/material';
// import BodyPart from '../BodyPart/BodyPart';
// import RightArrowIcon from '../../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../../assets/icons/left-arrow.png';
// import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

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
// export default HorizontalScrollbar;