import { Box, Text, Grid, GridItem, List, Image, Center } from "@chakra-ui/react";
import { useState } from "react";
import { porto } from "./portofolio";
import FadeIn from 'react-fade-in';

function Porto() {

    // Track mouse hover and display item
    const [isHovering, setIsHovering] = useState(false);
    const [opacity, Setopacity] = useState('100%');

    const handleMouseOver = () => {
        setIsHovering(true);
        Setopacity('50%')
    };

    const handleMouseOut = () => {
        setIsHovering(false);
        Setopacity('100%')
    };


    // image

    const itemList = porto.map((port) => {
        return <GridItem key={port.id} border={'none'} textAlign="left">
                <Grid onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} position={'relative'} textAlign={'left'} padding='20px' w='100%' h='300px' bg='white' border={'none'}>
                    <Image opacity={opacity} zIndex="1" position={'absolute'} top='0' left={'0'} src={port.image} backgroundRepeat="no-repeat" width={'100%'} height="100%" backgroundPosition={'center'} backgroundSize='contain' objectFit={'cover'} />
                    {<a bg='black' href={port.link} target="_blank">
                        click to see more
                    </a>}
                </Grid>
                <Text className='Montserrat' color={'whiteAlpha.100'} fontWeight="extrabold" fontSize="20px">Desc : {port.firstname}</Text>
        </GridItem>
    })

    return (<>
    <br />
        <Box>
            <Text className="Montserrat" fontSize={20} color='whiteAlpha.700'>
                INI portofolio gue
            </Text>
            <Grid
                justifyContent={'center'}
                h='200px'
                //   templateRows='repeat(2, 1fr)'
                templateColumns={'repeat(2,1fr)'}
                // templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)','repeat(2, 1fr)']}
                // templateRows="repeat(2,1fr)"
                gap={4}
                padding='10px'
            >
                <FadeIn>
                {itemList}
                </FadeIn>
            </Grid>
        </Box>
    </>);
}

export default Porto;