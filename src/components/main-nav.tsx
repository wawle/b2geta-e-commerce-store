"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils"


interface Props {
    dictionary: {
        products: string
    }
}


const MainNav = ({ dictionary }: Props) => {
    const pathname = usePathname();
    const params = useParams();

    // const routes = data.map((route) => ({
    //     href: `/${params.lang}/category/${route.id}`,
    //     label: route.name,
    //     active: pathname === `/${params.lang}/category/${route.id}`,
    // }));
    const routes = [{
        href: `/${params.lang}/product`,
        label: dictionary.products,
        active: pathname === `/${params.lang}/product`,
    }]

    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
};

export default MainNav;