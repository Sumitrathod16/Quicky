import React from 'react';
import Main from './Main';
import Specialization from './Specialization';
import Exclusive from './Exclusive';
import Explore from './Explore';
import Unique from './Unique';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      
      <Main />
      <Specialization />
      <Explore/>
      <Exclusive />
      <Unique/>
      <Footer />
     </div>
  );
}
export default Home;