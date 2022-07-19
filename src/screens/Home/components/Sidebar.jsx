import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPeople } from "../../../redux/people/peopleActions";
import ShadowWrapper from "../../../components/ShadowWrapper";
import { listPositions } from "../../../redux/position/positionActions";

const Sidebar = () => {

    const dispatch = useDispatch()
    const positionList = useSelector((state) => state.positionList)
    const { loading, data } = positionList

    const [sortBy, setSortBy] = useState('')
    const [sortDirection, setSortDirection] = useState('ASC')
    const [position, setPosition] = useState('')

    useEffect(() => {
        dispatch(listPositions())
    }, [])

    return (
        <ShadowWrapper roundSize="default">
            <div className="flex flex-col space-y-4 p-[10px]">
                <span className="font-bold">Sort:</span>
                <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <select className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                        onChange={e => {
                            setSortBy(e.target.value)
                            dispatch(searchPeople('', e.target.value, ''))
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
                            dispatch(searchPeople('', sortBy, e.target.value))
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
                            dispatch(searchPeople(e.target.value, sortBy, sortDirection))
                        }}
                    >
                        <option value="">Position</option>
                        {data?.map(e => <option value={e.position}>{e.position}</option>)}
                    </select>
                </div>
            </div>
        </ShadowWrapper>
    )
}

export default Sidebar;