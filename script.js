// ✅ Spotify OAuth Configuration
const client_id = "f7c4febcd8194338a16278f8bd431c15"; // তোমার Spotify Client ID
const redirect_uri = "https://realshibsankarsarkar.github.io/Ekant/callback.html";
const scopes = "user-read-private user-read-email";

// ✅ Login button event
document.getElementById("login-btn").onclick = () => {
    const auth_url =
        `https://accounts.spotify.com/authorize` +
        `?response_type=token` +
        `&client_id=${client_id}` +
        `&scope=${encodeURIComponent(scopes)}` +
        `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    window.location.href = auth_url;
};
