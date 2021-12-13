// Eye Password Show


const eyeIconPassword = document.querySelector( ".input-item .pass-icon.btn" );
const inputPasswordUp = document.querySelector( ".input-item .input-password" )

eyeIconPassword.addEventListener( 'click', () => {
     if ( inputPasswordUp.type === "password" ) {
          inputPasswordUp.type = "text"
     } else {
          inputPasswordUp.type = "password"
     }
} )