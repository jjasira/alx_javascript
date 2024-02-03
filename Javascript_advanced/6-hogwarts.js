let studentHogwarts = (function () {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: function (newName) {
      name = newName;
    },

    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return name + ": " + privateScore;
    },
  };
})();

let harry = Object.create(studentHogwarts);
harry.setName("Harry");

for (var i = 0; i < 4; i++) {
  harry.rewardStudent();
}

console.log(harry.getScore());

let draco = Object.create(studentHogwarts);
draco.setName("Draco");

for (var j = 0; j < 1; j++) {
  draco.rewardStudent();
}

for (var k = 0; k < 3; k++) {
  draco.penalizeStudent();
}

console.log(draco.getScore());
