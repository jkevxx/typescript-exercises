import BigPhotoAlbum from "./BigPhotoAlbum";
import PhotoAlbum from "./PhotoAlbum";


const myAlbum = new PhotoAlbum();
console.log(myAlbum.getNumberOfPages())

const myAlbum2 = new PhotoAlbum(12);
console.log(myAlbum2.getNumberOfPages())

const bigAlbum = new BigPhotoAlbum();
console.log(bigAlbum.getNumberOfPages());