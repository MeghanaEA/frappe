// Copyright (c) 2023, Meghana E A and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction Detail', {
	refresh(frm) {
		frm.add_custom_button("Transaction", () => {
        frappe.db.get_value("Book", {"name" : frm.doc.book_id,}, 'name', (value) => { 
            if (value.name == frm.doc.book_id) {
                var match_row = null;
                // var details = frm.doc.details;
                for(let i in frm.doc.details) {
                    if (frm.doc.details[i].book == frm.doc.book_id && frm.doc.details[i].visitor != frm.doc.visitor &&
                        frm.doc.details[i].date) {
                        match_row = frm.doc.details[i];
                    }
                } 
                // if (match_row && frm.doc.status == "Return")  {
                //     match_row.return_date = frappe.datetime.now_datetime()
                //     frm.refresh_field('details')
                // }else {
                    // if (frm.doc.status == "Issue") {
                var child = frm.add_child("details");
                child.book = frm.doc.book_id;
                child.visitor = frm.doc.visitor; 
                child.status = frm.doc.status;
                child.transaction_date = frappe.datetime.now_datetime()
                refresh_field('details');
                    // }
                // }
            }
        })
        });     
    }
});
