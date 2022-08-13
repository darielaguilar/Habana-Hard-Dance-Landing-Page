import React from "react"


export default function TextContainer(props)
{


    return (
        <div class="bg-white border rounded-lg p-10 mx-20 my-7">
        <h1 class="font-bold my-2 divide-y ">Aqui va el texto</h1>
        <p class="leading-8 font-sans text-lg"> {props.text}</p>
        </div>
    );
}