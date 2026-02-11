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
if (events.length === 0) {
        listDiv.innerHTML = "<p>No events yet. Add your first event!</p>";
    } else {
        events.forEach((event, index) => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event-card");

            eventDiv.innerHTML = `
                <strong>${event.title}</strong><br>
                <small>Date: ${event.date}</small><br>
                <small>Category: ${event.category}</small><br>
                <p>${event.description}</p>
            `;

            listDiv.appendChild(eventDiv);
        });
    }
