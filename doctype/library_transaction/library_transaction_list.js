frappe.listview_settings['Library Transaction'] = {
	add_fields: ["status"],
	get_indicator: function (doc) {
		if (doc.status === "Issue") {
			// Issue
			return [__("Issue"), "green", "status,=,Issued"];
		} else if(doc.status === "Return") {
			// Return
			return [__("Return"), "pink", "status,=,Return"];
        }
    }

    // onload: function(listview) {
	// 	var method = "erpnext.library.doctype.library_transaction";

	// 	listview.page.add_menu_item(__("Issue"), function() {
	// 		listview.call_for_selected_items(method, {"status": "Issued"});
	// 	});

	// 	listview.page.add_menu_item(__("Return"), function() {
	// 		listview.call_for_selected_items(method, {"status": "Return"});
	// 	});
    // }

}
