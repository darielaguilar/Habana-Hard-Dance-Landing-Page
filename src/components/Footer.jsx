import React from "react";

export default function Footer({children})
{

    return (
    <>
        <div class="flex items-stretch flex-row-reverse bg-green-500">
            {children}
        </div>
        
        </>
    );
}
