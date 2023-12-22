import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { twMerge } from 'tailwind-merge';
// import { twJoin } from 'tailwind-merge';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <main
            className={twMerge(
                'template_root',
                'flex flex-col items-center',
                'mx-8 min-h-screen md:mx-12 xl:mx-24',
            )}
        >
            <Navbar className='mb-4 mt-3' />
            {children}
            <Footer />
        </main>
    );
}
