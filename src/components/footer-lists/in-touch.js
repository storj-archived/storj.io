import React from 'react'

export default () => (
  <div className="col-xs-12 col-sm-3">
    <h5 className="footer-col-heading white-text">Stay in Touch</h5>
    <div id="mc_embed_signup">
      <form action="https://storj.us8.list-manage.com/subscribe/post?u=edba9fc4ce8b9095a31859cba&amp;id=01f64923fa"
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        className="validate" 
        target="_blank" 
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input className="footer-em-input" 
            type="email" 
            value=""
            name="EMAIL" 
            id="mce-EMAIL" 
            placeholder="Email Address" 
            required="" 
          />
          <input className="btn-signup footer-em-sub"
            type="submit" 
            value="Subscribe" 
            name="subscribe" 
            id="mc-embedded-subscribe" 
          />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" />
          <div className="response" id="mce-success-response" />
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
      </form>
    </div>
  </div>
)