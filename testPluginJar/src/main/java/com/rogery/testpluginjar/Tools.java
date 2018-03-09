package com.rogery.testpluginjar;

import android.content.Context;
import android.widget.Toast;

/**
 * Created by LJM on 2017/5/18 14:48.
 * Description:
 */

public class Tools {
    public static boolean isEmptyString(String s) {
        if (s == null || s.trim().length() == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void showToast(Context mContext, String message) {
        Toast.makeText(mContext.getApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

}
