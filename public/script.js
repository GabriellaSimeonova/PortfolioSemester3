readProjectsFromMongoDV();
const projectsContainer = document.querySelector('.projects-container');

//NAVIGATION BAR- to underline the current section in pink
    var menu_items = document.querySelectorAll('.menu-item');
    menu_items.forEach(item =>{
        
        item.addEventListener('click', event =>{
            menu_items.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active')
        })
    })

function readProjectsFromMongoDV() {

    fetch('http://localhost:4000/getprojects')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.projects.length; i++) {
                const project = document.createElement('div');
                project.classList.add('project');

                project.innerHTML = `
                <div class="right">
                    <img src=${data.projects[i].photo} alt="project photo" class="project-photo">
                </div>
                <div class="left">
                    <h2 class="project-title">${data.projects[i].name}</h2>
                    <h4 class="project-category">${data.projects[i].category}</h4>
                    <p class="project-desc">${data.projects[i].description}</p>
                    <a href="${data.projects[i].open}" class="project-open">Open</a>
                </div>
                `;

                projectsContainer.prepend(project);
            }
        });
}