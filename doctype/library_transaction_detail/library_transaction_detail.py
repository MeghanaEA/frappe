# Copyright (c) 2023, Meghana E A and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LibraryTransactionDetail(Document):
	def validate(self):
		for books in self.details:
			if books.status != self.status:
				frappe.throw("You cannot add the Type - {0} into {1}".format(frappe.bold(books.status), frappe.bold(self.status)))

	def on_submit(self):
		for books in self.details:
			if not frappe.db.exists("Library Transaction", {"visitor: books.visitor"}):
				frappe.get_doc(
					{
						"doctype": "Library Transaction",
						"status": books.status,
						"book": books.book,
						"visitor": books.visitor,
						"date": books.transaction_date,
					}
				).insert()

				# if books.status == "Issue":
				# 	frappe.get_doc(
				# 		{
				# 			"doctype": "Library Transaction",
				# 			"status": "Issue",
				# 			"book": books.book,
				# 			"visitor": books.visitor,
				# 			"issue_date": books.transaction_date,	
				# 			"rent_fee": books.rent_fee,
				# 		}
				# 	).insert()
				# elif books.status == "Return": 
				# 	frappe.get_doc(
				# 		{
				# 			"doctype": "Library Transaction",
				# 			"status": "Return",
				# 			"book": books.book,
				# 			"visitor": books.visitor,
				# 			"return_date": books.transaction_date,	
				# 			"rent_fee": books.rent_fee
				# 		}
				# 	).insert()
		
	
