import React from "react";

const Remedies = ({ classData }) => {
  if (!classData) {
    // Handle the case where classData is undefined (e.g., before receiving the response)
    console.log('classData is undefined in Remedies.jsx');
    return null;
  }

  if (classData != null) {
    // remedyData is an array, you can access and work with it here
    console.log('Response of classData in Remedies.jsx:', classData);
    console.log("array length:", classData.remedies.length)
    
    return (
      <div className='grid md:grid-cols-3'>
        {classData.remedies.map((remedy, i) => (
          <div key={i} className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm font-bold'>
              {remedy.type}
            </span>
            <div>
              <p className='text-text-5xl sm:text-3xl font-bold py-4 flex'>
                {remedy.name}
              </p>
            </div>
            <div className="justify-center flex">
              <img
                src={`data:image/jpeg;base64,${remedy.image}`}
                style={{ maxWidth: '300px', height: '300px' }}
                alt={remedy.name}
              />
            </div>
            <div className='text-justify'>
              <p className='flex py-4'>{remedy.description}</p>
            </div>
            <div className='flex justify-center'>
              <a
                href={remedy.link}
                target='_blank'
                rel='noopener noreferrer' // Add this for security
                className='block bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center text-decoration-none hover:bg-[#00bf85] hover:text-black'
              >
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};


export default Remedies;
