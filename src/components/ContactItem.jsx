import React from 'react'

export default function ContactItem(props)
{
    return (
        <>
       <div class="flex-auto flex-col order-9 place-content-start mx-3">
        <a href="" class="flex mt-3 mx-2 text-white">Home</a>
        <p class="flex   mt-3 mx-2 text-white">About Us</p>
        </div>
        
        
        <p class="flex-auto place-content-center order-4 mt-9 mx-3 text-white">Copyright 2022</p>
        <a  href="#" class="place-content-end fa fa-facebook order-3 my-3 "/>
        <a  href="#" class="fa fa-twitter my-3 "/>   
         
        </>
    );
}