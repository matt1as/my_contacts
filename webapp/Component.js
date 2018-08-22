jQuery.sap.declare("cus.crm.mycontacts.CRM_MYCONTExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.crm.mycontacts",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/CRM_MYCONT"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.cus.crm.mycontacts.Component.extend("cus.crm.mycontacts.CRM_MYCONTExtension.Component", {
	metadata: {
		manifest: "json"
	}
});