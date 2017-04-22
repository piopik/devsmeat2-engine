export default {
  array: [
    {
      id : 0,
      name: "Red Zebra",
      color: "#f00"
    },
    {
      id : 1,
      name: "Green Zebra",
      color: "#0f0"
    },
    {
      id : 2,
      name: "Blue Zebra",
      color: "#00f"
    }
  ],

  getName(){
    let available =  this.array.filter((e) => {
      return !e.used
    });

    let i = available[Math.floor(Math.random() * available.length)];

    this.array[i.id].use=true;

    return i
  }
}