class PhotoAlbum {
  private numberOfPages: number = 0;

  constructor(numberOfPages: number = 16) {
    this.numberOfPages = numberOfPages;
  }

  /**
   * getNumberOfPages
   */
  public getNumberOfPages(): number {
    return this.numberOfPages;
  }
}

export default PhotoAlbum;