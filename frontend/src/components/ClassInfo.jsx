import React from 'react';


const ClassInfo = ({ classData }) => {
  if (!classData) {
    // Handle the case where classData is undefined (e.g., before receiving the response)
    console.log('Class data is undefined');
    return null;
  }
  
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
    
  );
}

export default ClassInfo;