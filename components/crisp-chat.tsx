"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("0325cedb-b9e7-4564-a43b-764eeb5ff0e5");
    }, []);

    return null;
}