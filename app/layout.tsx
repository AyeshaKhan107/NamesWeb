import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import LocaleProvider from '@/components/LocaleProvider';
import { getServerLocale } from '@/lib/i18n/server';
export const metadata={title:'Names — Explore Names Around the World',description:'Discover names by region, country, gender, religion, meaning and lucky number.'};
export default function RootLayout({children}:{children:ReactNode}) {
	const locale = getServerLocale();
	const direction = locale === 'ur' || locale === 'ar' ? 'rtl' : 'ltr';

	return (
		<html lang={locale} dir={direction}>
			<body id="top">
				<LocaleProvider initialLocale={locale}>
					{children}
					<Footer />
				</LocaleProvider>
			</body>
		</html>
	);
}
