const profile = document.querySelector('#profile');
const profileContent = document.querySelector('#profilecontent');

profile.addEventListener('click', () => {
    if(profileContent.classList.contains('hidden')){
        profileContent.classList.remove('hidden');
    }else{
        profileContent.classList.add('hidden');
    }
});