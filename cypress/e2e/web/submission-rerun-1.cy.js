describe('Form Submission 1', () => {
  beforeEach(() => {
    cy.visit('https://visitspandau.club/')
  })

  const users = [      
    "Tyler York",
    "Victoria Edwards",
    "Anthony Martin",
    "Mark Best",
    "Jamie Scott",
    "Teresa Smith",
    "George Gibbs",
    "Sabrina Obrien",
    "Timothy Griffin",
    "Michael Barber",
    "Cheryl Stephens",
    "Steven Fischer",
    "Adam Miller",
    "Hannah Guerrero",
    "Roy Le",
    "Travis Patrick",
    "Devon Martinez",
    "Edward Vazquez",
    "Joseph Molina",
    "Michael Johnson",
    "Megan Hickman",
    "Brian Sandoval",
    "Mark Noble",
    "Sheila Flores",
    "Keith Martinez",
    "Destiny Lester",
    "Heather Brennan",
    "Melanie Long",
    "Benjamin Nelson",
    "Crystal Acosta",
    "Marc Alvarado",
    "Aaron Hayes",
    "Tyler Neal",
    "David Wilson",
    "Heather Mcdowell",
    "Mark Harris",
    "James Brown",
    "Bradley Turner",
    "Rachel Wise",
    "Dale Hunter",
    "Charles Tucker",
    "Angelica Todd",
    "Jacob Buckley",
    "Terry Mason",
    "Sarah Kerr",
    "Laurie Torres",
    "Keith Russo",
    "Deanna Hudson",
    "Jennifer Velez",
    "Jasmine Hester",
    "Matthew Montoya",
    "Brianna Allen DVM",
    "Edward Macdonald",
    "Brooke Ortiz",
    "Andrew Cross",
    "Sara Fitzpatrick",
    "Kristen Brown",
    "Hailey Ward",
    "Shannon Ingram",
    "Michael Hudson",
    "Jessica Mitchell",
    "Jesus Grimes",
    "Anthony Smith",
    "Anthony Ward",
    "Kristin Ross",
    "David Crawford",
    "Angela Cook",
    "Christopher Grimes",
    "Nathan Johnson",
    "Chad Arias",
    "Melanie Jones",
    "Dominique Bender",
    "Margaret Olson",
    "April Cooke",
    "Victoria Miller",
    "Dustin Perkins",
    "Melissa Mccarthy DDS",
    "Kimberly Deleon",
    "George Fowler",
    "Dylan Stone",
    "Ashley Paul",
    "Monica Mclean",
    "Christopher Waters",
    "Felicia Powell",
    "Catherine Giles",
    "Sharon Powell",
    "Jerry Velasquez",
    "Paul Weaver",
    "Caroline Ayala",
    "Shawna Henderson",
    "Lisa Howell",
    "Sandra Williams",
    "Terry Richardson",
    "Melanie Fields",
    "Todd Brown",
    "Tina Bell",
    "David Bell",
    "Paul Morris",
    "Michael Bennett",
    "Kyle Holmes",
    "Amy May",
    "Carlos Anderson",
    "Alexis Porter",
    "Michael Castro"
    ]

 users.forEach(names => {
      it(`Enters ${names}`, () => {
        cy.get('input[class="input"]').type(names)
        cy.contains('Send')
        // cy.contains('See you in')
      });
  });
})