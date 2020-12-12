import React from 'react';
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";

import areaJson from "../Data/ClassInfo2.json";
import '../CSSs/ChartPage.css';
import menuIcon from '../Images/menuIcon.png';

drilldown(Highcharts);

let areaArray = [];        //지역 이름 담기
let areaOverlapCheck = ""; //지역 이름 비교
let areaCount = 0;         //배열 index

let areaCntArray = [];          //지역수 담기
let areaOverlapCheck2 = "서울"; //지역 이름 비교
let areaCntCount = 0;           //지역수 카운터
let areaCount2 = 0;             //배열 index

let seriesPrss = []; //highcharts data

let drilldownData = []; //drilldown data

class ChartPage extends React.Component {

    constructor(props) {
        super(props);
        // this.allowChartUpdate = true;
        this.state = {
            options: {
                chart: {
                    type: "column",
                    events: {
                        drilldown: function (e) {
                            // console.log("Drilldown" + e.point.name);
                            if (!e.seriesOptions) {
                                var chart = this;
                                if (e.point.name === "서울") {
                                    highChartsDrilldown(0);
                                    //   chart.addSingleSeriesAsDrilldown(e.point, {
                                    //     name: "New",
                                    //     color: "green",
                                    //     //data: [["Mary", 34], ["Peter", 22]]
                                    //     data: [34]
                                    //   });
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "서울",
                                        //color: "green",
                                        //data: [["Mary", 4], ["Peter", 12]]
                                        //data: [['a',3],['b',3],['c',3],['d',3],['e',3],['f',3],['g',3]]
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "부산") {
                                    highChartsDrilldown(1);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "부산",
                                        //color: "green",
                                        //data: [["Mary", 4], ["Peter", 12]]
                                        //data: [['a',3],['b',3],['c',3],['d',3],['e',3],['f',3],['g',3]]
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "대구") {
                                    highChartsDrilldown(2);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "대구",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "인천") {
                                    highChartsDrilldown(3);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "인천",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "광주") {
                                    highChartsDrilldown(4);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "광주",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "대전") {
                                    highChartsDrilldown(5);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "대전",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "울산") {
                                    highChartsDrilldown(6);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "울산",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "세종") {
                                    highChartsDrilldown(7);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "세종",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "경기") {
                                    highChartsDrilldown(8);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "경기",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "강원") {
                                    highChartsDrilldown(9);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "강원",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "충북") {
                                    highChartsDrilldown(10);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "충북",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "충남") {
                                    highChartsDrilldown(11);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "충남",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "전북") {
                                    highChartsDrilldown(12);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "전북",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "전남") {
                                    highChartsDrilldown(13);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "전남",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "경북") {
                                    highChartsDrilldown(14);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "경북",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "경남") {
                                    highChartsDrilldown(15);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "경남",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "제주") {
                                    highChartsDrilldown(16);
                                    chart.addSingleSeriesAsDrilldown(e.point, {
                                        name: "제주",
                                        data: drilldownData
                                    });
                                } else if (e.point.name === "") {

                                }
                                chart.applyDrilldown();
                            }
                        }
                    }
                },

                title: {
                    text: ' '
                },
                accessibility: {
                    announceNewData: {
                        enabled: true
                    }
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: seriesPrss
                //   series: [
                //     {
                //       name: "Areas",
                //       colorByPoint: true,
                //       data: [
                //         {
                //           name: "서울",
                //           y: 62.74,
                //           drilldown: true
                //         },
                //         {
                //           name: "부산",
                //           y: 10.57,
                //           drilldown: true
                //         },
                //         {
                //           name: "Internet Explorer",
                //           y: 7.23,
                //           drilldown: true
                //         },
                //         {
                //           name: "Safari",
                //           y: 5.58,
                //           drilldown: true
                //         },
                //         {
                //           name: "Edge",
                //           y: 4.02,
                //           drilldown: true
                //         },
                //         {
                //           name: "Opera",
                //           y: 1.92,
                //           drilldown: true
                //         },
                //         {
                //           name: "NAMR",
                //           y: 7.62,
                //           drilldown: true
                //         }
                //       ]
                //     }
                //   ]

            }
        };
    }

    render() {
        highChartsData();
        return (
            <div className="ChartTotal_Container">
                <div className="Chart_OverTablet">
                    <div className="TitleLine_BackPoint"></div>
                    <div className="TitleLine">
                        <p className="Mobile_text1"><img className="TopMenuIcon" src={menuIcon} /> 장애인 스포츠 시설 분포도</p>
                        <p className="Chart_text">장애인 스포츠 수강 시설 분포도 현황</p>
                        <p className="Chart_text">해당 지역클릭시 더욱 상세하기 확인할 수 있습니다.</p>
                    </div>
                </div>
                <div className="Chart_Mobile">
                    <div className="TitleLine">
                        <p className="Mobile_text1"><img className="TopMenuIcon" src={menuIcon} /> 장애인 스포츠 시설 분포도</p>
                        <p className="Chart_text2">장애인 스포츠 수강 시설 분포도 현황</p>
                        <p className="Chart_text2">해당 지역클릭시 더욱 상세하기 확인할 수 있습니다.</p>
                    </div>
                </div>
               
                <div className="ChartComponent">
                    <HighchartsReact highcharts={Highcharts} options={this.state.options}  ></HighchartsReact>
                </div>
            </div>
        );
    }
}

function highChartsData() {

    areaArray = [];        //지역 이름 담기
    areaOverlapCheck = ""; //지역 이름 비교
    areaCount = 0;         //배열 index

    areaCntArray = [];          //지역수 담기
    areaOverlapCheck2 = "서울"; //지역 이름 비교
    areaCntCount = 0;           //지역수 카운터
    areaCount2 = 0;             //배열 index

    areaJson.map((info, index) => {

        //공통된 지역이름 체크
        if (areaOverlapCheck !== info[0]) { //지역 이름이 바뀔때 배열 index 위치 변경 
            areaOverlapCheck = info[0];
            areaCount++;
        }

        areaArray[areaCount - 1] = areaOverlapCheck; //지역이름 배열에 넣어주기

        //지역 수 체크
        if (areaOverlapCheck2 !== info[0]) { //지역 이름이 바뀔때 지역 수 배열에 넣어주기 
            areaOverlapCheck2 = info[0];
            areaCount2++;
            areaCntArray[areaCount2 - 1] = areaCntCount;
            areaCntCount = 0;
        }

        if (areaJson.length === index + 1) { //마지막 한번 돌지 않아서 코드 추가.
            areaCntArray[areaCount2] = areaCntCount;
        }

        if (areaOverlapCheck2 === info[0]) { //지역 수 count
            areaCntCount++;
        }

    });

    let dataPrss = []; //data 배열
    let dataJson = ""; //data json
    let dataCntSum = 0; //지역 총합 - 백분률

    for (let s = 0; s < areaCntArray.length; s++) { //data sum

        dataCntSum += areaCntArray[s];

    }

    for (let i = 0; i < areaArray.length; i++) { //data json 만들어주기

        dataJson = { name: "" + areaArray[i], y: ((areaCntArray[i] / dataCntSum) * 100), drilldown: true };
        dataPrss[i] = dataJson;

    }


    seriesPrss[0] = { name: "Areas", colorByPoint: true, data: dataPrss }; //highchart series

    //highChartsDrilldown();
}

let highChartsDrilldown = (area) => {
    let cityArray = [""];
    let cityBl = true;

    //let cityCntArray = [];          //지역수 담기
    //let cityOverlapCheck2 = "서울"; //지역 이름 비교
    //let cityCntCount = 0;           //지역수 카운터
    //let cityCount2 = 0;             //배열 index


    areaJson.map((info) => {

        if (info[0] === areaArray[area]) {

            //공통된 지역이름 체크
            for (let c = 0; c < cityArray.length; c++) {

                if (cityArray[c] === info[1]) { //하나라도 같은게 있으면 false
                    cityBl = false;
                }

                if (cityBl && c === cityArray.length - 1) { //같은거 체크 && 마지막 길이에 판별
                    cityArray[cityArray.length] = info[1]; //배열 맨끝에 추가
                    cityBl = true; //초기화
                }
            }//debugger;
            cityBl = true; //for 다 돌고 다시 시작할때 초기화

        }
    });

    console.log(cityArray);

    let cityCntArray = new Array(cityArray.length); //시,도 개수 담아주는
    let cityCntCount = 0;

    for (var i = 0; i < cityCntArray.length; i++) {
        cityCntArray[i] = 0; //시,도 개수 0 초기화
    }


    areaJson.map((info, index) => {

        if (info[0] === areaArray[area]) { //선택 지역

            for (var i = 1; i < cityArray.length; i++) { //선택의 지역의 시,도 이름

                if (info[1] === cityArray[i]) { //시,도 이름과 같은걸 찾고 찾은 배열 위치에 +1을 해주는식으로 카운트
                    //시,도 이름을 전체 데이터에서 찾고 다시 또 찾고 하는 반복을 피하고
                    //전체 데이터를 한번 돌때 특정 이름의 배열위치에 스텍을 쌓는식.
                    cityCntCount = cityCntArray[i - 1] + 1;
                    cityCntArray[i - 1] = cityCntCount;
                    cityCntCount = 0;
                    break; //찾았다면 그 뒤 이름은 비교할 필요가 없다.

                }


            }

        }

    });

    console.log(cityCntArray);

    let cityCntArraySum = 0; //총합-백분율

    for (var i = 0; i <= cityCntArray.length - 2; i++) {
        cityCntArraySum += cityCntArray[i];
    }

    drilldownData = []; //뒤로 가기 후 다시 데이터 조회 시 초기화
    for (let cc = 1; cc < cityArray.length; cc++) { //drilldown data setting

        drilldownData[cc - 1] = ["" + cityArray[cc], ((cityCntArray[cc - 1] / cityCntArraySum) * 100)];

    }

    console.log(drilldownData);

}



export default ChartPage;