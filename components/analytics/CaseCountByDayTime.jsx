import React, { useState, useEffect } from "react";
import { getCaseCountByDailyHours } from "actions/analytics";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Message from "components/Message";

const CaseCountByDayTime = () => {
  // console.log(hospitalId, data);
  const [allData, setAllData] = useState();
  const [barData, setBarData] = useState();

  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };

  useEffect(() => {
    setAlert({ ...alert, loading: true });
    getCaseCountByDailyHours()
      .then((data) => {
        if (data.status && data.status == "success") {
          let labels = [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ];
          let dataArray = [];
          //   data.stats.map((data) => {
          //     labels.push(data._id);
          //     dataArray.push(data.count);
          //   });
          //   console.log(data.stats[0]._id);

          setAllData(data);

          setBarData({
            labels: labels,
            datasets: [
              {
                label: "Case Count By Hours Of the Day",
                data: data.countArray,
                backgroundColor: ["#ebb434"],
                borderColor: "black",
              },
            ],
          });
          setAlert({
            ...alert,
            loading: false,
            message: data.message,
            error: false,
            success: true,
          });

          window.setTimeout(() => {
            setAlert({ ...alert, success: false, message: "" });
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          ...alert,
          loading: false,
          message: err.message,
          error: true,
          success: false,
        });
      });
  }, []);
  console.log(barData);

  // const [barData, setBarData] = useState({
  //   labels: allData.stats.map((data) => data._id),
  //   datasets: allData.stats.map((data) => data.city),
  // });
  // console.log(barData);
  return (
    <>
      <div className="flex justify-center">
        {alert.error && (
          <Message
            message={alert.message}
            // alert={"error"}
            resetAlert={resetAlert}
          />
        )}
        {alert.success && (
          <Message
            message={alert.message}
            // alert={"success"}
            resetAlert={resetAlert}
          />
        )}
        {alert.loading && (
          <Message
            message={"Loading...Please Waite..."}
            // alert={"loading"}
            resetAlert={resetAlert}
          />
        )}
      </div>
      ;{barData && <Bar data={barData} />}
    </>
  );
};

export default CaseCountByDayTime;
