"use client"

import { useEffect, useState } from "react"
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
    // Fix hydration error

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ProModal />
        </>
    )
}