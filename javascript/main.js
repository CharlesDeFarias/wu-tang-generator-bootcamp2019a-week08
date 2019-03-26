//5 Questions true or false & yes or no
//Wu Tang name based on the answer
//Make name dependant on how many truths chosen
//want to run function on click of submit button
document.querySelector("button").addEventListener('click', nameGen)
//Instead of running loop, can just create an array of names and have the number of truths be the index number
function nameGen(){
let t = document.querySelectorAll('#True:checked').length,
f=document.querySelectorAll('#True:checked').length,
names = ['Math.Method','Arr Cee','Ol Dry Code','Thundery','Monal Sunset', 'Genus Mustela Chromatic']
name = names[t];
    document.querySelector('h2').textContent = `'Your name is ${name} and you officially ain't nothing to fuck with`;
    if(f+t<5){
      document.querySelector('h2').textContent = 'You need to answer every question to find out your name! Stop being lazy.'
    }
}
