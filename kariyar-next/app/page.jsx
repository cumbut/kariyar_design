'use client';
import dynamic from 'next/dynamic';
import BootScreen from '../components/BootScreen.jsx';

// The site relies on window, localStorage and scroll APIs, so it renders on the client only.
const KariyarApp = dynamic(() => import('../components/KariyarApp.jsx'), { ssr: false, loading: () => <BootScreen /> });

export default function Page() {
  return <KariyarApp />;
}
