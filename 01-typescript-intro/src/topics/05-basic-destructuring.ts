interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

/********************************************* */

const song = 'New Song'

const {song: anotherSong, songDuration, details} = audioPlayer;
const {author} = details;

/* console.log("Canción: ", song);
console.log("Autor: ", author);
console.log("Duración: ", songDuration); */

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje';

const [, , trunks = 'Not found']: string[] =  ['Goku', 'Vegeta'];

console.error('Personaje 3:', trunks);

export{};