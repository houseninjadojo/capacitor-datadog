import Foundation
import Capacitor
import Datadog

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DatadogPlugin)
public class DatadogPlugin: CAPPlugin {
    override public func load() {
        let rumApplicationID = getConfigValue("rumApplicationID") ?? ""
        let clientToken = getConfigValue("clientToken") ?? ""
        let environment = getConfigValue("environment") ?? ""
        let service = getConfigValue("service") ?? ""
        Datadog.initialize(
            appContext: .init(),
            trackingConsent: .granted,
            configuration: Datadog.configuration
                .builderUsing(
                    rumApplicationID: rumApplicationID,
                    clientToken: clientToken,
                    environment: environment
                )
                .set(serviceName: service)
                .set(endpoint: .us)
                .trackUIKitRUMViews()
                .trackUIKitRUMActions()
                .trackURLSession()
                .build()
        )
        Global.rum = RUMMonitor.initialize()
    }

    @objc func setUserInfo(_ call: CAPPluginCall) {
        let id = call.getString("id") ?? ""
        let name = call.getString("name") ?? ""
        let email = call.getString("email") ?? ""
        let extraInfo = call.getObject("extraInfo") ?? [:]
        Datadog.setUserInfo(id: id, name: name, email: email, extraInfo: extraInfo)
        call.resolve([])
    }

    @objc func addUserExtraInfo(_ call: CAPPluginCall) {
        let extraInfo = call.getObject("extraInfo") ?? [:]
        Datadog.addUserExtraInfo(extraInfo)
        call.resolve([])
    }

    @objc func addUserAction(_ call: CAPPluginCall) {
        let type = call.getString("type") ?? ""
        let name = call.getString("name") ?? ""
        let attributes = call.getObject("attributes") ?? [:]
        Global.rum.addUserAction(type: .custom, name: name, attributes: attributes)
        call.resolve([])
    }

    @objc func addAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
        Global.rum.addAttribute(forKey: key, value: value)
        call.resolve([])
    }

    @objc func removeAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        Global.rum.removeAttribute(forKey: key)
        call.resolve([])
    }

    @objc func addError(_ call: CAPPluginCall) {
        let error = call.getObject("error") ?? [:]
        let message = error["message"] as? String ?? ""
        let source = error["source"] as? String ?? ""
        let stack = error["stack"] as? String ?? ""
        let type = error["type"] as? String ?? ""
        Global.rum.addError(
            message: message,
            source: source,
            stack: stack,
            attributes: ["type": type]
        )
        call.resolve([])
    }
}
