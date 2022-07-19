const Layout = (props) => {
    return (
        <div className='flex flex-col items-center h-screen bg-gray-50'>
            {props.children}
        </div>
    )
}

export default Layout;