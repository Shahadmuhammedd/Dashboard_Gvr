import React from "react";
import Perfomance from "../Charts/Perfomance";
import RecentActivities from "./RecentActivities";
import Messages from "./Messages";
import ServiceCategory from "./ServiceCategory";
import  Calendar  from "../Charts/Calender";
import Finance from "../Charts/Finance"
import CustomerArrival from "../Charts/CustomerArrival"
import Statics from "../Charts/Statics"
import Revenue from "../Charts/Revenue"
import IncompleteBokking from "./IncompleteBokking";
import Complaints from "../Components/Complaints"
function Home() {
  return (
    <div className="h-[2500px] bg-gray-100">
      <div className="flex ">
        <div className="block w-[977px]">
          <div className="flex w-[750px] h-28 rounded-2xl bg-white shadow-2xl mt-10  ml-24 ">
            <div className="flex mt-1">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
                alt=""
                className="w-14 h-14 rounded-full mt-5 ml-5"
              />
              <span className="ml-3 mt-4">
                <h2 className="text-[#A098AE] text-xl">Franchisee</h2>
                <h1 className="text-blue-900 font-bold text-3xl">932</h1>
              </span>
            </div>
            <div className="flex mt-1">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt=""
                className="w-14 h-14  rounded-full mt-5 ml-5"
              />
              <span className="ml-3 mt-4">
                <h2 className="text-[#A098AE] text-xl">Dealer</h2>
                <h1 className="text-blue-900 font-bold text-3xl">754</h1>
              </span>
            </div>
            <div className="flex mt-1">
              <img
                src="https://img.freepik.com/free-photo/purple-calendar-clock-icon-3d-reminder-notification-concept-website-ui-purple-background-3d-rendering-illustration_56104-1317.jpg"
                alt=""
                className="w-14 h-14  rounded-full mt-5 ml-8"
              />
              <span className="ml-3 mt-4">
                <h2 className="text-[#A098AE] text-xl">Service Providers</h2>
                <h1 className="text-blue-900 font-bold text-3xl">40</h1>
              </span>
            </div>
            <div className="flex mt-1">
              <img
                src="https://tse2.mm.bing.net/th?id=OIG3.Y9vjHtW4DiTC5tT5bEBq&pid=ImgGn"
                alt=""
                className="w-14 h-14  rounded-full mt-5 ml-2"
              />
              <span className="ml-3 mt-4">
                <h2 className="text-[#A098AE] text-xl">Users</h2>
                <h1 className="text-blue-900 font-bold text-3xl">40K</h1>
              </span>
            </div>
          </div>
          <div className="flex mt-4">
            <Perfomance />
          </div>
          <div className="flex flex-row mt-4">
          <Calendar/>
          <Finance/>
          </div>
          <div className="flex mt-4">
            <CustomerArrival/>
          </div>
          <div className="flex flex-row mt-4">
            <Statics/>
            <Revenue/>
          </div>
          <div className="flex mt-4">
            <IncompleteBokking/>
            <Complaints/>
          </div>
        </div>

        <div className="w-[370px] h-[1920px] shadow-2xl  ml-[60px]">
          <RecentActivities />
          <Messages />
          <ServiceCategory />
        </div>
      </div>
    </div>
  );
}

export default Home;
