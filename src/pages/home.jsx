import Footer from '../components/footer';

const Home = () => {

  return (
    <>
      <div className="flex justify-center mt-56">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='flex justify-center'>
            <div className='absolute mt-8 font-bold text-3xl text-white'>Perfect Morning</div>
            <div className='absolute mt-20 font-bold text-2xl text-white'>London</div>
            <div className='absolute mt-32 font-bold text-7xl text-white'>12C</div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold p-4 shadow-xl rounded-full absolute mt-56 ml-72">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <img className="rounded-t-lg mb-7" src="https://media.istockphoto.com/id/979270938/photo/sun-light-on-dramatic-moody-sky-with-cloud.jpg?s=2048x2048&w=is&k=20&c=NCzev_mYW1FGcswxQYapORQIY7NrqI8HfDxlGeMkmC8=" alt="" />

          <Footer day={"Monday"} cel={12} />
          <Footer day={"Friday"} cel={14} />
        </div>
      </div>

    </>
  );
};

export default Home;
