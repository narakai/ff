package com.rogery.testpluginjar;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.umetrip.umesdk.checkin.activity.BoardingCardActivity;
import com.umetrip.umesdk.data.CkiResultInfo;

import static com.rogery.testpluginjar.Constants.APP_KEY;
import static com.rogery.testpluginjar.Constants.appid;

/**
 * Created by LJM on 2017/5/18 14:31.
 * Description:
 */

public class BoardingCardTestActivity extends Activity {

    private EditText ticketNoEt;
    private EditText couponEt;
    private Button submitBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.boarding_card);
        initView();
    }

    private void initView() {
        ticketNoEt = (EditText) findViewById(R.id.ticket_no_et);
        couponEt = (EditText) findViewById(R.id.coupon_et);
        submitBtn = (Button) findViewById(R.id.submit);

        submitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String ticketNo = ticketNoEt.getText().toString();
                String coupon = couponEt.getText().toString();

                if (Tools.isEmptyString(ticketNo) || Tools.isEmptyString(coupon)) {
                    Tools.showToast(BoardingCardTestActivity.this, "请输入完整信息");
                } else {
                    viewBoardingCard(ticketNo, coupon);
                }
            }
        });
    }

    /**
     * 跳转到电子登机牌页面。
     *
     * @param ticketNo
     * @param coupon
     */
    private void viewBoardingCard(String ticketNo, String coupon) {
        CkiResultInfo info1 = new CkiResultInfo();
        Bundle bundle = new Bundle();
        Intent intent = new Intent();

        info1.setTktNo(ticketNo);
        info1.setCoupon(coupon);

        bundle.putSerializable(Constants.CKI_RESULT, info1);
        bundle.putString(Constants.APP_ID, appid);
        bundle.putString(APP_KEY, Constants.appkey);
        intent.putExtras(bundle);

        intent.setClass(BoardingCardTestActivity.this, BoardingCardActivity.class);
        startActivity(intent);
    }
}
