let events = [];

const form = document.querySelector("form");
const eventContainer = document.querySelector(".side2");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    addEvent();
});


function addEvent() {
    const title = document.getElementById("event_title").value.trim();
    const date = document.getElementById("event_date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    if (!title || !date) {
        alert("Please fill Event Title and Date!");
        return;
    }

    const eventObj = {
        title,
        date,
        category,
        description
    }; 
    events.push(eventObj);

    renderEvents();

    form.reset();
}
