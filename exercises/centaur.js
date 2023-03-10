class Centaur{
  constructor(name, breed){
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.activity = 0
  }

  shoot(){
    if(this.layingDown === true){
      return 'NO!'
    }
    this.activity += 1
    if (this.activity >= 3){
      this.cranky = true
      return 'NO!'
    }
    else{
      return 'Twang!!!'
    }
  }

  run(){
    if(this.layingDown === true){
      return 'NO!'
    }
    this.activity += 1
    if (this.activity >= 3){
      this.cranky = true
    }
    return 'Clop clop clop clop!!!'
  }

  sleep(){
    if (this.standing === true){
      return 'NO!';
    }
    else{
      this.cranky = false
      this.activity = 0
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp(){
    this.standing = true
    this.layingDown = false
  }

  drinkPotion(){
    if (this.layingDown === true){
      return 'Not while I\'m laying down!'
    }
    else{
      this.cranky = !this.cranky
    }
  }
}

module.exports = Centaur;