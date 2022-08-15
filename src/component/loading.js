

export default function Login (){

    const handleClick = ()=>{
        const clientId = "7b5690c371ee4e86ae586449d5a95703"
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read',
            'user-follow-modify',
            'user-follow-read'
        ]
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    }
    return (
        <div className='login'>
            <div className='logo-du-site'>
                <img src="https://img1.freepng.fr/20180528/ofw/kisspng-label-sticker-paper-red-circle-5b0ba642cd8ad8.9798758015274901148419.jpg" alt=""/>
            </div>
            <div>Savoir votre musique, importer depuis spotify, sous une interface différent et fascinant !</div>
            <button
                onClick={handleClick}
                className='login-button'
            >Login with spotify</button>
        </div>
    )
}