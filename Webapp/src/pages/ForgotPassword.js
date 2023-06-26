import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle forgot password logic
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
          style={{width: '400px', height: '50px' }}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button  onClick={() => window.location.href = '/Profile'} style={{width: '200px', height: '50px'}} type="submit">Submit</button>
      </form>
    </div>
  );
}




export default ForgotPassword;