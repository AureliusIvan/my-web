import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

function About() {

    return (<Box padding={10}>
        <TypeAnimation
            sequence={[
                
                'Nama gue Aurelius Ivan Wijaya, saat ini sedang menjalani perkuliahan S1 di Universitas Multimedia Nusantara program studi Informatika. Nanti gue tambahin kalo kepikiran.', // Types 'One'
                1000, // Waits 1s
            ]}
            speed='70'
            wrapper="Text"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: 20, fontFamily: "'Montserrat', sans-serif", color: "white"}}
        />
        <Box width={'100%'} height={'100%'}>
        </Box>
    </Box>);
}

export default About;