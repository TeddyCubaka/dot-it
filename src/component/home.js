import CollectionCard from "./basics/collection-card";
import Header from "./basics/header";
import HelloCard from "./basics/hello-card";
import NavBarre from "./basics/navbarre";


export default function Home (){
    return (
        <div className="home">
            <Header />
            <NavBarre />
            <div className="home-body">
                <h2>Bonjour</h2>
                <HelloCard />
                <HelloCard />
                <h2>Vos album</h2>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </div>
    )
}