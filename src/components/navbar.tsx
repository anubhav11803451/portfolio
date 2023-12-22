import ThemeSwitcher from '@/lib/theme/switcher';
import React, { type AllHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Navbar = (props: AllHTMLAttributes<HTMLElement>) => {
    const { className, children, ...rest } = props;
    return (
        <nav
            className={twMerge(
                className,
                'navbar rounded-btn bg-base-100   shadow-xl shadow-base-300 ring-2 ring-base-300 md:w-3/4',
            )}
            {...rest}
        >
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu dropdown-content menu-sm z-[1] mt-3 w-44 rounded-box bg-base-100 p-2 shadow'
                    >
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Services</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <a className='btn btn-ghost text-xl'>Welcome</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
