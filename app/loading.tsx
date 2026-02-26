import { basePath, staging } from "@/supabase/client";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center w-dvw h-dvh bg-black z-50 fixed top-0 left-0">
            <div className="loader"></div>
            <Image className="invert" src={`${!staging ? basePath : ''}/logo.png`} alt='UAEYFC Logo' width={200} height={70} />
        </div>
    )
}