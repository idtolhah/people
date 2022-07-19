import Layout from "../../components/Layout";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const Home = () => {
    return (
        <Layout>
            <div className="flex phone:flex-col py-[30px]">
                <div className='desktop:w-[250px] h-full'>
                    <Sidebar />
                </div>
                <div className='w-[24px] h-[24px]'></div>
                <div className='desktop:w-[750px]'>
                    <Content />
                </div>
            </div>
        </Layout>
    )
}

export default Home;