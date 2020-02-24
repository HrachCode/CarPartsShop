import {useState,useEffect} from 'react';
import React from 'react'
import PropTypes from 'prop-types';
import './userProfile.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Announcment from "./Announcment";
import AddAnnouncment from "./AddAnnouncment";
import UserSetings from './UserSetings'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import Spiner from '../Spiner/Spiner'
import './formik.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
 
 
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [decoded, setdelet] = React.useState(0);
  const [user,setuser] = useState('')
  const [loading, setLoading] = useState(false);
  const tokens = localStorage.myusertoken;
  const [usr, setusr] =useState(tokens);


  useEffect(()=>{
    const token = localStorage.myusertoken;
    if(token){
        const  decoded = jwt_decode(token)

          setdelet(decoded)
          fetchPosts(decoded);
           
  }},[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchPosts = async (decoded) => {
    setLoading(true);
    const res = await axios.post('avds/getPurches',decoded)
    .then(res=>{
      setuser(res.data);
    })
    
    setLoading(false);
  };
  const deletItem = (id)=>{
    
     axios.post('avds/deleting',{_id:id})
     .then(data=>{
        if(data.status === 200){
          console.log(data)
          fetchPosts(decoded)
        }
     })
  }
  if(loading){
    return <Spiner />
  }
 
  return (


         <div>
           {usr === undefined ? <div className={'knereq'}>Sorry You Can Not Watch Or Add Your Announcments If You Are Not Logged In</div> :  <div className={classes.root}>

             <AppBar position="static" color="default">
               <Tabs
                   value={value}
                   onChange={handleChange}
                   indicatorColor="primary"
                   textColor="primary"
                   variant="scrollable"
                   scrollButtons="auto"
                   aria-label="scrollable auto tabs example"
               >
                 <Tab label="Your Announcments" {...a11yProps(0)} />
                 <Tab label="Add Product" {...a11yProps(1)} />
                 <Tab label="profile setings" {...a11yProps(2)} />

               </Tabs>
             </AppBar>
             <TabPanel value={value} index={0}>
               <div>
                 {user.user === undefined ? <div className={'notyet'}>
                   <p>You have not add announcment yet {tokens}</p>
                 </div>: user.user.map((e,i)=>{
                   return(
                       <Announcment key={i} id={e._id} data={e} deletItem={deletItem}/>
                   )
                 })}
               </div>
             </TabPanel>
             <TabPanel value={value} index={1}>
               <AddAnnouncment fetchPosts={fetchPosts}/>
             </TabPanel>
             <TabPanel value={value} index={2}>
              <UserSetings user={user}/>
             </TabPanel>
            
             
             

           </div> }
         </div>


  );
}