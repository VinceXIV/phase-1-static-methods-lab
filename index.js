class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const nonCapitalized = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    const wordArray = string.split(" ").map(word => {
      if(nonCapitalized.includes(word)){
        return word
      }else{
        return this.capitalize(word)
      }
    })

    return this.capitalize(wordArray.join(" "))
  }
}

