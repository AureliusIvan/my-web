import * as React from 'react'
import { color, Flex, position } from "@chakra-ui/react";
import Instagram from "../icon/instagram.svg";
import { Box, Center } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import { Grid, GridItem } from '@chakra-ui/react';
import { porto } from "./portofolio";
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import useCollapse from 'react-collapsed';
import { useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useMouse } from 'react-use';
import { Desc } from './desc';

// pages
import About from './about';
import Portofolio from './porto';
import Contact from './contact';


function Home() {
  //case menu
  const [menu, SetMenu] = useState(1);
  // use mouse
  const ref = React.useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  //  
  // cursor
  const [mousepos, Setmousepos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    eyeball()
  })


  // colapse
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  // 




  function eyeball() {
    'use strict';
    var eye = document.querySelectorAll(".eye");
    // var pupil = document.querySelectorAll(".eye",":after");
    // var pupil = window.getComputedStyle(eye,':after')
    eye.forEach(function (eye) {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
      let radian = Math.atan2(docX - x, docY - y);
      let rot = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = "rotate(" + rot + "deg)";
      console.log(docY);
      if (docY < "100") {
        eye.style.opacity = "0.5";
      } else {
        eye.style.opacity = "1";
      }
    })
  }

  // 

  //
  const [dark, setDark] = useState('black');
  // 
  const [count, setCount] = useState(1);
  function Switch() {
    if (count === 0) {
      setCount(1);
      setDark('black');
    } else if (count === 1) {
      setCount(0);
      setDark('rgb(255, 190, 105)');
    }
  }

  const [about, setAbout] = useState(0);
  function Switchabout() {
    if (about === 0) {
      setAbout(1);
    } else if (count === 1) {
      setAbout(0);
    }
  }
  // Track mouse hover and display item
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  // 

  // portofolio item section
  let itemList = porto.map((port) => {
    return <GridItem key={port.id} border={'none'} textAlign="left">
      <a href={port.link} target="_blank">
        <Box className="portoimage" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} position={'relative'} textAlign={'left'} padding='20px' w='100%' h='450px' backgroundImage={port.image} backgroundPosition='center' backgroundSize={'cover'} backgroundRepeat="no-repeat" border={'none'} overflow="hidden" filter={"grayscale(100%)"} borderRadius="50px">
          {/* <Image zIndex="1" position={'absolute'} top='0' left={'0'} borderRadius={'10px'}  src={port.image} ></Image> */}
        </Box>
      </a>

      <Text className='glow' color={'whiteAlpha.100'} fontWeight="extrabold" fontSize="20px">Desc : {port.firstname}</Text>
    </GridItem>
  })
  //cursor

  //  
  return (
    <div id="home" style={{ backgroundColor: "black" }} width="100%">
      <br />
      <Box padding={"10px"} id='eyeball' ref={ref}>
        <div class="eyes">
          <div class="eye"></div>
        </div>
      </Box>
      <br />
      <Center>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          className="glow letter Montserrat"
          fontSize={50}
          // border='2px solid white'
          // fontStyle="italic"
        >
          IVAN
        </Flex>
        <br />
      </Center>
      <Contact/>
      {/* <Desc/> */}
      <Flex justifyContent='center' alignContent={'center'} id="menu">
        <Button onClick={()=>SetMenu(1)} marginInline='10px' width="100px" height={['100px']} fontSize={menu === 1? [10] : [20]} bg={menu === 1? 'white' : 'black'} color={menu === 1? 'black' : 'white'} className="menulist Montserrat" fontWeight={'bold'} transition='0.5' >ABOUT</Button>
        <Button onClick={()=>SetMenu(2)} marginInline='10px' width="100px" height={['100px']} fontSize={menu === 2? [10] : [20]} bg={menu === 2? 'white' : 'black'} color={menu === 2? 'black' : 'white'} className="menulist Montserrat" fontWeight={'bold'} >PORTOFOLIO</Button>
        {/* <Button onClick={()=>SetMenu(3)} marginInline='10px' width="100px" height={['100px']} fontSize={[20]} bg="black" color="white" className="menulist" >CONTACT</Button> */}

      </Flex>
      <Box id='MenuOutput'>
        {(()=>{
        switch (menu) {
          case 0:
            return <About/>;
          case 1:
            return <About/>;
          case 2:
            return <Portofolio/>;
          case 3:
            return <Contact/>;
          default:
            break;
        }
        })()}

      </Box>
      {/* <Center id="socialmedia">
        <img
          id="instagram"
          src={
            "https://uploads-ssl.webflow.com/5b444bb7049e8677b6ae771a/60d3419d8aba9ed79032d8d0_Asset%201.svg"
          }
          alt=""
        />
      </Center> */}
      <div id="footer">
        {/* <p>© Aurelius Ivan Wijaya 2022</p> */}
      </div>
    </div>
  );
}

export default Home;
