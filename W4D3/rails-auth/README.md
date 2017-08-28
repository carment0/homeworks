
# Auth

___

  ## Steps to Add Auth:
  * Add BCrypt gem
  * Update User table
  * Update User Model
* Update Application Controller
* Create Sessions Controller
* Update User Controller

---

## User Migration
  * Add password_digest and session_token
  * Add indexes on session_token

---

## User Model
  * Validations
    * password_digest, session_token
    * password: length, allow_nil

---

## User Model
  * #password=(password)
  * #is_password?(password)
  * #ensure_session_token
  * #reset_session_token
  * User.find_by_credentials(username, password)

---

## Application Controller
  * #login!
  * #logout!
  * #current_user
  * #require_logged_out
  * #require_logged_in

---

## Sessions Controller
  * #new
  * #create (for logging in)
  * #destroy (for logging out)
  * Add routes

---

## User Controller
  * Add :password to allowed #user_params
  * login!(@user) when a new user is created
  * flash errors and re-render :new

---

## Forms
* Add password field
* Add CSRF token
