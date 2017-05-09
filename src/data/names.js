export default {
  array: [
    {
      id : 0,
      name: "red",
      color: "#f00"
    },
    {
      id : 1,
      name: "green",
      color: "#0f0"
    },
    {
      id : 2,
      name: "blue",
      color: "#00f"
    },
    {
      id : 3,
      name: "crimson",
      color: "#DC143C"
    },
    {
      id : 4,
      name: "pink",
      color: "#FFC0CB"
    },
    {
      id : 5,
      name: "orchid",
      color: "#DA70D6"
    },
    {
      id : 6,
      name: "indigo",
      color: "#4B0082"
    },
    {
      id : 7,
      name: "cobalt",
      color: "#3D59AB"
    },
    {
      id : 8,
      name: "slategray",
      color: "#708090"
    },
    {
      id : 9,
      name: "steelblue",
      color: "#4682B4"
    },
    {
      id : 10,
      name: "skyblue",
      color: "#87CEEB"
    },
    {
      id : 11,
      name: "lightblue",
      color: "#ADD8E6"
    },
    {
      id : 12,
      name: "turquoise",
      color: "#00F5FF"
    },
    {
      id : 13,
      name: "teal",
      color: "#008080"
    },
    {
      id : 14,
      name: "mint",
      color: "#BDFCC9"
    },
    {
      id : 15,
      name: "lime",
      color: "#32CD32"
    },
    {
      id : 16,
      name: "olive",
      color: "#6B8E23"
    },
    {
      id : 17,
      name: "yellow",
      color: "#EEEE00"
    },
    {
      id : 18,
      name: "banana",
      color: "#E3CF57"
    },
    {
      id : 19,
      name: "orange",
      color: "#EE9A00"
    },
    {
      id : 20,
      name: "carrot",
      color: "#ED9121"
    },
    {
      id : 21,
      name: "coral",
      color: "#FF7F50"
    },
    {
      id : 22,
      name: "tomato",
      color: "#FF6347"
    },
    {
      id : 23,
      name: "brown",
      color: "#A52A2A"
    },
    {
      id : 24,
      name: "black",
      color: "#000000"
    },
    {
      id : 25,
      name: "grey",
      color: "#858585"
    },
    {
      id : 26,
      name: "salmon",
      color: "#EE9572"
    },
    {
      id : 27,
      name: "emerald",
      color: "#00C957"
    },
    {
      id : 28,
      name: "purple",
      color: "#9B30FF"
    },
    {
      id : 29,
      name: "powderblue",
      color: "#B0E0E6"
    },
    {
      id : 30,
      name: "khaki",
      color: "#F0E68C"
    },
    {
      id : 31,
      name: "gold",
      color: "#FFD700"
    },
    {
      id : 32,
      name: "sienna",
      color: "#C76114"
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