package com.rogery.testpluginjar;
 /*
   * Created by wuxin
   * 文件名 com.umetrip.android.msky.app.push.receiver
   * 包含类名列表TravelSkyPushReceiver
   * 版本信息,版本号
   * 创建日期16/5/17
   * 版权声明
   */

import android.content.Context;

import com.apkfuns.logutils.LogUtils;
import com.umetrip.android.msky.push.UMPushMessage;
import com.umetrip.android.msky.push.UMPushMessageReceiver;

/**
 * 类名：TravelSkyPushReceiver
 *
 * @author wuxin<br/>
 *         实现的主要功能:
 *         创建日期：16/5/17
 *         修改者，修改日期16/5/17，修改内容。
 */
public class TravelSkyPushReceiver extends UMPushMessageReceiver {
    @Override
    protected void onMessageReceived (Context context, UMPushMessage umPushMessage) {
        LogUtils.d("消息到达: " + umPushMessage.getExtraParams().toString());
    }

    @Override
    protected void onNotificationClicked (Context context, UMPushMessage umPushMessage) {
        LogUtils.d("消息点击: " + umPushMessage.getExtraParams().toString());

    }

}
