class SingerService {
  constructor() {
    this.URI = "http://localhost:3000/api/singers";
  }

  async getSingers() {
    const res = await fetch(this.URI);
    const singer = res.json();
    console.log(singer);
    //return singer;
  }

  postSinger() {}
}

export default SingerService;