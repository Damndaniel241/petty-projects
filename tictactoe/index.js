const button = document.getElementById("check");

// const r_1_1 = document.getElementById("1-1").value;
// const r_1_2 = document.getElementById("1-2").value;
// const r_1_3 = document.getElementById("1-3").value;
// const r_2_1 = document.getElementById("2-1").value;
// const r_2_2 = document.getElementById("2-2").value;
// const r_2_3 = document.getElementById("2-3").value;
// const r_3_1 = document.getElementById("3-1").value;
// const r_3_2 = document.getElementById("3-2").value;
// const r_3_3 = document.getElementById("3-3").value;

const er_1_1 = document.getElementById("1-1");
const er_1_2 = document.getElementById("1-2");
const er_1_3 = document.getElementById("1-3");
const er_2_1 = document.getElementById("2-1");
const er_2_2 = document.getElementById("2-2");
const er_2_3 = document.getElementById("2-3");
const er_3_1 = document.getElementById("3-1");
const er_3_2 = document.getElementById("3-2");
const er_3_3 = document.getElementById("3-3");

// const list = [
//   [r_1_1, r_1_2, r_1_3],
//   [r_2_1, r_2_2, r_2_3],
//   [r_3_1, r_3_2, r_3_3],
//   [r_1_1, r_2_1, r_3_1],
//   [r_1_2, r_2_2, r_3_2],
//   [r_1_3, r_2_3, r_3_3],
//   [r_1_1, r_2_2, r_3_3],
//   [r_1_3, r_2_2, r_3_1],
// ];

let togglePlayer = true;

let currentBoxElement = null;

function toggleShowButton() {
  document.getElementById("check").disabled = false;
}

function togglePlayers() {
  const players = document.getElementById("players");
  togglePlayer = !togglePlayer;

  return togglePlayer ? "x" : "o";
}

function check() {

    const list = [
        [document.getElementById("1-1").value, document.getElementById("1-2").value, document.getElementById("1-3").value],
        [document.getElementById("2-1").value, document.getElementById("2-2").value, document.getElementById("2-3").value],
        [document.getElementById("3-1").value, document.getElementById("3-2").value, document.getElementById("3-3").value],
        [document.getElementById("1-1").value, document.getElementById("2-1").value, document.getElementById("3-1").value],
        [document.getElementById("1-2").value, document.getElementById("2-2").value, document.getElementById("3-2").value],
        [document.getElementById("1-3").value, document.getElementById("2-3").value, document.getElementById("3-3").value],
        [document.getElementById("1-1").value, document.getElementById("2-2").value, document.getElementById("3-3").value],
        [document.getElementById("1-3").value, document.getElementById("2-2").value, document.getElementById("3-1").value],
      ];
  players.textContent = `player ${togglePlayers()}`;
  currentBoxElement.disabled = true;
  
  for (let item of list){
  is_row_equal_x(item);
  is_row_equal_o(item);
  }
}

er_1_1.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_1_1);
  currentBoxElement = er_1_1
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_1_2.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_1_2);
  currentBoxElement = er_1_2
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_1_3.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_1_3);
  currentBoxElement = er_1_3
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_2_1.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_2_1);
  currentBoxElement = er_2_1
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_2_2.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_2_2);
  currentBoxElement = er_2_2
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_2_3.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_2_3);
  currentBoxElement = er_2_3
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_3_1.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_3_1);
  currentBoxElement = er_3_1
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_3_2.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_3_2);
  currentBoxElement = er_3_2
//   console.log("currentBoxElement = ",currentBoxElement);
});
er_3_3.addEventListener("click", function () {
  toggleShowButton();
//   console.log(er_3_3);
  currentBoxElement = er_3_3
//   console.log("currentBoxElement = ",currentBoxElement);
});

// list.forEach((row) => {
//     row.forEach((element) => {
//       element.addEventListener('click', function() {
//         alert("you have clicked a box");
//       });
//     });
//   });

function is_row_equal_x(arr) {
  count = 0;
  for (let item of arr) {
    if (item === "x") {
      count += 1;
    }
  }
  if (count === 3) {
    alert("player x wins");
    location.reload();
    return true;
  } else {
    return false;
  }
}

function is_row_equal_o(arr) {
    count = 0;
    for (let item of arr) {
      if (item === "o") {
        count += 1;
      }
    }
    if (count === 3) {
        alert("player x wins");
        location.reload();
      return true;
      
    } else {
      return false;
    }
  }


//   function is_row_equal(arr) {
//     count = 0;
//     // winner= null;
//     for (let item of arr) {
//       if (item === "x") {
//         count += 1;
//       }
//     }
//     if (count === 3) {
//         // console.log("equal row found");
//         // alert("player o wins")
//       return true;
//     } else {
//       return false;
//     }
//   }

// for (let item of list){
//     console.log(is_row_equal(item));
// }

// list.forEach((item,index,array)=>{
//     console.log(`array [${item}] is ${is_row_equal(item,"4")}`);
// })
