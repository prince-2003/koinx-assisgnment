
function Button({text, onClick, className,children}) {
    return <button className={` ${className}  p-2 rounded-lg flex items-center gap-2 justify-center `} onClick={onClick}>{text}{children}</button>;
}

export default Button;