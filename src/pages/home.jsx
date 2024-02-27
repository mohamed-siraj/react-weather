import Footer from '../components/footer';

const Home = () => {

  return (
    <>
      <div className="flex justify-center mt-56">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=2048x2048&w=is&k=20&c=65dbok-A-9z5YZ6Hx_B2fbWEavkpEfBbzw7OUVYbvWM=" alt="" />
          <Footer/>
          <Footer/>
        </div>
      </div>

    </>
  );
};

export default Home;
