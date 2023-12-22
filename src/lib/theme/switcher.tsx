'use client';
import { useTheme } from 'next-themes';
import React, { useState, type AllHTMLAttributes, useEffect } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { themes } from '../constants';
import capitalize from 'lodash/capitalize';
import { CheckIcon } from 'lucide-react';

const ThemeSwitcher = (props: AllHTMLAttributes<HTMLElement>) => {
    const { className, ...rest } = props;
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className='btn btn-ghost'>
                <span className='loading loading-dots loading-md'></span>
            </div>
        );
    }

    return (
        <div
            title='Change Theme'
            className={twMerge(className, 'theme_switcher', 'dropdown dropdown-end ')}
            {...rest}
        >
            <div tabIndex={0} role='button' className='btn btn-ghost rounded-btn'>
                <svg
                    width='20'
                    height='20'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-5 w-5 stroke-current md:hidden'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                    ></path>
                </svg>{' '}
                <span className='hidden font-normal md:inline'>{capitalize(theme)}</span>{' '}
                <svg
                    width='12px'
                    height='12px'
                    className='hidden h-2 w-2 fill-current opacity-60 sm:inline-block'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 2048 2048'
                >
                    <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                </svg>
            </div>{' '}
            <div
                tabIndex={0}
                className='dropdown-content top-px z-10 mt-16 h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5'
            >
                <div className='grid grid-cols-1 gap-3 p-3'>
                    {themes.map((_theme, inx) => {
                        return (
                            <button
                                key={_theme.concat(inx.toString())}
                                onClick={() => {
                                    setTheme(_theme);
                                }}
                                className='text-start outline-offset-4 outline-base-content [&_svg]:visible'
                                data-set-theme={_theme}
                            >
                                <span
                                    data-theme={_theme}
                                    className='block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content'
                                >
                                    <span className='grid grid-cols-5 grid-rows-3'>
                                        <span className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3'>
                                            <CheckIcon
                                                height={16}
                                                width={16}
                                                className={twJoin(
                                                    _theme === theme ? 'visible' : 'hidden',
                                                )}
                                            />
                                            <span className='flex-grow text-sm'>{_theme}</span>{' '}
                                            <span className='flex h-full shrink-0 flex-wrap items-center gap-1'>
                                                <span className='h-2 w-2 rounded-badge bg-primary'></span>{' '}
                                                <span className='h-2 w-2 rounded-badge bg-secondary'></span>{' '}
                                                <span className='h-2 w-2 rounded-badge bg-accent'></span>{' '}
                                                <span className='h-2 w-2 rounded-badge bg-neutral'></span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
