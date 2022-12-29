import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import { ChakraProvider } from '@chakra-ui/react';
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <div className="App">
          <ChakraProvider>
            <AnimatedCursor
             innerSize={20}
             outerSize={20}
             color='114, 22, 242'
             outerAlpha={0.2}
             innerScale={0.7}
             outerScale={5}
             clickables={[
               'a',
               'input[type="text"]',
               'input[type="email"]',
               'input[type="number"]',
               'input[type="submit"]',
               'input[type="image"]',
               'label[for]',
               'select',
               'textarea',
               'button',
               '.link'
             ]}
            />
            <Home/>
          </ChakraProvider>
    </div>
  );
}

export default App;
