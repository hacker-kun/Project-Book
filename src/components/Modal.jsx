import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

function Modal({children , buttonCaption },ref){

    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md shadow-md p-4">
            {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
            
        </form>
        
        </dialog>,
        document.getElementById('modal-root')
    )
}

export default forwardRef(Modal);