function load() {
  console.log('Hello world!');





  let hour = new Date().getHours();
  let greeting;
if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
document.getElementById("Hello").innerHTML = greeting;
}
