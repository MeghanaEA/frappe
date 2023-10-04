// Copyright (c) 2023, Meghana E A and contributors
// For license information, please see license.txt

frappe.ui.form.on('Visitor', {
	// refresh: function(frm) {
				validate(frm) {
					frm.set_value('visitor_name', frm.doc.first_name + " " + frm.doc.last_name )
			// }
				}

	// }
});
