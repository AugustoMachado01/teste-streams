import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    setTimeout(() => {
      const i = this.index++;

      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

const stream = new OneToHundredStream();

fetch("http://localhost:3334", {
  method: "POST",
  body: stream,
  headers: {
    "Content-Type": "text/plain",
  },
  duplex: "half",
});
