frappe.listview_settings['Book'] = {
    add_fields: ["status"],
    get_indicator: function (doc) {
        if (doc.status === "Avaliable") {
            // Issue
            return [__("Avaliable"), "green", "status,=,Avaliable"];
        } else if(doc.status === "Issued") {
            // Return
            return [__("Issued"), "pink", "status,=,Issued"];

        }
    }
}