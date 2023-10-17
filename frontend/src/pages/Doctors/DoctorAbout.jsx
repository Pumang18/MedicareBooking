import React from "react";
import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Jagga Jasus
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem eaque nisi odit voluptatem doloribus odio veniam qui
          unde aperiam iure eveniet temporibus quam, fugit hic adipisci nostrum
          dolorum eos ad. Nihil ab perspiciatis, voluptas molestiae qui soluta
          incidunt sit molestias ipsa, nobis, aperiam in voluptatem ex. Sequi,
          repellendus? Quis, corrupti?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("11-8-2012")} - {formateDate("11-8-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Rohan Heights, Pune
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-4-2010")} - {formateDate("12-26-2011")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Rohan Heights, Pune
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-gray-600">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate("1-12-2015")} - {formateDate("4-4-2023")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                DPU Pimpri
              </p>
            </li>
            <li className="p-4 rounded bg-gray-600">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate("1-12-2015")} - {formateDate("4-4-2023")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                DPU Pimpri
              </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
