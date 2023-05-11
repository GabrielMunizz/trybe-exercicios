let title = document.querySelector('header');
title.style.backgroundColor = 'green';
let footer = document.querySelector('footer');
footer.style.backgroundColor = 'green'
let emergencyBackground = document.querySelectorAll('.emergency-tasks');
emergencyBackground[0].style.backgroundColor = 'pink'
let noEmergencyBack = document.querySelectorAll('.no-emergency-tasks')
noEmergencyBack[0].style.backgroundColor = 'yellow'
let emergencySubs = document.querySelectorAll('.emergency-tasks div h3');
for(let i = 0; i < emergencySubs.length; i += 1){
    emergencySubs[i].style.backgroundColor = 'purple'
};
let noEmergencySubs = document.querySelectorAll('.no-emergency-tasks div h3');
for(let h3 in noEmergencySubs){
    noEmergencySubs[h3].style.backgroundColor = 'black';
};




