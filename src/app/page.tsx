
import Link from 'next/link';

export default function MainPage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/home"><span className='whiteColor'>Home</span></Link></li>
            <li><Link href="/about"><span className='whiteColor'>About us</span></Link></li>
          <li><Link href="/contact"><span className='whiteColor'>Contact us</span></Link></li>
            <li><Link href="/job"><span className='whiteColor'>Job</span></Link></li>
          </ul> </nav>
      </header>

      <main>
        <h1>Main Page!</h1>
        <p><i>Welcome to the main page! Use the links above to navigate.</i></p>
      </main>
    <div className='picture'>
      <img src='https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_640.jpg'  alt="Centred Image"/>
    </div>

    </div>
  );
}
