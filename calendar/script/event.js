var event = {
    name: "Pricing Review",
    organizer: "Pitgrowth",
    duration: 15,
    description: "Our team will meet with you to review pricing options.",
    date: new Date(),
    time: "9:00",
    test_image_partner1:'test_image_partner1',
    attendees: []
};

sessionStorage.setItem("eventObj", JSON.stringify(event));