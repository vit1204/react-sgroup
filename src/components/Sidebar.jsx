
export default function Sidebar(){
    return(
        <div className="w-[300px] left-0 px-5 border-[1px] fixed h-[100vh] bg-white z-[1000]">
        <div className="w-full text-center mt-5 text-2xl font-bold text-[#2b00d4]">
            <img src={"../assets/logo.jpg"}  alt="sgroup logo" />
        </div>
        <div>
            <div className="flex flex-col mt-14 gap-6 px-3">
                <div className="flex flex-row items-center gap-4 text-base">
                    <i className="fi fi-rr-dashboard"></i>
                    <div className="font-medium text-[#bcbcbc]">Dashboard</div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <i className=" font-medium fi fi-rr-users-alt"></i>
                    <div className=" font-medium text-[#bcbcbc]">User manager</div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <i className="fi fi-rr-calendar"></i>
                    <div className="font-medium text-[#bcbcbc]">Sgrup Premium</div>
                </div>
            </div>
        </div>
    </div>
    )
}