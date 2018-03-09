package com.rogery.testpluginjar;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.umetrip.umesdk.checkin.activity.CancelCheckActivity;
import com.umetrip.umesdk.data.CkiResultInfo;

/**
 * Created by LJM on 2017/5/18 16:03.
 * Description:
 */

public class CancelCheckTestActivity extends Activity {

    private EditText ticketNoEt;
    private EditText couponEt;
    private EditText flightDateEt;
    private EditText flightNoEt;
    private EditText deptCityCodeEt;
    private EditText destCityCodeEt;
    private Button submitBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.cancel_check_test);
        initView();
    }

    private void initView() {
        ticketNoEt = (EditText) findViewById(R.id.ticket_no_et);
        couponEt = (EditText) findViewById(R.id.coupon_et);
        flightDateEt = (EditText) findViewById(R.id.flight_date_et);
        flightNoEt = (EditText) findViewById(R.id.flight_no_et);
        deptCityCodeEt = (EditText) findViewById(R.id.dept_city_code_et);
        destCityCodeEt = (EditText) findViewById(R.id.dest_city_code_et);

        submitBtn = (Button) findViewById(R.id.submit);

        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cancelCheck(getCheckInParam());
            }
        });
    }

    /**
     * 获取取消选座所需的信息
     *
     * @return
     */
    private CkiResultInfo getCheckInParam() {
        CkiResultInfo ckiResultInfo = new CkiResultInfo();
        ckiResultInfo.setTktNo(ticketNoEt.getText().toString());
        ckiResultInfo.setCoupon(couponEt.getText().toString());
        ckiResultInfo.setFlightDate(flightDateEt.getText().toString());
        ckiResultInfo.setFlightNo(flightNoEt.getText().toString());
        ckiResultInfo.setDeptAirportCode(deptCityCodeEt.getText().toString());
        ckiResultInfo.setDestAirportCode(destCityCodeEt.getText().toString());
        return ckiResultInfo;
    }

    private void cancelCheck(CkiResultInfo ckiResultInfo) {
        Bundle bundle = new Bundle();
        Intent intent = new Intent();
        intent.setClass(CancelCheckTestActivity.this, CancelCheckActivity.class);
        bundle.putSerializable(Constants.CKI_RESULT, ckiResultInfo);
        bundle.putString(Constants.APP_ID, Constants.appid);
        bundle.putString(Constants.APP_KEY, Constants.appkey);
        intent.putExtras(bundle);
        startActivity(intent);
    }

}
