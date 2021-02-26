export const authEndpoint= "https://accounts.spotify.com/authorize";// for login purpass 

const redirectUri = "http://localhost:3000/";// redirect to localhost
const clientId ="70708aa3b5e04050b9ee86cc72c4c64d"; // myid

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFormUrl = ()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1])

        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;