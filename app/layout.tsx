import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
export const metadata={title:'Names — Explore Names Around the World',description:'Discover names by region, country, gender, religion, meaning and lucky number.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body id="top">{children}<Footer /></body></html>}
