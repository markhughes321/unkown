describe('Form Submission 6', () => {
  beforeEach(() => {
    cy.visit('https://visitspandau.club/')
  })

  const users = [
    "Nicholas Silva",
    "Ryan West",
    "Brenda Reynolds",
    "Nancy Green",
    "Robert Day",
    "Christopher Sanchez",
    "Michael Bennett",
    "Duane Harrison",
    "Edward Spencer",
    "Brooke Hall",
    "John Boone",
    "Haley Reeves",
    "Richard Hale",
    "Tracy Washington",
    "John Smith",
    "Jonathan Lyons",
    "Cynthia Robinson",
    "David Martin",
    "James Callahan",
    "Katrina Perez",
    "Aaron Oconnell Jr.",
    "Mark Martin",
    "Deborah Salas",
    "Stacy Rosario",
    "Lori Hoffman",
    "David Campbell",
    "Michelle Avery",
    "James Reyes",
    "Michael Ellis",
    "John Nicholson",
    "Alicia Cobb",
    "Morgan Mason",
    "Courtney Christian",
    "Christopher Fuller",
    "Robin Smith",
    "Beth Lewis",
    "Jacqueline Bryant",
    "Michael Chen",
    "Annette Garcia",
    "Justin Franklin",
    "Matthew Henry",
    "Gregory Fletcher",
    "Michael Kelly",
    "Sherri Phillips",
    "Tammy Barnes",
    "Tiffany Ramos DVM",
    "Mary Brown",
    "Paul Kaiser",
    "Megan Romero",
    "Morgan Jackson",
    "Alexander Vang",
    "Eric Andrews",
    "Zachary Garcia",
    "Paul Carter",
    "Monique Holden",
    "Terrance Barajas",
    "Alexandra Mckinney",
    "Randy Roach",
    "Rebecca Dawson",
    "Robert Lawson",
    "Christopher Berg",
    "Michael Stevens",
    "Samantha Marshall",
    "Jonathan Adams",
    "Kevin Sanchez Jr.",
    "Theodore Ford",
    "Katherine Moore",
    "Gregory Harris",
    "Jean Kelly",
    "Alexandria Shaw",
    "Spencer Smith",
    "Edward Mack",
    "James Peterson",
    "Katrina Garcia",
    "Sherry Roberts",
    "Leslie Campbell",
    "Mr. James Watson",
    "Heidi Williams",
    "Marc Bishop",
    "Miguel Clarke",
    "Stacey Hughes",
    "Ann Randall",
    "Deanna Garcia",
    "Antonio Perez",
    "Veronica Ramsey",
    "Peter Beltran",
    "Robert Smith",
    "David Kim",
    "Stephanie Adams",
    "Timothy Jones",
    "William Stark",
    "Gina Daniels",
    "Elijah Fields",
    "Kim Johnson",
    "Joanna Hopkins",
    "Mario Silva",
    "Jordan Kelley",
    "Zachary Larsen",
    "Shirley White",
    "Scott Smith"
    ]

 users.forEach(names => {
      it(`Enters ${names}`, () => {
        cy.get('input[class="input"]').type(names)
        cy.contains('Send')
        // cy.contains('See you in')
      });
  });
})