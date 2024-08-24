
# TO HANDLE BASIC FUNCTIONALITIES IF USER NEED ASSISTANCE
hardcode_data = """Welcome Message:

Display a friendly greeting when a user lands on a page.
Offer assistance by explaining how the chatbot can help the user.
Example: "Hi there! I'm here to help you connect with top-rated contractors. How can I assist you today?"
Service Inquiry and Lead Capture:

Ask the user what type of service they are looking for, based on the category of the page they are visiting (e.g., landscaping, plumbing).
Prompt the user to provide basic contact details: Name, Email, and Phone Number.
Store the captured details for further processing. (This can be done by using OpenAI function calling in Gpt-4o)
Example: "What type of service do you need? (e.g., landscaping, plumbing) Please provide your name and contact details so I can assist you better."
Service Options and Action Selection:

Present the user with three options for engaging with contractors:
Fill in a Form: Display a simple form where the user can select up to four contractors and submit their information.
Call a Number: Show clickable phone numbers for up to four contractors, enabling the user to call directly.
Set an Appointment: Allow users to select one or more contractors and schedule an appointment through the chatbot. Basic appointment scheduling can be simulated.
You can use hardcoded dummy data for this purpose, but the bot should be able to select them logically, according to the specific services required.
Example: "Would you like to fill in a form, call a contractor, or set an appointment?"
"""
