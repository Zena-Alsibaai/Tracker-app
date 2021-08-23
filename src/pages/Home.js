import axios from 'axios';
import React, {useState, useEffect} from 'react'

// import LoginForm from '../components/LoginForm';
import PopularMovies from '../components/PopularMovies';
import PopularSeries from '../components/PopularSeries';


const Home = (props) => {
    const adminUser = {
        email:"admin@admin.com",
        password:"admin123",
    }
    const [user, setUser] = useState({name: "", email: ""})
    const [error, setError] = useState("")

    const [content, setContent] = useState([]);
    let url = `https://api.trakt.tv/oauth/authorize?response_type=code&client_id=07a4b0723224468f7cba1fe6fb95ab3a3a0d93581d97e38604d97b4d6d81120a&redirect_uri=http://localhost:3000`;
    
    // const [isClicked, setIsClicked] = useState("false")

    // const clickedHandler = () => {
    //     setIsClicked(! isClicked)
    // }
    const params = new URLSearchParams(window.location.search) // id=123
    let code = params.get('code') 

     console.log(code)


    let body = JSON.stringify({

        client_id:"07a4b0723224468f7cba1fe6fb95ab3a3a0d93581d97e38604d97b4d6d81120a",
        client_secret: "db361d88f0f3a2a0e693475484c78611fa09ad70f68e0ed0d21643aa83b25a5a",
        redirect_uri:"http://localhost:3000",
        code : code,
        grant_type: "authorization_code"
    })
    console.log(body)
    

        // localStorage.setItem("code", JSON.stringify(code));


        const exchangeCode = async () => {
            const exchange = await axios.post("https://api.trakt.tv/oauth/token",body, {

                headers : {
                    "Content-Type":"application/json",
                }

            }).then(response => {
                console.log(response.data);
                if (response.data.access_token) {
                    localStorage.setItem("Token", JSON.stringify(response.data.access_token));
                  }
           
                }).catch(e => {
                    console.log(e);
                });
                
            }
            exchangeCode();
           



        
        const exchangeRefreshToken = async () => {
            const exchange = await axios.post("https://api.trakt.tv/oauth/token", {

                headers : {
                    "Content-Type":"application/json",
                },
                body : JSON.stringify({

                    refresh_token: "5829bc73c8d428179d0c055aaf35efc690948743246f4b758dfa5f9a2ee1714a",
                    client_id:"07a4b0723224468f7cba1fe6fb95ab3a3a0d93581d97e38604d97b4d6d81120a",
                    client_secret: "db361d88f0f3a2a0e693475484c78611fa09ad70f68e0ed0d21643aa83b25a5a",
                    redirect_uri:"http://localhost:3000",
                    grant_type: "authorization_code"
                    
                    
                })

            }).then(response => {
                console.log(response.data);
           
            }).catch(e => {
                console.log(e);
      });
           
        }
        exchangeRefreshToken();

    
    const Login = details => {
        // console.log(details)

        if(details.email == adminUser.email && details.password == adminUser.password){

            // console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email,
            });
        }else{
            // console.log( "Details do not match" );
            setError( "Details do not match :'(")
        }
    }  

    const Logout = () => {
      setUser({ name: "", email: "" })
    }


    return (
        <div className="home ">
            {/* <Header /> */}
          
            <div className="home-container">
                
                <PopularMovies />
                <PopularSeries />

                <div className="center">
                    <a href={url}><button className="btn-signIn"> SignIn</button></a> 
                </div>

                {/* {(user.email !="") ? (
                   <div className="welcome">
                        <h3> Welcome,</h3> <span>{user.name}</span>
                        <button on click={Logout}>Logout</button>
                    </div>
                    ) : (
                    < LoginForm Login={Login} error={error} />
                )} */}
            </div>
        </div>
    )
}
export default Home;


