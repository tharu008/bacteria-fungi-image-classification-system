import React, { useState, useEffect } from 'react';


const ClassInfo = ({classData}) => {
  
  
  return (
    <div className='w-full shadow-xl bg-[#8892b0] flex flex-col p-4 md:my-0 my-8 rounded-lg'>
       {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
       <h2 className='text-2xl font-bold text-center py-8 bg-black text-[#00df9a]'>Scientific Classification</h2>
       {/* <p className='text-center text-4xl font-bold'>$149</p> */}
       <div className='text-center font-medium'>
         <p className='py-2 border-b mx-8 mt-8'>Domain: {classData.domain}</p>
         <p className='py-2 border-b mx-8'>Kingdom: {classData.kingdom}</p>
         <p className='py-2 border-b mx-8'>Division: {classData.division}</p>
         <p className='py-2 border-b mx-8'>Class: {classData.class}</p>
         <p className='py-2 border-b mx-8'>Order: {classData.order}</p>
         <p className='py-2 border-b mx-8'>Family: {classData.family}</p>
         <p className='py-2 border-b mx-8'>Genus: {classData.genus}</p>

       </div>
       {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}
     </div>
    
    //   <div className='w-full shadow-xl bg-[#8892b0] flex flex-col p-4 md:my-0 my-8 rounded-lg'>
    //     {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
    //     <h2 className='text-2xl font-bold text-center py-8 bg-black text-[#00df9a]'>Scientific Classification</h2>
    //     {/* <p className='text-center text-4xl font-bold'>$149</p> */}
    //     {predictedClass === 'Aspergillus' && (
    //       <div className='text-center font-medium'>
    //         <p className='py-2 border-b mx-8 mt-8'>Domain: Eukaryota</p>
    //         <p className='py-2 border-b mx-8'>Kingdom: Fungi</p>
    //         <p className='py-2 border-b mx-8'>Division: Ascomycota</p>
    //         <p className='py-2 border-b mx-8'>Class: Eurotiomycetes</p>
    //         <p className='py-2 border-b mx-8'>Order: Eurotiales</p>
    //         <p className='py-2 border-b mx-8'>Family: Trichocomaceae</p>
    //         <p className='py-2 border-b mx-8'>Genus: Aspergillus</p>

    //       </div>

    // )} {predictedClass === 'Penicillium' && (
    //   <div className='text-center font-medium'>
    //       <p className='py-2 border-b mx-8 mt-8'>Domain: Eukaryota</p>
    //       <p className='py-2 border-b mx-8'>Kingdom: Fungi</p>
    //       <p className='py-2 border-b mx-8'>Division: Ascomycota</p>
    //       <p className='py-2 border-b mx-8'>Class: Eurotiomycetes</p>
    //       <p className='py-2 border-b mx-8'>Order: Eurotiales</p>
    //       <p className='py-2 border-b mx-8'>Family: Trichocomaceae</p>
    //       <p className='py-2 border-b mx-8'>Genus: Penicillium</p>

    //     </div>
      
    // )} {predictedClass === 'Proteus' && (
    //   <div className='text-center font-medium'>
    //       <p className='py-2 border-b mx-8 mt-8'>Domain: Bacteria</p>
    //       <p className='py-2 border-b mx-8'>Phylum: Pseudomonadota</p>
    //       <p className='py-2 border-b mx-8'>Class: 	Gammaproteobacteria</p>
    //       <p className='py-2 border-b mx-8'>Order: Enterobacterales</p>
    //       <p className='py-2 border-b mx-8'>Family: Enterobacteriaceae</p>
    //       <p className='py-2 border-b mx-8'>Genus: Proteus</p>
    //       <p className='py-2 border-b mx-8'>Gram-negative bacteria</p>

    //     </div>
    // )}  {predictedClass !== 'Aspergillus' && predictedClass !== 'Penicillium' && predictedClass !== 'Proteus' && predictedClass !== null && (

    //   <div className='text-center font-medium'>
    //       <p className='py-2 border-b mx-8 mt-8'>Domain: Bacteria</p>
    //       <p className='py-2 border-b mx-8'>Phylum: Bacillota</p>
    //       <p className='py-2 border-b mx-8'>Class: Bacilli</p>
    //       <p className='py-2 border-b mx-8'>Order: Bacillales</p>
    //       <p className='py-2 border-b mx-8'>Family: Staphylococcaceae</p>
    //       <p className='py-2 border-b mx-8'>Genus: 	Staphylococcus</p>
    //       <p className='py-2 border-b mx-8'>Gram-positive bacteria</p>

    //     </div>
    // )}
    //   </div>
    
  );
  }

export default ClassInfo;