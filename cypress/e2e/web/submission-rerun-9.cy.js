describe('Form Submission 9', () => {
  beforeEach(() => {
    cy.visit('https://visitspandau.club/')
  })

  const users = [
    "Melanie Torres",
    "Ana Roberts",
    "Patricia Boyd",
    "Renee Johnson",
    "Stephen Jenkins",
    "Joseph Bradley",
    "Raymond Clark",
    "Cameron Davis",
    "Anthony Holmes",
    "Cynthia Jones",
    "Holly Hartman",
    "Christopher Wilson",
    "Jessica Dixon",
    "William Murray",
    "Jessica Cox",
    "Luke Reed",
    "Dr. Scott Williams",
    "Thomas Miller",
    "Debbie Morrison",
    "Anna Aguilar",
    "Dr. Martin Adkins",
    "Erin Espinoza",
    "Matthew Swanson",
    "Paul Yoder",
    "David Page",
    "Jason Smith",
    "Corey Mcdonald",
    "Brittney Beck DVM",
    "Reginald Howard",
    "Nathaniel Rollins",
    "Molly Phillips",
    "Peter Fox",
    "Makayla Smith",
    "Daniel Webb",
    "Paul Lam",
    "Andrew Shelton",
    "Jillian Kelly",
    "William Cabrera",
    "Jaclyn Mitchell",
    "Jessica Arias",
    "Dr. Lori Grant MD",
    "Amanda Smith",
    "Steven Copeland",
    "Ronald Davis",
    "Julie Ramos",
    "Rita Cruz",
    "Charles Zimmerman",
    "Diane Lyons",
    "Charles Finley",
    "Jeremy Bradshaw",
    "Roberta Bernard",
    "Ryan Rocha",
    "Mr. Brian Spencer",
    "Jennifer Morrison",
    "William Luna",
    "Theresa Lopez",
    "Stanley Johnson",
    "Jamie Allen",
    "Jasmine Rodriguez",
    "Joshua Nunez",
    "Mary Robinson MD",
    "Nicole Trujillo",
    "Donna Richard",
    "Jennifer Thomas",
    "Daniel Stout",
    "Anne Montgomery",
    "Alyssa Wood",
    "Shannon Lucero",
    "James Curtis",
    "Heather Pollard",
    "Angelica Contreras",
    "Alexandra Kane",
    "Matthew Boyd",
    "Amber Fischer",
    "Robert Morgan",
    "Heather Chapman",
    "Brent Sloan",
    "Jamie Waters",
    "Lauren Brennan",
    "David Hawkins",
    "Samantha Brown",
    "Harold Miller",
    "David Hernandez",
    "Michael Todd",
    "Gary Miller",
    "Judith Washington",
    "David Garrett",
    "Mr. Matthew Martin MD",
    "Kimberly Lopez",
    "Jonathan Carter",
    "Tracy Torres",
    "Stephanie Thomas",
    "Mrs. Courtney Hester",
    "Maurice Miller",
    "Diana Armstrong",
    "Susan Barron",
    "Sean Glass",
    "Deanna Castillo",
    "Jesse Johnson",
    "Alexandra Perry"
    ]

 users.forEach(names => {
      it(`Enters ${names}`, () => {
        cy.get('input[class="input"]').type(names)
        cy.contains('Send')
        // cy.contains('See you in')
      });
  });
})