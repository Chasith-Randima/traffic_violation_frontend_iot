import React from "react";
import Layout from "components/Layout";
import CasesByCity from "components/analytics/CasesByCity";
import CasesCountByActive from "components/analytics/CasesCountByActive";
import CaseCountByYear from "components/analytics/CaseCountByYear";
import CaseCountByWeekDays from "components/analytics/CaseCountByWeekDays";
import CaseCoundByDayTime from "components/analytics/CaseCountByDayTime";

const AllAnalytics = () => {
  return (
    <>
      <Layout>
        <div className="mt-2 mb-2 p-2 mr-10 border-2 border-gray-200 rounded-xl ">
          <div className="text-center md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl">
              Cases Count By City
            </h2>
            <CasesByCity />
          </div>
          <div className="text-center  md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl my-2">
              Active Cases Count
            </h2>
            <CasesCountByActive />
          </div>
          <div className="text-center  md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl my-2">
              Case Count By Month
            </h2>
            <CaseCountByYear />
          </div>
          <div className="text-center  md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl my-2">
              Case Count By Week Days
            </h2>
            <CaseCountByWeekDays />
          </div>
          <div className="text-center  md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl my-2">
              Case Count By Hour of the Day
            </h2>
            <CaseCoundByDayTime />
          </div>
          {/* <div className="text-center md:w-2/3 md:mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl my-2">
              Appointments By Date{" "}
            </h2>
            <AllAppointmentsByDate />
          </div> */}
          {/* <div className="text-center w-2/3 mx-auto">
            <h2 className="text-gray-400 font-semibold text-xl">
              Appointments By Month
            </h2>
            {hospitalId && (
              <AppointmentCountByYearLine hospitalId={hospitalId} />
            )}
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default AllAnalytics;
