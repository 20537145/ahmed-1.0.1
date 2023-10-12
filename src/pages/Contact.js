import React from 'react'

function Contact() {
  return (
    <div>
        <h1>contact us</h1>
        <form>
            <label>
                <span>Email</span>
            <input type="email" name='email' required />
            </label>
            <label>
                <span>Message</span>
            <textarea name="message" required></textarea>
            </label>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Contact