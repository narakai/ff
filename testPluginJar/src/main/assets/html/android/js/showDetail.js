//var jsonList='{"pflystatus":[{"bagWaitOrCkiCounter":"","blockOnn":"","blockStatus":"","airlineChnName":"中国国航","pta":"17:15","dateDif":0,"deptAirportChnName":"北京首都","arrtraffic":"流量正常","destAirportChnName":"上海虹桥","ckiCounter":"","flyDisRatio":1,"acType":"777","restFlyTime":"0","preflightstatus":"暂无前序航班信息","pgate1":"C02","blockCity":"","flyTime":"130","prealtime1":"15:36","timeZoneFlag":0,"prealtime2":"17:09","exit":"","blockOff":"","ptd":"15:30","baggageTurn":"","pplantime2":"17:40","deptTimeZone":"GMT+8","pplantime1":"15:30","flightDistance":"1178公里","dateDifPek":0,"planeage":"1.8年","preflightflag":"-1","atdPassOver":"0","closeFlightsFlag":"0","line":"北京-上海","pterminal1":"T3","pterminal2":"T2","planetype":"777-300D","isHost":false,"timestamp":1386056160000,"flightDuration":"本次航班共飞行2小时10分","ontime":"82.9%","offTimeDesc":"提前31分到达","destTimeZone":"GMT+8","pstatus":"到达","ptemp1":"","pairport1":"PEK","pairport2":"SHA","arrofftime":"提前31分到达","ptemp2":"","pcity1":"北京首都","pcity2":"上海虹桥","pdate1":"2013-12-03","inBoundLandPos":"","deptraffic":"小面积延误","pflycode":"CA1515","landPos":"0","pname":"CA","delayReason":""},{"bagWaitOrCkiCounter":"","blockOnn":"","blockStatus":"","airlineChnName":"中国国航","pta":"17:15","dateDif":0,"deptAirportChnName":"北京首都","arrtraffic":"流量正常","destAirportChnName":"上海虹桥","ckiCounter":"","flyDisRatio":1,"acType":"777","restFlyTime":"0","preflightstatus":"暂无前序航班信息","pgate1":"C02","blockCity":"","flyTime":"130","prealtime1":"15:36","timeZoneFlag":0,"prealtime2":"17:09","exit":"","blockOff":"","ptd":"15:30","baggageTurn":"","pplantime2":"17:40","deptTimeZone":"GMT+8","pplantime1":"15:30","flightDistance":"1178公里","dateDifPek":0,"planeage":"1.8年","preflightflag":"-1","atdPassOver":"0","closeFlightsFlag":"0","line":"北京-上海","pterminal1":"T3","pterminal2":"T2","planetype":"777-300D","isHost":false,"timestamp":1386056160000,"flightDuration":"本次航班共飞行2小时10分","ontime":"82.9%","offTimeDesc":"提前31分到达","destTimeZone":"GMT+8","pstatus":"到达","ptemp1":"","pairport1":"PEK","pairport2":"SHA","arrofftime":"提前31分到达","ptemp2":"","pcity1":"北京首都","pcity2":"上海虹桥","pdate1":"2013-12-03","inBoundLandPos":"","deptraffic":"小面积延误","pflycode":"CA1515","landPos":"0","pname":"CA","delayReason":""}],"ptype":"1"}';
function showDetail(jsonList){
var jsonListObj=JSON.parse(jsonList);
var pflystatus=jsonListObj.pflystatus;
for(var i=0;i<pflystatus.length;i++){
//航班号
if(!pflystatus[i].pflycode){
var pflycode="";
}else{
var pflycode=pflystatus[i].pflycode;
}

if(pflycode==""){
pflycode="--";
}

//起飞天气
if(!pflystatus[i].pdesc1){
var pdesc1="";
}else{
var pdesc1=pflystatus[i].pdesc1;
}
if(pdesc1==""){
pdesc1="sunny";
}
if(pdesc1.indexOf("雪")>-1){
pdesc1="snow";
}
if(pdesc1.indexOf("雷")>-1){
pdesc1="thunder";
}
if(pdesc1.indexOf("雨")>-1){
pdesc1="rain";
}
if(pdesc1.indexOf("阴")>-1){
pdesc1="overcast";
}
if(pdesc1.indexOf("云")>-1){
pdesc1="cloudy";
}
if(pdesc1.indexOf("霾")>-1||pdesc1.indexOf("雾")>-1){
pdesc1="fog";
}
if(pdesc1.indexOf("沙")>-1){
pdesc1="sand_storm";
}
if(pdesc1.indexOf("晴")>-1){
pdesc1="sunny";
}

//到达天气
if(!pflystatus[i].pdesc2){
var pdesc2="";
}else{
var pdesc2=pflystatus[i].pdesc2;
}
if(pdesc2==""){
pdesc2="sunny";
}
if(pdesc2.indexOf("雪")>-1){
pdesc2="snow";
}
if(pdesc2.indexOf("雷")>-1){
pdesc2="thunder";
}
if(pdesc2.indexOf("雨")>-1){
pdesc2="rain";
}
if(pdesc2.indexOf("阴")>-1){
pdesc2="overcast";
}
if(pdesc2.indexOf("云")>-1){
pdesc2="cloudy";
}
if(pdesc2.indexOf("霾")>-1||pdesc1.indexOf("雾")>-1){
pdesc2="fog";
}
if(pdesc2.indexOf("沙")>-1){
pdesc2="sand_storm";
}
if(pdesc2.indexOf("晴")>-1){
pdesc2="sunny";
}
//准点率
if(!pflystatus[i].ontime){
var ontime="";
}else{
var ontime=pflystatus[i].ontime;
}
if(ontime==""){
ontime="100%";
}

//机型
if(!pflystatus[i].planetype){
var planetype="";
}else{
var planetype=pflystatus[i].planetype;
}
if(planetype==""){
planetype="--";
}

//机龄
if(!pflystatus[i].planeage){
var planeage="";
}else{
var planeage=pflystatus[i].planeage;
}
if(planeage==""){
planeage="--"
}

//出发城市
if(!pflystatus[i].pcity1){
var pcity1="";
}else{
var pcity1=pflystatus[i].pcity1;
}
if(pcity1==""){
pcity1="--"
}

//到达城市
if(!pflystatus[i].pcity2){
var pcity2="";
}else{
var pcity2=pflystatus[i].pcity2;
}
if(pcity2==""){
pcity2="--"
}

//航班状态
if(!pflystatus[i].pstatus){
var pstatus="";
}else{
var pstatus=pflystatus[i].pstatus;
}
if(pstatus==""){
pstatus="--"
}

//起飞温度
if(!pflystatus[i].ptemp1){
var ptemp1="";
}else{
var ptemp1=pflystatus[i].ptemp1;
}
if(ptemp1==""){
ptemp1="--";
}

//起飞航站楼
if(!pflystatus[i].pterminal1){
var pterminal1="";
}else{
var pterminal1=pflystatus[i].pterminal1;
}
if(pterminal1==""){
pterminal1="--";
}

//起飞登机口
if(!pflystatus[i].pgate1){
var pgate1="";
}else{
var pgate1=pflystatus[i].pgate1;
}
if(pgate1==""){
pgate1="--";
}

//起飞计划时间
if(!pflystatus[i].pplantime1){
var pplantime1="";
}else{
var pplantime1=pflystatus[i].pplantime1;
}
if(pplantime1==""){
pplantime1="--:--";
}

//起飞实际时间
if(!pflystatus[i].prealtime1){
var prealtime1="";
}else{
var prealtime1=pflystatus[i].prealtime1;
}
if(prealtime1==""){
prealtime1="--:--";
}

//起飞机场流量
if(!pflystatus[i].deptraffic){
var deptraffic="";
}else{
var deptraffic=pflystatus[i].deptraffic;
}
if(deptraffic==""){
deptraffic="--";
}

//到达机场气温
if(!pflystatus[i].ptemp2){
var ptemp2="";
}else{
var ptemp2=pflystatus[i].ptemp2;
}
if(ptemp2==""){
ptemp2="--";
}

//到达机场航站楼
if(!pflystatus[i].pterminal2){
var pterminal2="";
}else{
var pterminal2=pflystatus[i].pterminal2;
}
if(pterminal2==""){
pterminal2="--";
}

//到达计划时间
if(!pflystatus[i].pplantime2){
var pplantime2="";
}else{
var pplantime2=pflystatus[i].pplantime2;
}
if(pplantime2==""){
pplantime2="--:--";
}

//到达实际时间
if(!pflystatus[i].prealtime2){
var prealtime2="";
}else{
var prealtime2=pflystatus[i].prealtime2;
}
if(prealtime2==""){
prealtime2="--:--";
}

//到达机场流量
if(!pflystatus[i].arrtraffic){
var arrtraffic="";
}else{
var arrtraffic=pflystatus[i].arrtraffic;
}
if(arrtraffic==""){
arrtraffic="--";
}



//航空公司两字码
if(!pflystatus[i].pname){
var pname="";
}else{
var pname=pflystatus[i].pname;
}
if(pname==""){
pname="--";
}

//前序信息
if(!pflystatus[i].preflightstatus){
var preflightstatus="";
}else{
var preflightstatus=pflystatus[i].preflightstatus;
}
if(preflightstatus==""){
preflightstatus="--";
}

//起飞城市
if(!pflystatus[i].deptAirportChnName){
var deptAirportChnName="";
}else{
var deptAirportChnName=pflystatus[i].deptAirportChnName+"机场";
}
if(deptAirportChnName==""){
deptAirportChnName="--";
}

//到达城市
if(!pflystatus[i].destAirportChnName){
var destAirportChnName="";
}else{
var destAirportChnName=pflystatus[i].destAirportChnName+"机场";
}
if(destAirportChnName==""){
destAirportChnName="--";
}

//航空公司中文名
if(!pflystatus[i].airlineChnName){
var airlineChnName="";
}else{
var airlineChnName=pflystatus[i].airlineChnName;
}
if(airlineChnName==""){
airlineChnName="--";
}

var boxInfo=document.getElementsByClassName("brief-info box-info")[0];
var boxDescription=document.createElement("div");
var header=document.createElement("div");
var detailInfo=document.createElement("div");
var detailInfo2=document.createElement("div");
var preOrderFlight=document.createElement("div");
boxDescription.className="detail cls";
header.className="header";
detailInfo.className="detail-info";
preOrderFlight.className="preOrderFlight";
detailInfo2.className="detail-info";
boxDescription.innerHTML='<span><span style="font-size:16px">'+airlineChnName+'  </span><span style="font-size:16px">'+pflycode+'</span></br></br>历史准点率:<em class="red">'+ontime+'</em></span><span>机型:'+planetype+'</span><span>机龄:'+planeage+'</span>';
header.innerHTML='<h3 class="normal"><em>'+pstatus+'</em><h3 class="line dark1"><div class="line-wrap"><span>'+pcity1+'</span><span class="sep">到</span><span>'+pcity2+'</span></div></h3>';
detailInfo.innerHTML='<h4 class="dark1"><span>'+deptAirportChnName+'</span><span class="weather"><img src="image/'+pdesc1+'.png" style="width:16px;height:16px;"/></span><span class="temp">'+ptemp1+'</span></h4><div class="list list1"><span><img src="image/dep.png" style="width:18px;height:18px;"/></span><span>航站楼:</span><span class="blue">'+pterminal1+'</span><span class="sec">登机口:</span><span class="blue">'+pgate1+'</span><span class="time">'+pplantime1+'</span></div><div class="list list2"><span>机场流量:</span><span>'+deptraffic+'</span><span class="time">'+prealtime1+'</span></div>';
detailInfo2.innerHTML='<h4 class="dark1"><span>'+destAirportChnName+'</span><span class="weather"><img src="image/'+pdesc2+'.png" style="width:16px;height:16px;"/></span><span class="temp">'+ptemp2+'</span></h4><div class="list list1"><span><img src="image/arr.png" style="width:18px;height:18px;"/></span><span>航站楼:</span><span class="blue">'+pterminal2+'</span><span class="time">'+pplantime2+'</span></div><div class="list list2"><span>机场流量:</span><span>'+arrtraffic+'</span><span class="time">'+prealtime2+'</span></div>';
preOrderFlight.innerHTML='<h2>'+preflightstatus+'   >></h2>';


boxInfo.appendChild(boxDescription);
boxInfo.appendChild(header);
boxInfo.appendChild(detailInfo);
boxInfo.appendChild(detailInfo2);
boxInfo.appendChild(preOrderFlight);
}
var header=document.getElementsByClassName("header");
for(var i=0;i<header.length;i++){
var statusList=header[i].childNodes[0];
var em=statusList.getElementsByTagName("em")[0];
if(em.innerHTML=="起飞"||em.innerHTML=="到达"||em.innerHTML=="计划"){
statusList.className="normal";
}else{
statusList.className="delay";
}
}
var preOrderFlight=document.getElementsByClassName("preOrderFlight");
for(var i=0;i<preOrderFlight.length;i++){
for(var j=0;j<pflystatus.length;j++){
//前序航班号
if(!pflystatus[i].preflightno){
var preflightno="";
}else{
var preflightno=pflystatus[i].preflightno;
}
if(!preflightno==""){
preOrderFlight[i].onclick=function (){
//window.location.href= "umesdk://flightstatus.search/byFlightNo?flightno="+preflightno;
window.umesdk.go('preflightno');
}
}

}
}
}
addLoaderEvent(showDetail);
