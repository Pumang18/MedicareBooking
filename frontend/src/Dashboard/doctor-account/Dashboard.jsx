import React, { useState } from "react";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Tabs from "./Tabs";
import photo from "../../assets/images/about.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";

function Dashboard() {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState("overview");

  return (
    
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved == "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
                  </svg>

                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We'll review
                    manually and approve within 3days.
                  </div>
                </div>
              )}

              <div>
                {tab == "overview" && (
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={photo} alt="" className="w-full" />
                      </figure>

                      <div>
                        <span className="bg-white text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {data.specialization} Surgeon
                        </span>

                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                          Shantanu Sarode
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">
                            <img src={starIcon} alt="" />
                            4.5
                          </span>
                          <span className=" text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">
                            (256)
                          </span>
                        </div>

                        <p className="text_para font-[15px] lg:max-w-[390px] leading-6">
                          Doctor Bio
                        </p>
                      </div>
                      </div>
                      <DoctorAbout
                        name={data.name}
                        about={data.about}
                        qualification={data.qualification}
                        experiences={data.experiences}
                      />
                  </div>
                )}

                {tab == "appointments" && (
                  <div className="text-white">appointments</div>
                )}
                {tab == "settings" && <Profile/>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
