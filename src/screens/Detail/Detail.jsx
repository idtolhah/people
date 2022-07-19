import ShadowWrapper from "../../components/ShadowWrapper";
import avatar from '../../assets/avatar.png';
import ColorWrapper from "../../components/ColorWrapper";
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import BorderWrapper from "../../components/BorderWrapper";

const Detail = () => {
    return(
        <div className='grid place-items-center h-screen phone:mx-4 bg-gray-50'>
            <ShadowWrapper roundSize="xl">
                <div className="flex flex-col gap-[20px] tablet:gap-[10px] w-[860px] h-[540px] desktop:p-[20px] tablet:w-[430px] tablet:h-[270px] phone:h-full phone:w-full">
                    <div className="flex items-center gap-[20px]">
                        <img className="phone:w-[64px] tablet:w-[64px] desktop:w-[128px] rounded-full" src={avatar} alt="Avatar" />
                        <div className="flex grow flex-col gap-[10px] tablet:gap-[5px] phone:gap-[0px]">
                            <span className="text-5xl font-bold tablet:text-2xl phone:text-xl">Tolhah Aminuddin</span>
                            <span className="text-3xl italic tablet:text-lg phone:text-base">Digital Engineer</span>
                        </div>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 w-full phone:flex phone:flex-col gap-[20px] tablet:gap-[10px]">
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Employee ID</span>
                                <span className="text-lg font-bold tablet:text-xs">21000872</span>
                            </div>
                        </ColorWrapper>
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Education</span>
                                <span className="text-lg font-bold tablet:text-xs">Master (S2)</span>
                            </div>
                        </ColorWrapper>
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Contact</span>
                                <span className="text-lg font-bold tablet:text-xs">mr.tolhah@gmail.com</span>
                            </div>
                        </ColorWrapper>
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Department</span>
                                <span className="text-lg font-bold tablet:text-xs">Digital Analytics</span>
                            </div>
                        </ColorWrapper>
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Superior</span>
                                <span className="text-lg font-bold tablet:text-xs">Eri Fizal</span>
                            </div>
                        </ColorWrapper>
                        <ColorWrapper>
                            <div className="flex flex-col">
                                <span className="tablet:text-xs">Join Date</span>
                                <span className="text-lg font-bold tablet:text-xs">October 10th, 2021</span>
                            </div>
                        </ColorWrapper>
                    </div>
                    <div className="flex flex-row-reverse">
                        <BorderWrapper>
                            <a href="http://localhost:3003/1" target="_blank" className="flex items-center">
                                <span className="desktop:text-lg">Portfolio</span>
                                <ChevronDoubleRightIcon className="desktop:h-10 desktop:w-10 h-5 w-5 text-slate-500"/>
                            </a>
                        </BorderWrapper>
                    </div>
                </div>
            </ShadowWrapper>
        </div>
    )
}

export default Detail;