// this funtion is for check Local Storage for user
// If there is a logged in user with accessToken, return HTTP Authorization header. 
// Otherwise, return an empty object.


export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }