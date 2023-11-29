import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/config";

interface Props {
    lang: Locale;
}

const Navbar = async ({ lang }: Props) => {
    const dictionary = await getDictionary(lang);
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href={`/${lang}`} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav dictionary={dictionary.navbar} />
                    <NavbarActions dictionary={dictionary.navbar} />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;