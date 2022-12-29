import { TypeAnimation } from 'react-type-animation';

export const Desc = () => {
    return (
        <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
                'I experienced on React',
                1000,
                'I experienced on PHP Vanilla',
                1000,
                'I experienced on Laravel',
                1000,
                'I experienced on JS',
                1000,
            ]}
            speed={30} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: '40%',color:'white'}}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

    );
};

