import ChangeLang from "@/src/components/ChangeLang";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('homePage');

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    return (
        <div>
            <ChangeLang />
            {t("title")}
        </div>
    )
}
