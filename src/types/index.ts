export interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}