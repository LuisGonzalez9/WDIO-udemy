const { I } = inject();

module.exports = {

  title: 'h1',

  assertTitle(){
    I.seeElement(this.title)
  }
}
