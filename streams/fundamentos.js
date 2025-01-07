//Streams ->

// process.stdin.pipe(process.stdout);

import { Readable, Writable } from "node:stream";

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

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream().pipe(process.stdout);
