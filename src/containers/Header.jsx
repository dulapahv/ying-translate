import React from 'react';

const Header = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='https://picsum.photos/id/24/800/500'
          className='max-w-sm rounded-lg shadow-2xl'
          alt='header'
        />
        <div>
          <h1 className='text-5xl font-bold text-gray-800'>Ying Translate</h1>
          <p className='py-6 text-gray-500'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary bg-[#4695fb] hover:bg-[#4274c5] border-none'>Learn More!</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
