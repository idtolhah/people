import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPeople } from "../../../redux/people/peopleActions";
import { listPositions } from "../../../redux/position/positionActions";
import ShadowWrapper from "../../../components/ShadowWrapper";
import { SearchIcon } from "@heroicons/react/solid";

const Sidebar = () => {

    const dispatch = useDispatch()
    const positionList = useSelector((state) => state.positionList)
    const { loading, data } = positionList

    const [position, setPosition] = useState('')
    const [name, setName] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [sortDirection, setSortDirection] = useState('ASC')

    useEffect(() => {
        dispatch(listPositions())
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchPeople(position, sortBy, sortDirection, name))
    }


    return (
        <ShadowWrapper roundSize="default">
            <form className="flex flex-col space-y-4 p-[10px]" onSubmit={handleSearch}>
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon className="h-5 w-5 text-slate-500"/>
                    </span>
                    <div className="w-full rounded-default bg-white px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                        <input type="text" placeholder="Search a person" className="pl-4 my-3 w-full border-none bg-transparent outline-none focus:outline-none" 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </label>
                <span className="font-bold">Sort:</span>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <select className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        onChange={e => {
                            setSortBy(e.target.value)
                            dispatch(searchPeople(position, e.target.value, sortDirection, name))
                        }}
                        >
                        <option value="">Sort By</option>
                        <option value="createdAt">Joined Date</option>
                    </select>
                </div>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <select className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        onChange={e => {
                            setSortDirection(e.target.value)
                            dispatch(searchPeople(position, sortBy, e.target.value, name))
                        }}
                        >
                        <option value="ASC">Direction</option>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                </div>
                <span className="font-bold">Filter:</span>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <select className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        onChange={e => {
                            setPosition(e.target.value)
                            dispatch(searchPeople(e.target.value, sortBy, sortDirection, name))
                        }}
                        >
                        <option value="">Position</option>
                        {data?.map(e => <option key={e.position} value={e.position}>{e.position}</option>)}
                    </select>
                </div>
            </form>
        </ShadowWrapper>
    )
}

export default Sidebar;