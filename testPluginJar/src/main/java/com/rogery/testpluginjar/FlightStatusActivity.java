package com.rogery.testpluginjar;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.umetrip.umesdk.flightstatus.activity.FlightListActivity;

/**
 * Created by LJM on 2017/5/18 14:57.
 * Description:
 */

public class FlightStatusActivity extends Activity {

    private EditText deptCityCodeEt;
    private EditText destCityCodeEt;
    private EditText fightDateEt;

    private String deptCityCode;
    private String destCityCode;
    private String fightDate;

    private Button submitBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.flight_status);
        initView();
    }

    private void initView() {
        submitBtn = (Button) findViewById(R.id.submit);
        deptCityCodeEt = (EditText) findViewById(R.id.dept_city_code_et);
        destCityCodeEt = (EditText) findViewById(R.id.dest_city_code_et);
        fightDateEt = (EditText) findViewById(R.id.flight_date_et);


        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                deptCityCode = deptCityCodeEt.getText().toString().toUpperCase();
                destCityCode = destCityCodeEt.getText().toString().toUpperCase();
                fightDate = fightDateEt.getText().toString();

                if (Tools.isEmptyString(deptCityCode) || Tools.isEmptyString(destCityCode)) {
                    Tools.showToast(FlightStatusActivity.this, "请输入完整信息");
                }

                viewFlightStatus(deptCityCode, destCityCode, fightDate);
            }
        });
    }

    /**
     * 查询某个机场的航班动态，日期为空表示当前的航班动态
     *
     * @param deptCityCode 出发机场三字码
     * @param destCityCode 到达机场三字码
     * @param fightDate    日期需要在半年以内
     */
    private void viewFlightStatus(String deptCityCode, String destCityCode, String fightDate) {
        Intent intent = new Intent();
        Bundle bundle = new Bundle();
        intent.setClass(FlightStatusActivity.this, FlightListActivity.class);
        bundle.putString(Constants.APP_ID, Constants.appid);
        bundle.putString(Constants.APP_KEY, Constants.appkey);
        bundle.putString(Constants.DEP_CODE, deptCityCode);
        bundle.putString(Constants.DES_CODE, destCityCode);
        bundle.putString(Constants.F_DATE, fightDate);
        bundle.putString(Constants.THIRD_USER_ID, Constants.userIdStr);
        bundle.putInt(Constants.L_ZH, 0);
        intent.putExtras(bundle);
        startActivity(intent);
    }
}
