import { Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import profileimg from "./../Asset/profile.jpg"
import FadeIn from "react-fade-in/lib/FadeIn";


function Aboutcard(props) {
    return (
        <Box overflow={"hidden"} margin={'10px'} marginBottom="10px" padding={"15px"} width="100%" height={"100%"} position="relative" borderRadius={"20px"} border={"1px solid white"}>
            <Text color={"white"} fontWeight="extrabold">
                {props.title}
            </Text>
            <Text bgColor={"none"} color={"whiteAlpha.400"}>
                {props.desc}
            </Text>
        </Box>)
}



function Listcard(props) {
    return (
        <Box margin={'10px'} marginBottom="10px">
            <GridItem paddingLeft={"20px"} color={"white"}>
                <Text>
                    <span color="White" fontWeight="bold">· </span>
                    {props.title}
                </Text>
                <Text color={"whiteAlpha.500"}>
                    {props.desc}
                </Text>
            </GridItem>
        </Box>
    )
}


function About() {

    return (<Box padding={10}
    >
        <Center>
            <TypeAnimation
                sequence={[
                    'Perkenalkan nama saya Aurelius Ivan Wijaya.', // Types 'One'
                    1000, // Waits 1s
                    'Mahasiswa Informatika UMN semester 3.', // Types 'One'
                    1000, // Waits 1s
                ]}
                speed='70'
                wrapper="Text"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: 20, fontFamily: "'Montserrat', sans-serif", color: "white" }}
            />
        </Center>
        <FadeIn>
            <br />
            <Box width={'100%'} height={'100%'}>
                <Aboutcard title="ACHIEVMENT" desc={
                    (<>
                        <Listcard title="Perfect Grade" desc="Pada proyek UTS dan UAS mata kuliah PTI " />
                        <Listcard title="Author of Paper" desc="UMN Sims: Development of Student Life Simulation Game to Introduce
                     Onsite Campus Activities using React.js (Corresponding Author: Alexander Waworuntu) " />
                    </>)
                } />
            </Box>
            <Box width={'100%'} height={'100%'}>
                <Aboutcard title="EDUCATIONAL HISTORY" desc={
                    (<>
                        <Listcard title="Informatika" desc="2021 - Sekarang" />
                        <Listcard title="IPK : 3.60 || IPS Semester Terakhir : 3.89" />
                    </>)
                } />
            </Box>
            <Box width={'100%'} height={'100%'}>
                <Aboutcard title="EXPERIENCE" desc={
                    (<>
                        <Listcard title="MENTOR" desc="Mentoring UMN 2021-2022" />
                        <Listcard title="Pembicara Campus Visit Prodi Informatika" desc="Demo Prodi • Campus Visit 2022" />
                    </>)
                } />
            </Box>
            <Box width={'100%'} height={'100%'}>
                <Aboutcard title="SKILL AND ABILITIES" desc={
                    (<>
                        <Listcard title="HTML" />
                        <Listcard title="CSS" />
                        <Listcard title="React.js" />
                        <Listcard title="PHP" />
                        <Listcard title="Laravel" />
                        <Listcard title="C" />
                        <Listcard title="Public Speaking" />
                        <Listcard title="Teaching" />
                    </>)
                } />
            </Box>
        </FadeIn>
    </Box>);
}

export default About;