const coursesPage = document.querySelector(".courses-content");

const coursesList = async ()=> {
  const url =  'http://localhost:3000/courses';

  //use the browser's web api.
  //pick up the result (http response packet)..

const response = await fetch(url);
//check that we have received something, just for check up.
if(response.status === 200){
  const coursesData = await response.json();
  console.log(coursesData);
//for each object in the json response,
//go through each object with foreach
  coursesData.forEach((course) => {
    coursesPage.insertAdjacentHTML('beforeend',
    `<div class="course">
        <div class="course-text">
        <h2 class="course-name">${course.name}</h2>
        <ul>Course Number:
        <li>${course.courseNumber}</li>
        <br>
        </ul>

        <ul>Start Date:
        <li>${course.startDate}</li>
        <br>
        </ul>

        <ul>End Date:
        <li>${course.endDate}</li>
        <br>
        </ul>

        <ul>Place Of Study:
        <li>${course.placeStudy}</li>
        <br>
        </ul>

        <ul>Teacher:
        <li>${course.teacher}</li>
        <br>
        </ul>
        </div>
    </div>`
    );
  });
}
};
coursesList();