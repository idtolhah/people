const ShadowWrapper = (props) => {
    return (
        <div className={`
            p-[10px]
            bg-white
            text-gray-700
            border border-gray-200
            shadow-lg
            rounded-${props.roundSize}
        `}>
            {props.children}
        </div>
    )
}

export default ShadowWrapper