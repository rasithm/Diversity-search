const openBox = document.getElementById('open-fa-caret-right');
const employementBody = document.getElementById('employement-body');

openBox.addEventListener('click', () => {
    if (employementBody.style.display === 'none' || employementBody.style.display === '') {
        employementBody.style.display = 'flex'; 
    } else {
        employementBody.style.display = 'none';
    }
});



const openBoxEducation = document.getElementById('open-education');
const educationBody = document.getElementById('education-body');

openBoxEducation.addEventListener('click', () => {
    if (educationBody.style.display === 'none' || educationBody.style.display === '') {
        educationBody.style.display = 'flex'; 
    } else {
        educationBody.style.display = 'none';
    }
});





const openBoxDiversity = document.getElementById('open-diversity');
const diversityBody = document.getElementById('diversity-body');

openBoxDiversity.addEventListener('click', () => {
    if (diversityBody.style.display === 'none' || diversityBody.style.display === '') {
        diversityBody.style.display = 'flex'; 
    } else {
        diversityBody.style.display = 'none';
    }
});

