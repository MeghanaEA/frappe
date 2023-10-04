// Copyright (c) 2023, Meghana E A and contributors
// For license information, please see license.txt

frappe.ui.form.on('Visitor Membership', {
	refresh(frm) {
		if(!frm.is_new()){
			frm.trigger('validate_visitor');
		}
	},

	validate_visitor(frm) {
		frappe.msgprint(__("Not a visitor"))
		// if visitor
		// // 		var membership_status = frm.doc.membership_status;
		// // 		if(membership_status == 'Active') {
		// // 			// frm.save();
	}
});
