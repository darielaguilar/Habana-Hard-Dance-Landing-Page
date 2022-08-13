import React from "react";

export default function Header({children})
{
    return (
        <div className="flex rounded-md bg-indigo-500/75 mx-10 h-32 justify-center ">
            {children}
        </div>
    );
}