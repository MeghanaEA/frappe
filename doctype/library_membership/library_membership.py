# Copyright (c) 2023, Meghana E A and contributors
# For license information, please see license.txt


# import frappe
# from frappe.model.document import Document

# class LibraryMembership(Document):
#     def validate_membership(doc, method):
#         if doc.membership_status != "Active":
#             frappe.throw(_("Membership is not active for this member."))
            
#     doc_event = { 
#         "Library Member": {
#             "validate": "negentropy.library.validate_membership"
#         }
#     }


# from __future__ import unicode_literals

import frappe
from frappe.model.document import Document

class LibraryMembership(Document):
    def validate(self):
        exists = frappe.db.exists(
            'Library Membership',
            {
                'library_member': self.library_member,
                'docstatus': 1,
                'to_date': ('>', self.from_date),
            },
        )

        frappe.throw('There is an active membership for this member')
