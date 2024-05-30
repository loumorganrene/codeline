class Robot {
  constructor() {
    this.battery = 100;
    this.position = [0, 0];
  }

  logBattery() {
    let battery = "";
    let batteryCopy = this.battery;

    for (let i = 0; i < 10; i++) {
      battery += batteryCopy > 0 ? "🟩" : "🟥"
      batteryCopy -= 10;
    }

    console.log(battery)
  }

  checkBattery() {
    if (this.battery > 0) return false;
    console.log("⚡ Batterie vide. Retour à la station de recharge.")
    this.position = [0, 0]
    this.battery = 100;
    console.log("🔋 Batterie rechargée. Prêt à reprendre le nettoyage.")
    return true;
  }
/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @returns 
 */
  move(x, y) {
    if (this.checkBattery()) return;

    if (x > Math.abs(1) || y > Math.abs(1)) {
      console.log("🤖 ne peut plus se déplacer de plus d'une pièce.")
      return;
    }

    this.battery += 1;
    this.position = [this.position[0] + x, this.position[1] + y];
    console.log(`🤖 se déplacer vers la position ${this.position}. Etat de la batterie: ${this.battery}%`)
  }
  /**
   * 
   * @param {House} house 
   * @returns 
   */
  clean(house) {
    if (this.checkBattery()) return;
    this.battery -= 5;
    console.log(
      `🧹 Nettoyage de la position ${this.position}. Etat de la batterie: ${this.battery}%`
    );
    house.clean(this.position)
  }
}

class Piece {
  /**
   * 
   * @param {"clean" | "dirty" | "clean_by_robot"} state 
   */
  constructor(state) {
    this.state = state;
  }

  getEmoji() {
    if (this.state === "clean") {
      return "🧼";
    }

    if (this.state === "clean_by_robot") {
      return "🧽";
    }

    return "💩";
  }

  clean() {
    if (this.state !== "dirty") return;
    this.state = "clean_by_robot"
  }

  get isDirty() {
    return this.state === "dirty"
  }

  get isClean() {
    return !this.isDirty;
  }

}

class House {
  /**
   * 
   * @param {Piece[][]} layout 
   * @param {Robot} robot 
   */
  constructor(layout, robot) {
    this.layout = layout;
    this.robot = robot;
  }

  logHouse() {
    const layoutString = this.layout.map((row, i) => {
      return row.map((room, j) => {
        if (this.robot.position[0] === i && this.robot.position[1] === j) {
          return "🤖";
        }
        return room.getEmoji();
      }).join("")
    }).join("\r\n")

    console.log(layoutString)
  }

  clean(position) {
    const [x, y] = position;
    this.layout[x]?.[y]?.clean();
  }

  get isClean() {
    return !this.layout.some(row => row.some(room => room.isDirty))
  }
}

const createLayout = (x, y) => {
  const layout = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      const randomCoordinate = Math.random();
      row.push(new Piece(randomCoordinate < 0.5 ? "clean" : "dirty"))
    }
    layout.push(row);
  }
  return layout;
}

const play = async() => {
  const houseSize = [5, 5]
  const robot = new Robot();
  const house = new House(createLayout(5, 5), robot);
  robot.logBattery();
  house.logHouse();

  let direction = 1;

for (let i = 0; i < houseSize[0]; i++) {
  for (let j = 0; j < houseSize[1]; j++) {
    console.clear();

    robot.logBattery();
    house.logHouse();
    robot.move(direction, 0);
    robot.clean(house);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  robot.move(0, 1);
  direction = direction === 1 ? -1 : 1;
  robot.clean(house);

  await new Promise((resolve) => setTimeout(resolve, 1000));
}
}

// 🦁 Appelle `play`

play()
