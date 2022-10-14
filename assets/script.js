import elmEvents from "./data.js";

const mainCardContentX = document.querySelector("#main")

const eventsObj = elmEvents

function eventCardCreator(events) {

    for (let i = 0; i < events.length; i++) {
        const mainCardContent = document.createElement('div')
        mainCardContent.classList.add('card-event')
        const eventTitle = document.createElement('h3')
        const eventImg = document.createElement('img')

        const eventDescriptionTitle = document.createElement('h3')
        const eventDescription = document.createElement('p')

        const eventAgeTitle = document.createElement('h3')
        const eventAgeRestriction = document.createElement('p')

        const eventDateTitle = document.createElement('h3')
        const eventDateCont = document.createElement('div')
        const eventDateDay = document.createElement('span')
        const eventDateDate = document.createElement('span')
        const eventDateTime = document.createElement('p')

        const eventPriceTitle = document.createElement('span')
        const eventPrice = document.createElement('span')

        const eventLocationTitle = document.createElement('h3')
        const eventLocation = document.createElement('p')

        const eventInfoTitle = document.createElement('h3')
        const eventInfo = document.createElement('p')

        const eventTagsCont = document.createElement('div')
        eventTagsCont.classList.add("card-event-tags")
        mainCardContent.append(eventTagsCont)

        // Elem content
        // Elem class
        // Elem attr.
        // Elem append

        // Direct element Access
        eventTitle.classList.add("card-event-name-header")
        eventTitle.innerText = events[i].event
        mainCardContent.append(eventTitle)

        eventImg.classList.add("card-event-img")
        eventImg.setAttribute('src', events[i].image)
        console.log(events[i].image)
        eventImg.setAttribute('alt', 'event placeholder image')
        mainCardContent.append(eventImg)

        // Container Access
        eventDescriptionTitle.textContent = 'Description'
        eventDescriptionTitle.classList.add("card-event-keys")
        mainCardContent.append(eventDescriptionTitle)
        eventDescription.textContent = events[i].description
        mainCardContent.append(eventDescription)


        eventAgeTitle.textContent = 'Age Restriction'
        mainCardContent.append(eventAgeTitle)
        eventAgeRestriction.textContent = events[i].ageRestriction
        mainCardContent.append(eventAgeRestriction)

        // DATE
        eventDateTitle.textContent = 'Date'
        mainCardContent.appendChild(eventDateTitle)
        for(const item of events[i].date){
            eventDateDay.textContent = item.day
            mainCardContent.append(eventDateDay)
            eventDateDate.textContent = item.date
            mainCardContent.append(eventDateDate)
            eventDateTime.textContent = item.time
            mainCardContent.append(eventDateTime)
        }

        eventPriceTitle.textContent = 'Price: '
        mainCardContent.append(eventPriceTitle)
        eventPrice.textContent = events[i].price
        mainCardContent.append(eventPrice)
        
        eventLocationTitle.textContent = 'Location: '
        mainCardContent.append(eventLocationTitle)
        eventLocation.textContent = events[i].location
        mainCardContent.append(eventLocation)

        eventInfoTitle.textContent = 'Info: '
        mainCardContent.append(eventInfoTitle)
        eventInfo.textContent = events[i].moreInfo
        mainCardContent.append(eventInfo)



        const link = document.createElement('a')
        link.textContent = 'Contact Us'
        link.href = './assets/contact.html'
        mainCardContent.append(link)

        const attending = document.createElement('button')
        attending.id = `btn-${events[i].id}`
        attending.textContent = 'Not Attending'
        attending.classList.add('not')
        const btnObj = {}
        attending.querySelector(`#btn-${events[i].id}`);
        btnObj[`btn-${events[i].id}`] = attending.addEventListener('click', (ev) => changeAttendStatus(ev));
        mainCardContent.append(attending)


        mainCardContentX.appendChild(mainCardContent)
    }
}

let isAttending = 0
function changeAttendStatus(ev){
    isAttending += 1

    if(isAttending === 1){
        
        ev.target.textContent = 'Maybe'
        ev.target.className = 'maybe'
    } else if (isAttending === 2){
        ev.target.textContent = 'Attending'
        ev.target.className = 'att'
    } else {
        ev.target.textContent = 'Not Attending'
        ev.target.className = 'not'
    }
    if(isAttending > 2){
        isAttending = 0
    }
}

const btnState = {
    attending: false,
    confirmed: false   
}



for (let i = 0; i < elmEvents.length; i++) {
    // console.log(elmEvents[i])

};


eventCardCreator(eventsObj)

