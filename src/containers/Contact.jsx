import React from 'react';

const Contact = () => {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
              Contact Us
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='mt-8'>
              <div className='flex'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>Address</h3>
                  <p className='mt-2 text-base text-gray-500'>
                    123 Lorem St
                    <br />
                    Lorem, Thailand 12345
                  </p>
                </div>
              </div>
              <div className='mt-6 flex'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M22 11.08V12a10 10 0 11-5.93-9.14'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M22 4L12 14.01l-3-3'
                  />
                </svg>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                  <p className='mt-2 text-base text-gray-500'>(123) 456-7890</p>
                </div>
              </div>
              <div className='mt-6 flex'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M20 15v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16-2V9a4 4 0 00-4-4H6a4 4 0 00-4 4v4m16-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v4'
                  />
                </svg>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                  <p className='mt-2 text-base text-gray-500'>
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 lg:mt-0'>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>What is your name?</span>
                <span className='label-text-alt'>Top Right label</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <label className='label'>
                <span className='label-text-alt'>Bottom Left label</span>
                <span className='label-text-alt'>Bottom Right label</span>
              </label>
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>What is your name?</span>
                <span className='label-text-alt'>Top Right label</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <label className='label'>
                <span className='label-text-alt'>Bottom Left label</span>
                <span className='label-text-alt'>Bottom Right label</span>
              </label>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your bio</span>
                <span className='label-text-alt'>Alt label</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24'
                placeholder='Bio'
              ></textarea>
              <label className='label'>
                <span className='label-text-alt'>Your bio</span>
                <span className='label-text-alt'>Alt label</span>
              </label>
            </div>
            <div className='flex justify-end'>
              <button className='btn bg-[#5493f9] hover:bg-[#5493f9] border-none text-white'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
