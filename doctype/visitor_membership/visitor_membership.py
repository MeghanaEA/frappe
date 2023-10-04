# Copyright (c) 2023, Meghana E A and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class VisitorMembership(Document):
	def validate_membership(self):
			if not frappe.db.exists("Visitor Membership",{"visitor": self.visitor}):
				frappe.throw('The member does not have a valid membership')
		# 	)
        # valid_membership = frappe.db.exists('Visitor Membership',
        #     {
        #         'visitor': self.visitor,
        #         'from_date': ('<', self.date),
        #         'to_date': ('>', self.date),
        #     },
        # )
        # if not frappe.db.exisit:
        #     frappe.throw('The member does not have a valid membership')

