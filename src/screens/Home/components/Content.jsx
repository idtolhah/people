import moment from 'moment';
import avatar from '../../../assets/avatar.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchPeople } from "../../../redux/people/peopleActions";
import { Link } from "react-router-dom";
import ShadowWrapper from "../../../components/ShadowWrapper";

const Content = () => {

    const dispatch = useDispatch()

    const peopleSearch = useSelector((state) => state.peopleSearch)
    const { loading, data } = peopleSearch

    useEffect(() => {
        dispatch(searchPeople('', '', '', ''))
    }, [])

    return (
        <div className="flex flex-col text-sm text-gray-700 gap-[15px]">
            <div className='flex justify-between'>
                <span>Results:</span>
                <span>Showing {data?.length} users</span>
            </div>
            {loading ? (
                <span>Loading....</span>
            ) : (
                    data?.length > 0 ?
                        data?.map(e => {
                            return (
                                <Link key={e.id} to={`/${e.id}`} className="hover:shadow-lg">
                                    <ShadowWrapper roundSize="default">
                                        <div className="flex items-center gap-[10px]">
                                            <img className="w-[64px] rounded-full" src={avatar} alt="Avatar" />
                                            <div className="flex grow flex-col">
                                                <span className="text-lg font-bold">{e.name}</span>
                                                <span className="text-sm italic">{e.profile?.position}</span>
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
                    : <span>No Data</span>
                )
            }
        </div>
    )
}

export default Content;