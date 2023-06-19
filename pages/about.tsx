import { useRouter } from 'next/router';
import Link from 'next/link';


const HomePage = () => {



  return (

    <div className='max-w-7xl mx-auto'>

          <header className="mb-10 py-4 px-8 border-b ">
      <div className="flex items-center justify-between ">
        <h1 className="text-white text-2xl font-bold">Ortega</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:text-pink-300 transition-colors" href="/">Home</Link>
            </li>
            <li>
              <Link className="text-pink-300 hover:text-pink-300 transition-colors" href="/about">About</Link>
            </li>
        
          </ul>
        </nav>
      </div>
    </header>
    <div className=" min-h-screen p-8">
      
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
<div className="mx-auto justify-center flex rounded-md pb-14"><img className="text-center" src="https://media.licdn.com/dms/image/D4E03AQGezKuIA6T7Jw/profile-displayphoto-shrink_400_400/0/1669418999364?e=1692835200&v=beta&t=1tGpyxw44g6xzT7kmP_E4OBPoWYzdXzBj4z_VLs-aic" alt="My Picture here"/></div>

<div className=''>

   <div  className='mb-8 max-w-5xl text-center mx-auto'>

                Hello there! My name is Ortega, and I&apos;m here to assist you in crossing the border between Ghana and Togo. I take great pride in ensuring that your border crossings are conducted legally and efficiently. Whether you&apos;re a traveler, a trader, or simply visiting, I&apos;ll be your reliable guide throughout the entire process, ensuring a smooth and hassle-free experience.
I&apos;m a young and vibrant individual who has been fortunate enough to call Aflao my home for as long as I can remember. The rich blend of cultures and the wonderful people make growing up near the border an incredible blessing. I&apos;m truly fascinated by different cultures and love meeting new people from all walks of life. It brings me immense joy to be involved in this line of work.


<p className="py-4">I am genuinely excited about the opportunity to assist you, and my ultimate goal is to put a smile on your face and help you succeed. Rest assured, I am committed to not only facilitating your border crossing but also connecting you with the valuable resources and contacts you may need in both Togo and Ghana.
So, let&apos;s embark on this journey together! Feel free to reach out to me today, and let&apos;s make your border crossing experience stress-free and filled with delightful connections.
 
</p>

<Link  className="px-8 py-2 bg-sky-700 hover:bg-pink-500 border rounded-lg font-semibold"
 href="/#booking">

 
    Book Now

</Link>
</div>

    <div>

    </div>
    
</div>



        
    
    </div>

{/* Footer */}
<footer className="mb-10 py-4 px-8 border-t border-sky-500">
  <div className="flex items-center justify-between">
    <div className=''>
  <h1 className="text-white text-2xl font-bold">Ortega</h1>
          <p className="text-xs">All Rights Reserved &copy; 2023</p>

    </div>
  
    <nav>
      <p className="text-sm">Email: <Link href="mailto:benortega234@gmail.com">benortega234@gmail.com</Link></p>
      <p className="text-sm">Contact: <Link href="tel:+233594893946">+233 (0) 594 893 946</Link></p>
    </nav>
  </div>
</footer>
    </div>
  );
};

export default HomePage;
