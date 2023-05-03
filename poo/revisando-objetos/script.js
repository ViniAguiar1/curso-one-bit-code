function FavoriteTeam(name, bestPlayer, idol, bestTitle, stadium){
    this.name = name
    this.bestPlayer = bestPlayer
    this.idol = idol
    this.bestTitle = bestTitle
    this.stadium = stadium
    this.save = function(){
        // salva no banco de dados
    }
}

function FavoriteSerie(name, favoriteActor, dateOfLaunch, author, station){
    this.name = name
    this.favoriteActor = favoriteActor
    this.dateOfLaunch = dateOfLaunch
    this.author = author
    this.station = station
    this.save = function(){
        // salva no banco de dados
    }
}

const palmeiras =  new FavoriteTeam("Palmeiras", "Dudu", "Dudu", "Copa do Brasil 2015", "Allianz Parque")
console.log(palmeiras)

const realMadrid = new FavoriteTeam("Real Madrid", "Vinicius Jr", "Cristiano Ronaldo", "Champions League 21/22", 
"Santiago Bernabéu")
console.log(realMadrid)

const b99 = new FavoriteSerie("Brooklin Nine", "Andy Samberg", 2013, "Dan Goor", "Netflix")
console.log(b99)