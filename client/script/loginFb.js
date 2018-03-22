  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '271882970016554',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.12&appId=271882970016554&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      if(!localStorage.getItem('fbtoken')){
        localStorage.setItem('fbtoken',response.authResponse.accessToken)
        console.log(localStorage.fbtoken)
      axios({
        method: 'post',
        url: 'http://localhost:3000/todo/signin',
        headers:{
          access_token: localStorage.getItem('fbtoken'),
        }
      }).then(function(resLogin){
        // console.log(resLogin)
        if (resLogin.data.data) {
          localStorage.setItem('apptoken',resLogin.data.data)
          window.location.href = "index.html"
        } else {
          window.location.href = "login.html"
        }
      }).catch(err=>console.log(err))
      }
      
    } else {
      // window.location.href = "login.html"
      document.getElementById('status').innerHTML = '';
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  function logoutFB(){
    FB.logout(function (response){
        localStorage.clear()
        window.location.href="login.html"
    })
}

