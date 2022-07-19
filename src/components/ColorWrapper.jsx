const ColorWrapper = (props) => {
    return (
        <div className="
            p-[20px] tablet:p-[10px] phone:p-[10px]
            bg-primary
            text-white
            border border-gray-200
            rounded-default
            hover:shadow-lg
        "
            {...props}
        >
            {props.children}
        </div>
    )
}

export default ColorWrapper