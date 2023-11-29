"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import LocaleSwitcher from "./locale-switcher";
import CurrencySwitcher from "./currency-switcher";
import useAuth from "@/hooks/use-auth";
import useLoginModal from "@/hooks/use-login-modal";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'

interface Props {
    dictionary: {
        products: string
        login: string
    }
}

const NavbarActions = ({ dictionary }: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    const auth = useAuth();
    const loginModal = useLoginModal();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-2">
            <CurrencySwitcher />
            <LocaleSwitcher />
            {auth.token ? (
                <div className="flex items-center gap-x-2">
                 <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
                    <ShoppingBag
                        size={20}
                        color="white"
                    />
                    <span className="ml-2 text-sm font-medium text-white">
                        {cart.items.length}
                    </span>
                </Button>
                <ArrowLeftOnRectangleIcon onClick={auth.clear}  className="w-6 h-6 cursor-pointer" />
                </div>
            ) : (
                <Button onClick={loginModal.onOpen} className="flex items-center rounded-full bg-black px-4 py-2">
                    <span className="text-sm font-medium text-white">
                        {dictionary.login}
                    </span>
                </Button>
            )}

        </div>
    );
}

export default NavbarActions;