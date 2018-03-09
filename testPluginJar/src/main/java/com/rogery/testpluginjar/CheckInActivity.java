package com.rogery.testpluginjar;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.umetrip.umesdk.checkin.activity.CheckInfoSelectSeats;
import com.umetrip.umesdk.checkin.activity.CheckLoginActivity;
import com.umetrip.umesdk.checkin.data.c2s.C2sFlightBean;
import com.umetrip.umesdk.data.CkiResultInfo;
import com.umetrip.umesdk.data.UmetripCallback;
import com.umetrip.umesdk.helper.UmetripSdk;

/**
 * Created by LJM on 2017/5/18 15:17.
 * Description:
 */

public class CheckInActivity extends Activity {

    private EditText ticketNoEt;
    private EditText couponEt;
    private EditText flightDateEt;
    private EditText flightNoEt;
    private EditText deptCityCodeEt;
    private EditText destCityCodeEt;
    private EditText passengerNameEt;
    private Button submitBtn;

    private Button directTestBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.check_in);
        init();//值机初始化
        initView();
    }

    private void initView() {

        ticketNoEt = (EditText) findViewById(R.id.ticket_no_et);
        couponEt = (EditText) findViewById(R.id.coupon_et);
        flightDateEt = (EditText) findViewById(R.id.flight_date_et);
        flightNoEt = (EditText) findViewById(R.id.flight_no_et);
        deptCityCodeEt = (EditText) findViewById(R.id.dept_city_code_et);
        destCityCodeEt = (EditText) findViewById(R.id.dest_city_code_et);
        passengerNameEt = (EditText) findViewById(R.id.passenger_name_et);

        submitBtn = (Button) findViewById(R.id.submit);
        directTestBtn = (Button) findViewById(R.id.direct_test_btn);

        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                checkIn(getCheckInParam());
            }
        });

        directTestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                checkIn();
            }
        });
    }

    /**
     * 进入输入票号 手机号界面 获取行程后进行值机  UmetripSdk.JUMP_TO_TRAVEL_RECORD
     */
    private void checkIn() {
        Bundle bundle = new Bundle();
        Intent intent = new Intent();

        UmetripSdk.setJumpType(UmetripSdk.JUMP_TO_TRAVEL_RECORD);

        bundle.putString(Constants.APP_ID, Constants.appid);
        bundle.putString(Constants.APP_KEY, Constants.appkey);
        bundle.putString(UmetripSdk.MOBILE, "");
        bundle.putString(UmetripSdk.CERT_TYPE, "TK");  //身份证 NI 客票号TK 护照PP
        bundle.putString(UmetripSdk.CERT_NO, "");
        bundle.putString(UmetripSdk.FLIGHT_NO,"CA1213");
        intent.setClass(CheckInActivity.this, CheckLoginActivity.class);

        bundle.putInt(Constants.L_ZH, 0);
        intent.putExtras(bundle);
        startActivity(intent);
    }

    /**
     * 传入相关参数直接进入座位图     UmetripSdk.JUMP_TO_SEAT_MAP
     *
     * @param c2s
     */
    private void checkIn(C2sFlightBean c2s) {
        Bundle bundle = new Bundle();
        Intent intent = new Intent();

        UmetripSdk.setJumpType(UmetripSdk.JUMP_TO_SEAT_MAP);

        bundle.putString(Constants.APP_ID, Constants.appid);
        bundle.putString(Constants.APP_KEY, Constants.appkey);
        bundle.putString(Constants.THIRD_USER_ID, Constants.userIdStr);
        bundle.putSerializable("c2s", c2s);
        intent.setClass(CheckInActivity.this, CheckInfoSelectSeats.class);
        bundle.putInt(Constants.L_ZH, 0);
        intent.putExtras(bundle);
        startActivity(intent);
    }

    /**
     * 获取直接跳转到座位图所需的信息
     *
     * @return
     */
    private C2sFlightBean getCheckInParam() {
        C2sFlightBean c2sFlightBean = new C2sFlightBean();

        c2sFlightBean.setTktNo(ticketNoEt.getText().toString());
        c2sFlightBean.setCoupon(couponEt.getText().toString());
        c2sFlightBean.setFlightDate(flightDateEt.getText().toString());
        c2sFlightBean.setFlightNo(flightNoEt.getText().toString());
        c2sFlightBean.setDeptAirportCode(deptCityCodeEt.getText().toString());
        c2sFlightBean.setDestAirportCode(destCityCodeEt.getText().toString());
        c2sFlightBean.setPassengerName(passengerNameEt.getText().toString());

        return c2sFlightBean;
    }

    private void init(){
        /*
         * 回调接口接收值机结果数据 结果数据包括：
		 * String tktNo; //航班号
		 * String phoneNo; //手机号
		 * String airlineCorp;//航空公司
		 * String flightNo;//航班号
		 * String flightData;//航班日期
		 * int ckiStatus; //值机状态 0 值机成功 1值机失败
		 * String seatNum; //座位号
		 * String phoneNo; //手机号
		 */
        UmetripCallback callback = new UmetripCallback() {

            @Override
            public void onCkiResult(CkiResultInfo result) {
                Log.v("SDK", "ckiResult");
                if (result != null) {
                    Log.v("SDK", "flightNo:" + result.getFlightNo());
                }
            }

            @Override
            public void onCancelResult(int errCode) {
                Log.v("SDK", "onCancelResult:" + errCode);
            }

            /**
             * @Title: onNetResult
             * @Description: TODO
             * @param requestType 接口类型 座位图  常客卡列表 值机
             * @param networkErrorCode 网络错误码正常为0 -1代表网络错误
             * @param errorCode 接口请求 业务错误码
             * @param errorMsg 错误信息
             * @see com.umetrip.umesdk.data.UmetripCallback#onNetResult(long, long, long, java.lang.String)
             */
            @Override
            public void onNetResult(long requestType, long networkErrorCode,
                                    long errorCode, String errorMsg) {
			    /*
			     * requestType
			     * 1001 代表 座位图
			     * 1002 代表 值机结果
			     * 1003 代表取消值机
			     */
                Log.v("SDK", "onNetResult:" + errorCode);
            }

        };
		/*
		 * 设置回调接口
		 */
        UmetripSdk.setCallback(callback);
    }

}
