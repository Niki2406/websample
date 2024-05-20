import React from 'react';
import Nav from './component/Nav.js';
import Fristsec from './component/Fristsec.js';
import Section1 from './component/Section1.js';
import Section2 from './component/Section2.js';
import Section3 from './component/Section3.js';
import Section4 from './component/Section4.js';
import Section5 from './component/Section5.js';
import Footer from './component/Footer.js';
function App() {
  return (<>
  <div className="App bg-[#000]">
     <Nav />
     
     <Fristsec/>
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4/>
     <Section5 />
     
     <Footer />
    </div>
    </>
    
  );
}

export default App;
