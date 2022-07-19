const BorderWrapper = (props) => {
    return (
        <div className="
            p-[10px] tablet:p-[10px] phone:p-[10px]
            bg-white
            text-gray-700
            border border-gray-200
            rounded-default
            hover:shadow
        "
            {...props}
        >
            {props.children}
        </div>
    )
}

export default BorderWrapper