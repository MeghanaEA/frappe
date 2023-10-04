// Copyright (c) 2023, Meghana E A and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	// refresh: function(frm) {
		validate: function(frm) {
			frm.set_value('member_name', frm.doc.first_name + " " + frm.doc.last_name )
	// }
		}
});
