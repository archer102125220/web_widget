class test {
  a = 456;
  #a = 123;
  log() {
    console.log(this.#a);
    console.log(this.a);
    console.log(this);
    console.log(test);
  }
}

new test().log();

function bootstrap() {
  const a = new test();
  console.log(a.a);
  console.log(a?.log);
}
