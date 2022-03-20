export interface Book {
    title: string;
    imageLinks: Image;
    publisher: string;
    publishedDate: string;
    description:string;
}

export interface Image {
    smallThumbnail: string;
    thumbnail: string;
}
