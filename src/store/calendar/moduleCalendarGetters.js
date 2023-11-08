
export default {
    eventById: state => (eventId) => state.calendarEvents.filter((event) => event.id == eventId)[0],
}