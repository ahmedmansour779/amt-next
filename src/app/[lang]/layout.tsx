import { RootLayoutProps } from "@/src/types";

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const lang = (await params).lang

    return (
        <html lang={lang}>
            <body
                className={`${lang == "ar" ? "font-arabic" : "font-english"}`}
                dir={lang == "ar" ? "rtl" : "ltr"}
            >
                {children}
            </body>
        </html>
    );
}
