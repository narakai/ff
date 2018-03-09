package com.rogery.testpluginjar;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.TextView;

import com.umetrip.SDKInterface.OnBindResult;
import com.umetrip.SDKInterface.OnUploadDeviceTokenResult;
import com.umetrip.android.msky.push.UMNotificationReceiver;
import com.umetrip.business.BindHelper;
import com.umetrip.business.DeviceTokenHelper;
import com.umetrip.business.InitManager;
import com.umetrip.umesdk.activity.AbstractActivity;
import com.umetrip.umesdk.data.CkiResultInfo;
import com.umetrip.umesdk.data.UmetripCallback;
import com.umetrip.umesdk.flightstatus.activity.FlightAttentionActivity;
import com.umetrip.umesdk.helper.ConstNet;
import com.umetrip.umesdk.helper.Global;
import com.umetrip.umesdk.helper.PreferenceData;
import com.umetrip.umesdk.helper.UmetripSdk;

public class MainActivity extends AbstractActivity implements OnClickListener {

    private Context context;
    private TravelSkyPushReceiver br;
    private UMNotificationReceiver br2;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        context = MainActivity.this;

        //初始化 START
        Global.set_id(Constants.appid);
        Global.set_key(Constants.appkey);
        Global.set_userId(Constants.userIdStr);
        InitManager initManager = new InitManager(getApplicationContext());
        initManager.install(Constants.appid, Constants.appkey, true);
        //初始化 END

        findViewById(R.id.num).setOnClickListener(this);
        findViewById(R.id.deps).setOnClickListener(this);
        findViewById(R.id.attention).setOnClickListener(this);
        findViewById(R.id.btn_cki).setOnClickListener(this);
        findViewById(R.id.btn_checkbind).setOnClickListener(this);
        findViewById(R.id.btn_cancelcheck).setOnClickListener(this);
        findViewById(R.id.btn_clear).setOnClickListener(this);
        findViewById(R.id.btn_boardingcard).setOnClickListener(this);
        findViewById(R.id.bind).setOnClickListener(this);
        findViewById(R.id.upload).setOnClickListener(this);
        findViewById(R.id.println).setOnClickListener(this);

//        IntentFilter filter = new IntentFilter("com.rogery.testpluginjar.TravelSkyPushReceiver");
//        br = new TravelSkyPushReceiver();
//        registerReceiver(br, filter);
//
//        IntentFilter filter2 = new IntentFilter("com.umetrip.android.msky.push.UMNotificationReceiver");
//        br2 = new UMNotificationReceiver();
//        registerReceiver(br2, filter2);

		/*
         * 调试开关
		 */
        UmetripSdk.debug = true;
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

    @Override
    public void onClick(View v) {
        int id = v.getId();
        Intent intent = new Intent();
        Bundle bundle = new Bundle();
        switch (id) {
            case R.id.num:
                intent.setClass(MainActivity.this, SearchFlightDetailActivity.class);
                startActivity(intent);
                break;
            case R.id.deps:
                intent.setClass(MainActivity.this, FlightStatusActivity.class);
                startActivity(intent);
                break;
            case R.id.attention:
                intent.setClass(MainActivity.this, FlightAttentionActivity.class);
                bundle.putString(Constants.APP_ID, Constants.appid);
                bundle.putString(Constants.APP_KEY, Constants.appkey);
                bundle.putInt(Constants.L_ZH, 0);
                intent.putExtras(bundle);
                startActivity(intent);
                break;
            case R.id.btn_cki:
                intent.setClass(MainActivity.this,CheckInActivity.class);
                startActivity(intent);
                break;
            case R.id.btn_checkbind:
                checkBind(Constants.userIdStr, Constants.userTokenStr);
                break;
            case R.id.btn_cancelcheck:
                intent.setClass(MainActivity.this,CancelCheckTestActivity.class);
                startActivity(intent);
                break;
            case R.id.btn_clear:
                UmetripSdk.clearUserInfo(Constants.userIdStr);
                break;
            case R.id.btn_boardingcard:
                intent.setClass(MainActivity.this, BoardingCardTestActivity.class);
                startActivity(intent);
                break;
            case R.id.bind:
                testBindHelper();
                break;
            case R.id.upload:
                testDeviceTokenHelper();
                break;
            case R.id.println:
                TextView textview = (TextView) findViewById(R.id.textview);
                String uuid = PreferenceData.getMQCString(PreferenceData.CLIENT_UUID, null);
                textview.setText("ClientID:" + uuid);
                break;
            default:
                break;
        }
    }

    //检查绑定
    private void checkBind(final String userId, final String userToken) {
		/*
		 * 绑定返回
		 */
        final Handler mBindHandler = new Handler() {

            @Override
            public void handleMessage(Message msg) {
                switch (msg.what) {
                    case ConstNet.FLOW_SUCCESS://成功
					/*
					 * 处理请求结果
					 */
                        boolean isBound = UmetripSdk.getBindResult(msg.getData(), userId);
                        Log.v("SDK", "bindResult:bind" + isBound);
                        break;
                    case ConstNet.FLOW_FAIL: //失败
					/*
					 * 网络错误
					 */
                        Log.v("SDK", "bindResult:" + "bind fail");
                        break;
                    default:
                        break;
                }
            }

        };
		/*
		 * 检查绑定
		 */
        Handler mCheckBindHandler = new Handler() {

            @Override
            public void handleMessage(Message msg) {
                switch (msg.what) {
                    case ConstNet.FLOW_SUCCESS://成功
					/*
					 * 处理请求结果
					 */
                        boolean isBound = UmetripSdk.getBindResult(msg.getData(), userId);
                        Log.v("SDK", "bindResult:checkbind" + isBound);
                        if (!isBound) {
						/*
						 * 绑定的操作  
						 */
                            UmetripSdk.doUserBind(getParent(), userId, userToken,
                                    mBindHandler);
                        }
                        break;
                    case ConstNet.FLOW_FAIL: //失败
					/*
					 * 网络错误
					 */
                        Log.v("SDK", "bindResult:" + "checkbind fail");
                        break;
                    default:
                        break;
                }
            }

        };
		/*
		 * 检查是否绑定
		 */
        UmetripSdk.checkIsUserBound(this, userId, Constants.appid,
                Constants.appkey, mCheckBindHandler);
    }

    private class TestBind implements OnBindResult {
        @Override
        public void successCase(String sessionID) {
            Log.e("===1===", "success");
        }

        @Override
        public void failCase() {
            Log.e("===1===", "fail");
        }

        @Override
        public void defaultCase() {
            Log.e("===1===", "default");
        }
    }

    private class TestUpload implements OnUploadDeviceTokenResult {
        @Override
        public void successCase(int result) {
            Log.e("===1===", "success");
        }

        @Override
        public void failCase() {
            Log.e("===1===", "fail");
        }

        @Override
        public void defaultCase() {
            Log.e("===1===", "default");
        }
    }

    private void testBindHelper() {
        TestBind test = new TestBind();
        new BindHelper(context, Constants.userIdStr, test);
    }

    private void testDeviceTokenHelper() {
        TestUpload test = new TestUpload();
        new DeviceTokenHelper(context, "deviceToken3", test);
    }

    @Override
    protected void onDestroy() {
//        unregisterReceiver(br);
//        unregisterReceiver(br2);
        super.onDestroy();
    }
}
