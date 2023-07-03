import React from 'react';

const Header = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse rounded-xl shadow-xl bg-slate-50 p-20'>
        <img
          src='https://picsum.photos/id/24/800/500'
          className='max-w-sm rounded-lg shadow-2xl'
          alt='header'
        />
        <div>
          <h1 className='text-5xl font-bold text-gray-800 capitalize'>Inter Translation</h1>
          <p className='py-6 text-gray-500'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className='btn btn-primary bg-[#1cca5a] hover:bg-[#229646] border-none'
            onClick={() => {
              document
                .getElementById('learn-more')
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
