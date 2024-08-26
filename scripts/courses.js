const coursesContainer = document.querySelector(".courses-content");

const coursesList = async () => {
  const url = "http://localhost:3000/courses"; // or your Live Server URL

  const response = await fetch(url);
  if (response.status === 200) {
    const coursesData = await response.json();
    console.log(coursesData);
    coursesData.forEach((course) => {
      coursesContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="course">
          <div class="course-text">
            <h2 class="course-name">${course.name}</h2>
            <ul>Course Number:
              <li>${course.courseNumber}</li>
            </ul>
            <ul>Start Date:
              <li>${course.startDate}</li>
            </ul>
            <ul>End Date:
              <li>${course.endDate}</li>
            </ul>
            <ul>Place Of Study:
              <li>${course.placeStudy}</li>
            </ul>
            <ul>Teacher:
              <li>${course.teacher}</li>
            </ul>
          </div>
        </div>`
      );
    });
  } else {
    console.error("Failed to fetch courses data");
  }
};

coursesList();
