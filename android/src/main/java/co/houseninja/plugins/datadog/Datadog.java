package co.houseninja.plugins.datadog;

import android.util.Log;

public class Datadog {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
