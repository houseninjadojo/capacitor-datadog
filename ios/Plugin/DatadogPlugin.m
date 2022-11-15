#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(DatadogPlugin, "Datadog",
           CAP_PLUGIN_METHOD(setUserInfo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(addUserExtraInfo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(addUserAction, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(addAttribute, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(removeAttribute, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(addError, CAPPluginReturnPromise);
)
