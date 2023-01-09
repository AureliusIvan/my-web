import { Box, Text, Grid, GridItem, List, Image, Center } from "@chakra-ui/react";
import { useState } from "react";
import { porto } from "./portofolio";
import FadeIn from 'react-fade-in';
import { TypeAnimation } from "react-type-animation";

// image
import FinalPTI from "./../Asset/FinalPTI.png"
import ghostrun from "./../Asset/ghostrun.png"

function PortoCard(props) {
    return (<>
        <a href={props.link}>
            <Image
                src={props.src} _hover={{opacity: "0.5"}}
                transition="0.7s"
                 zIndex="1" backgroundRepeat="no-repeat" backgroundPosition={'center'} backgroundSize='contain' objectFit={'cover'} />
        </a>
    </>);
}

function Porto() {

    return (<>
        <br />
        <Box>
            <Center>
                <TypeAnimation
                    sequence={[
                        'Ini adalah Portofolio Saya menggunakan React.JS', // Types 'One'
                        1000, // Waits 1s
                    ]}
                    speed='70'
                    wrapper="Text"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: 20, fontFamily: "'Montserrat', sans-serif", color: "white" }}
                />
            </Center>
            <Grid
                padding='10px'
            >
                <FadeIn>
                    <Center>
                        <PortoCard src={FinalPTI} link={"https://aureliusivan.github.io/FinalPTI/"} />
                        <br />
                        <PortoCard src={ghostrun} link={"https://aureliusivan.github.io/ghostrun/"} />
                    </Center>
                </FadeIn>
            </Grid>
        </Box>
    </>);
}

export default Porto;