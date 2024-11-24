
import { useTranslations } from "next-intl";
import ChangeLang from "../components/ChangeLang";
import ChangeTheme from "../components/ChangeTheme";

export default function Home() {
    const t = useTranslations('homePage');

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    return (
        <div>
            <ChangeLang />
            <ChangeTheme />
            <p className="bg-white text-black dark:bg-black dark:text-white">
                {t("title")}
            </p>
        </div>
    )
}
