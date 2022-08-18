export default function CollectionCard (object){
    const objects = object;
    console.log(objects);    
    return (
        <div className="collection-card">
            <div>
                {objects.object.album.images ? <img src={object.object.album.images[0].url} alt=''/> : <img src="https://static.vecteezy.com/ti/vecteur-libre/p2/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg" alt=""/>}
            </div>
            <div>
                {objects.object.name ? <h2>{objects.object.name} - {objects.object.artists[0].name} </h2> : <h2>le nom de type</h2>}
                {/* <div>Genres : {objects.object.genres[0] ? `${objects.object.genres[0]}` : 'Undifind'} {objects.object.genres[1]? `et ${objects.object.genres[1]}` : ' '} </div> */}
            </div>
        </div>
    )
}