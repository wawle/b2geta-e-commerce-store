"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/modals/preview-modal";
import LoginModal from "@/components/modals/login-modal";

interface Props {
    dictionary: any
}

const ModalProvider = ({ dictionary }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <LoginModal />
            <PreviewModal dictionary={dictionary} />
        </>
    );
}

export default ModalProvider;