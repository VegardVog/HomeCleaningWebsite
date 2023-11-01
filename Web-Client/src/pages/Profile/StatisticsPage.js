import React from "react";
import Navbar from "../../components/Navbar";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";

const StatisticsPage = () => {
  const { auth } = useSelector((state) => state);

  const [dataValues, setDataValues] = useState([]);
  const [xValues, setXValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api
        .post("/api/v1/getStatistics", { name: auth.name })
        .then((response) => {
          let tempList = [];
          let tempXValues = [];
          for (let key in response.data) {
            tempXValues.push(key);
            tempList.push([key, response.data[key]]);
          }
          setXValues(tempXValues);
          setDataValues(tempList);
        });
    };

    fetchData().catch(console.error);
  }, []);

  console.log(xValues);

  const options = {
    chart: {
      type: "column",
    },
    xAxis: {
      categories: xValues,
    },
    title: {
      text: "Statistics",
    },
    series: [
      {
        data: dataValues,
      },
    ],
  };

  return (
    <>
      <div className="homePageWrapper">
        <Navbar />
        StatisticsPage
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default StatisticsPage;
