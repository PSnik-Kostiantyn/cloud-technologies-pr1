sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("ns.helloworld.controller.App", {
    onSayHello: function () {
      const oBundle = this.getView().getModel("i18n").getResourceBundle();
      MessageToast.show(oBundle.getText("helloMessage"));
    }
  });
});
