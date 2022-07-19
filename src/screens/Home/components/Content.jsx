import avatar from '../../../assets/avatar.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchPeople } from "../../../redux/people/peopleActions";
import { SearchIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";
import ShadowWrapper from "../../../components/ShadowWrapper";
import moment from 'moment';

const Content = () => {

    const dispatch = useDispatch()
    const peopleSearch = useSelector((state) => state.peopleSearch)
    const { loading, data } = peopleSearch

    useEffect(() => {
        dispatch(searchPeople('', '', ''))
    }, [])

    return (
        <div className="flex flex-col gap-[15px]">
            <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon className="h-5 w-5 text-slate-500"/>
                </span>
                <div className="w-full rounded-default bg-white px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                    <input type="email" placeholder="Search a person" className="pl-4 my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                </div>
            </label>
            {loading ? (
                <span>Loading....</span>
            ) : 
                data?.map(e => {
                    return (
                        <Link key={e.id} to={`/1`} className="hover:shadow-lg">
                            <ShadowWrapper roundSize="default">
                                <div className="flex items-center gap-[10px]">
                                    <img className="w-[64px] rounded-full" src={avatar} alt="Avatar" />
                                    <div className="flex grow flex-col">
                                        <span className="text-lg font-bold">{e.name}</span>
                                        <span className="text-sm italic">{e.position}</span>
                                    </div>
                                    <div className="flex flex-col justify-between items-end gap-[5px]">
                                        <span className="text-xs">{e.id}</span>
                                        <span className="text-xs">{moment(e.createdAt).format('D MMM YYYY')}</span>
                                    </div>
                                </div>
                            </ShadowWrapper>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Content;