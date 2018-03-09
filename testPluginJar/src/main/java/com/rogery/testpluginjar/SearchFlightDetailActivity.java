package com.rogery.testpluginjar;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.umetrip.umesdk.flightstatus.activity.FlightDetailActivity;

import static com.rogery.testpluginjar.Constants.APP_KEY;
import static com.rogery.testpluginjar.Constants.appid;

/**
 * Created by LJM on 2017/5/18 14:31.
 * Description:用于测试查询航班详情
 */

public class SearchFlightDetailActivity extends Activity {

    private EditText flightNoEt;
    private EditText flightDateEt;
    private Button submitBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.search_flight_detail);
        initView();
    }

    private void initView() {
        flightNoEt = (EditText) findViewById(R.id.flight_no_et);
        flightDateEt = (EditText) findViewById(R.id.flight_date_et);
        submitBtn = (Button) findViewById(R.id.submit);

        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String flightDate = flightDateEt.getText().toString();
                String flightNo = flightNoEt.getText().toString();

                if (Tools.isEmptyString(flightDate) || Tools.isEmptyString(flightNo)) {
                    Tools.showToast(SearchFlightDetailActivity.this, "请输入完整信息");
                } else {
                    searchFightDetail(flightDate, flightNo);
                }
            }
        });
    }

    /**
     * 跳转到航班详情页面
     * @param flightDate    航班日期，格式参照2017-06-23  月份和日期不足两位需要用0补充

     */
    private void searchFightDetail(String flightDate, String flightNo) {
        Intent intent = new Intent();
        Bundle bundle = new Bundle();
        intent.setClass(SearchFlightDetailActivity.this, FlightDetailActivity.class);
        bundle.putString(Constants.APP_ID, appid);
        bundle.putString(APP_KEY, Constants.appkey);
        bundle.putString(Constants.F_DATE, flightDate);
        bundle.putString(Constants.F_NUM, flightNo);
        bundle.putInt(Constants.L_ZH, 0);//不支持英文
        intent.putExtras(bundle);
        startActivity(intent);
    }
}
