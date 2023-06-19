import { useState, ChangeEvent, FormEvent } from 'react';
import PeopleCounter from '../components/PeopleCounter';
import EarningsCalculator from '../components/EarningsCalculator';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';


interface BookingData {
  name: string;
  nationality: string;
  numberOfPeople: string;
  reasonForTravel: string;
  luggage: string;
  arrivalTime: string;
  transportationMode: string;
}

const HomePage = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    nationality: '',
    numberOfPeople: '',
    reasonForTravel: '',
    luggage: '',
    arrivalTime: '',
    transportationMode: '',
  });

  const [showBookingForm, setShowBookingForm] = useState(false);

  const [shareUrl, setShareUrl] = useState('');

const [sending, setSending] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };


const handleBooking = async (event: { preventDefault: () => void }) => {
  event.preventDefault();
  setSending(true); // Set sending state of the button

  try {
    // Send email using backend API
    await axios.post('/api/bookings', bookingData);

    // Generate the URL for sharing via WhatsApp
    const { name } = bookingData;
    const emailContent = `Hello Ortega, my name is ${name} and here are our booking details:
      
    Name: ${bookingData.name}
    Nationality: ${bookingData.nationality}
    Number of People: ${bookingData.numberOfPeople}
    Reason for Travel: ${bookingData.reasonForTravel}
    Luggage: ${bookingData.luggage}
    Arrival Time: ${bookingData.arrivalTime}
    Transportation Mode: ${bookingData.transportationMode}`;

    const shareUrl = `https://api.whatsapp.com/send?phone=+233594893946&text=${encodeURIComponent(
      emailContent
    )}`;

    // Show success message and WhatsApp share option
    setShowSuccess(true);
    setShareUrl(shareUrl);
    setShowBookingForm(false); // Hide the booking form
  } catch (error) {
    console.error('Failed to send booking details:', error);
  } finally {
    setSending(false); // Reset sending state of the button
  }
};


const handleChange = (event: { target: { name: string; value: string } }) => {
  const { name, value } = event.target;
  setBookingData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


  const handleMakeBookingClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10 py-4 px-8 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Ortega</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link className="text-pink-300 hover:text-pink-300 transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-pink-300 transition-colors" href="/about">
                  About
                </Link>
              </li>
         
            </ul>
          </nav>
        </div>
      </header>
      {/* Main content */}
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Border Crossing Assistance in Aflao</h1>
        <div className="flex">
          <p className="mb-8">
            Welcome to Aflao! My name is Ortega, and I&apos;m here to provide assistance for crossing the border between
            Ghana and Togo. I ensure that your border crossings are done legally and efficiently. Whether youre a
            traveler, a trader, or a visitor, I will guide you through the process, making sure you have a smooth and
            hassle-free experience. Contact me today, and let&apos;s make your border crossing a stress-free endeavor!
          </p>
          <div>
          </div>
        </div>
        <PeopleCounter />
        <EarningsCalculator />
        <div id="booking" className="mt-10">
          <button
            className="bg-sky-700 border px-8 max-w-xs py-3 rounded-lg cursor-pointer"
            onClick={handleMakeBookingClick}
          >
            Make Booking
          </button>
        </div>

        {/* Booking Form */}
       {showBookingForm && (
  <div  className="mt-10">
    <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
 <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleBooking}>

      <div className="flex flex-col">
  <label htmlFor="name" className="mb-2 text-lg">
    Name:
  </label>
  <input
    className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    placeholder="Insert Your Name"
    id="name"
    name="name"
    value={bookingData.name}
    onChange={handleInputChange}
    required
  />
</div>




     <div className="flex flex-col ">
  <label htmlFor="nationality" className="mb-2 text-lg">
    Nationality:
  </label>
  <input
  placeholder='What is your Nationality?'
    type="text"
    className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    id="nationality"
    name="nationality"
    value={bookingData.nationality}
    onChange={handleInputChange}
    required
  />
</div>




          <div className="flex flex-col">
  <label htmlFor="numberOfPeople" className="mb-2 text-lg">
    Number of People:
  </label>
  <input
    type="number"
    className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    id="numberOfPeople"
    placeholder='How many are you?'
    name="numberOfPeople"
    value={bookingData.numberOfPeople}
    onChange={handleInputChange}
    required
  />
</div>

              <div className="flex flex-col">
                <label className="mb-2 text-lg" htmlFor="reasonForTravel">Reason for Travel:</label>
                <input
                  className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder='What is the purpose pf your travel'
                  type="text"
                  id="reasonForTravel"
                  name="reasonForTravel"
                  value={bookingData.reasonForTravel}
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div className="flex flex-col">
                <label className="mb-2 text-lg" htmlFor="luggage">Luggage Amount and Size:</label>
                <input
                  type="text"
                  id="luggage"
                    className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder='What many bags do you have in total?'
                  name="luggage"
                  value={bookingData.luggage}
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div className="flex flex-col">
                <label className="mb-2 text-lg" htmlFor="arrivalTime">Time of Arrival:</label>
                <input
                  type="text"
                   className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder='What is your expected time of arrival?'
                  id="arrivalTime"
                  name="arrivalTime"
                  value={bookingData.arrivalTime}
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div className="flex flex-col">
                <label className="mb-2 text-lg" htmlFor="transportationMode">Mode of Transportation:</label>
                <input
                  type="text"
                    className="text-gray-800 text-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder='What mode of transport are you using?'
                  id="transportationMode"
                  name="transportationMode"
                  value={bookingData.transportationMode}
                  onChange={handleInputChange}
                  required
                />
              </div>


      <div className="col-span-2">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-lg"
          type="submit"
          disabled={sending}
        >
            {sending ? 'Sending...' : showSuccess ? 'Sent' : 'Confirm Booking'}
        </button>
      </div>
    </form>
  </div>
)}

{showSuccess && (
  <div className="mt-4">
    <p className="text-green-300">Your booking is successful!<span></span></p>
   
 <a className='flex items-center gap-2 mt-4 animate-pulse' href={shareUrl.toString()} target="_blank" rel="noopener noreferrer">
 <div style={{ fontSize: '1.5rem' }}>
      <FaWhatsapp />
    </div> Click to chat me up on WhatsApp 
</a>

  </div>
)}
      </div>
{/* Footer */}
<footer className="mb-10 py-4 px-8 border-t border-sky-500">
  <div className="flex items-center justify-between">
    <div className=''>
  <h1 className="text-white text-2xl font-bold">Ortega</h1>
          <p className="text-xs">All Rights Reserved &copy; 2023</p>

    </div>
  
    <nav>
      <p className="text-sm">Email: <a href="mailto:benortega234@gmail.com">benortega234@gmail.com</a></p>
      <p className="text-sm">Contact: <a href="tel:+233594893946">+233 (0) 594 893 946</a></p>
    </nav>
  </div>
</footer>


    </div>
  );
};

export default HomePage;
