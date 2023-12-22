'use client';
import { ThemeProvider } from 'next-themes';

export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute='data-theme' enableSystem defaultTheme='system'>
            {children}
        </ThemeProvider>
    );
};
