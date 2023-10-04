# Copyright (c) 2023, Meghana E A and contributors
# For license information, please see license.txt

# from __future__ import unicode_literals

import frappe
from frappe.model.document import Document

class LibraryTransaction(Document):
    def validate(self):
        book = frappe.get_doc('Book', self.book)
        if book.status == 'Issue':
            frappe.msgprint('Book is already issued by another member')

    
@frappe.whitelist()
def create_payment_entry(doctype, docname, member, member_name, amount):
    doc = frappe.new_doc("Payment Entry")
    doc.payment_type = "Receive"
    doc.mode_of_payment = "Cash"
    doc.party_type = "Library Member"
    doc.party = member
    doc.party_name = member_name
    doc.paid_amount = amount
    doc.reference_doctype = doctype
    doc.reference_name = docname
    doc.save()
    return doc.name