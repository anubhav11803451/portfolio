import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

export default function Home() {
    return (
        <div className={twJoin('content', 'flex flex-col items-center justify-between ')}>
            <div className='hero bg-base-200'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <Image
                        width={200}
                        height={200}
                        src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
                        className='max-w-sm rounded-lg shadow-2xl'
                        alt={''}
                    />
                    <div>
                        <h1 className='text-5xl font-bold'>Hi, I am Anubhav</h1>
                        <p className='py-6'>
                            Innovative Software Engineer | Frontend Developer | Transforming Ideas
                            into Seamless Digital Experiences with Creative Precision and Technical
                            Excellence | Committed to pushing boundaries and shaping the future of
                            user-centric technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
