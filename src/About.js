import React from 'react';
import HeroSection from './components/HeroSection';
// import { useProductContext } from './context/ProductContex';
import { useProductContext } from './context/productContex';

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Guddu Ecommerce",
  };
  
  return(
    <>
    {myName}
    <HeroSection myData={data} />
    </>
  );
};

export default About