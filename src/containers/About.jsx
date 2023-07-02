import React from 'react';

const About = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: '#4695fb',
            width: '185%',
            height: 200,
            transform: 'rotate(180deg)',
          }}
        >
          <path d='M1200 120L0 16.48V0h1200v120z' />
        </svg>
      </div>
      <div className='bg-[#4695fb]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold text-white'>Services We Offer</h1>
          <p className='py-10 text-white'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
      <div className='bg-[#4695fb] pb-16'>
        <div className='flex flex-row justify-center'>
          <div className='card w-[28rem] bg-white shadow-xl mx-6'>
            <figure>
              <img src='https://picsum.photos/id/24/800/500' alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-gray-800'>
                Certified Thai to English Translation
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p className='text-gray-800'>
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
          <div className='card w-[28rem] bg-white shadow-xl mx-6'>
            <figure>
              <img src='https://picsum.photos/id/24/800/500' alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-gray-800'>
                Certified English to Thai Translation
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p className='text-gray-800'>
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-hidden'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{ fill: '#4695fb', width: '185%', height: 200 }}
        >
          <path d='M1200 120L0 16.48V0h1200v120z' />
        </svg>
      </div>
    </>
  );
};

export default About;
