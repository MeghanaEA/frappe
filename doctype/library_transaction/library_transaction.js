// Copyright (c) 2023, Meghana E A and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {
    onload(frm) {
		// Fetch price list details
		frm.add_fetch("rent_fee", "", "paid");
    }
});
    // refresh(frm) {
	// 	frm.add_custom_button("Transaction", () => {
    //     var value = frappe.db.get_value("Book", {"name":frm.doc.book}, 'name', function(value) { 
    //         if (value.name === frm.doc.book) {
    //             var match_row = null;
    //             frm.doc.transaction_details.forEach((row) => {
    //                 if (row.book_id === frm.doc.book && row.visitor === frm.doc.visitor && row.issue_date && !row.return_date) {
    //                     match_row = row;
    //                 }
    //             })
    //             if (match_row) {
    //                 match_row.return_date = frappe.datetime.now_datetime()
    //                 refresh_field('transaction_details')
    //             }else {
    //                 var child = frm.add_child("transaction_details");
    //                 child.book_id = frm.doc.book;
    //                 child.visitor = frm.doc.visitor; 
    //                 child.issue_date = frappe.datetime.now_datetime()
    //                 refresh_field('transaction_details');
    //             }
    //         }            
    //     })
    //     });
    // }
	

// validate(frm) {


    // //     if (frm.doc.status === 'Issue') {
    // //         frappe.msgprint(__("Please enter the issue date.")) 
    // //     }

    // //     else (frm.doc.status === 'Return'); {
    // //         frappe.msgprint(__("Please enter the return date."))
    // //     }

    //     if (frm.doc.return_date > frappe.datetime.nowdate()) {
    //         frappe.msgprint(__("Return date cannot be in future."))
    //     }
    // }

    // refresh(frm) {;
    //     // if(frm.doc.rent_fee && frm.doc.docstatus == 1){
    //     //     frm.add_custom_button("Payment Entry", () => {
    //     //         frappe.call({
    //     //             method: "negentropy.library.doctype.library_transaction.library_transaction.create_payment_entry",
    //     //             args: {
    //     //                 doctype: frm.doc.doctype,
    //     //                 docname: frm.doc.name,
    //     //                 member: frm.doc.library_member,
    //     //                 member_name: frm.doc.member_name,
    //     //                 amount: frm.doc.rent_fee,
    //     //             },
    //     //             callback(r) {
    //     //                 frappe.set_route("Form", "Payment Entry", r.message);
    //     //             }
    //     //         })
    //     //     })
    //     // }
    // }