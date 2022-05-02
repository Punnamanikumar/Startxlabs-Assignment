//!Problem -1 :

function timeConversion() {
  let n = document.getElementById("input1").value;
  if (n !== "" && n >= 0) {
    var hours = parseInt(n / 3600);
    n %= 3600;
    // console.log(hours, "hours");
    var minutes = parseInt(n / 60);
    // console.log(minutes, "minutes");
    n %= 60;
    var Seconds = n;
    // console.log(Seconds, "seconds");
    document.getElementById("one").innerText =
      hours + " Hours, " + minutes + " Minutes, " + Seconds + " Seconds.";
  } else {
    alert("Please Enter any Number !!");
  }
}

//!Problem - 2 :

function XOR() {
  let l = document.getElementById("input2").value;
  let r = document.getElementById("input3").value;
  if (l && r != "") {
    let odd = Math.floor((r - l) / 2);
    if (r % 2 == 1 || l % 2 == 1) odd++;
    if (odd % 2 == 0) document.getElementById("two").innerText = "Even";
    else document.getElementById("two").innerText = "Odd";
    // console.log("second", odd);
  } else {
    alert("Please Fill Both Inputs");
  }
}

//!Problem -3 :

function sortingStrings() {
  let strings = [];
  let x = [];
  let size = document.getElementById("input4").value; // Array size: ;
  if (size != "") {
    if (size > 1) {
      for (var a = 0; a < size; a++) {
        strings[a] = prompt("Enter String " + (a + 1));
      }
      strings.forEach((elements) => {
        x.push(elements.toLowerCase());
      });
      // console.log(x);
      for (i = 0; i < x.length; i++) {
        if (x[i] > x[i + 1]) {
          let temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
        }
      }
      //   console.log(x);
      document.getElementById("three").innerText = x;
    } else {
      alert("Please Give Number Greater than 1");
    }
  } else {
    alert("Please Give No of Strings to be Sorted");
  }
}
