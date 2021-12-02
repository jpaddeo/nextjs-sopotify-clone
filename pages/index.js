import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className=''>
        <div className='flex'>
          <Sidebar />
          <Center />
        </div>
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
