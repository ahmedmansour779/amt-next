import { RootLayoutProps } from "@/src/types";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const lang = (await params).lang
    const messages = (await import(`../../../translation/${lang}.json`)).default;

    return (
        <html lang={lang}>
            <body
                className={`${lang == "ar" ? "font-arabic" : "font-english"}`}
                dir={lang == "ar" ? "rtl" : "ltr"}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
