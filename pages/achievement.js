import MenuBar from "../components/menuBar";
import style from "./achievement.module.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Achievement(){
  return(<>
  <MenuBar></MenuBar>
    <div className={style.gridContainer}>
    <Grid container spacing={2} >
        
         <Grid item xs={12} >
          <div className={style.insideGrid}>
          <div className={style.achievementImage}></div>
           <Item className={style.item}>
            
            <h1 className={style.h1C}>Achievements</h1>
           <ul style={{fontSize:"15px"}}>
            <li>First team to build an autonomous walking humanoid made by any undergraduate team in India.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li> Winner of TIC(Techkriti innovation challenge) 2016</li>
            <li>Best summer project of SNT council 2015</li>
            <li>We have published several Technical Papers</li>
            <ul>
              <li><Link href="https://drive.google.com/file/d/122A9QLY2KIyULo2l-Hij5_H2vxc4qtCY/view" underline="hover" color="body2">  Humanoid Mechanical analysis paper</Link></li>
              <li><Link href="https://drive.google.com/file/d/1Sxskfh7mdGsjHIldxQo1CkyzhXbAd9ZL/view" underline="hover" color="body2">  Humanoid Material analysis paper</Link></li>
              <li><Link href="https://drive.google.com/file/d/1XX5zDYLJik6A3ZQy-AVuvzIHWrEf1b5u/view" underline="hover" color="body2"> Humanoid electrical architecture paper</Link></li>
            </ul>

            </ul>
           </Item>
           </div>
         </Grid>
       </Grid>
    </div>
    </>
  )
}


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
