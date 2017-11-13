# React Auth

Authorization app to log a user in and out utilizing Firebase for authentication.

If a user tries to log in without an account, an attempt will be made to create the account for the user and then log them in. 

If the email address already exists in the system but the password does not match, an account will not be logged in or created and an error message will be displayed. 

If the entered email address and password are authenticated, the user will be logged in.

A logged in user will see a Log Out button that will allow them to log out and be taken back to the login form.
