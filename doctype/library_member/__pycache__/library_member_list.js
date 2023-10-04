// frappe.listview_settings['Library Transaction'] = {
// 	add_fields: ["status"],
// 	get_indicator: function (doc) {
// 		if (doc.status === "Issue") {
// 			// Issue
// 			return [__("Issue"), "green", "status,=,Issued"];
// 		} else if(doc.status === "Return") {
// 			// Return
// 			return [__("Return"), "pink", "status,=,Return"];
//         }
//     }