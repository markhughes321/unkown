describe('Form Submission 7', () => {
  beforeEach(() => {
    cy.visit('https://visitspandau.club/')
  })

  const users = [
      "Melissa Moreno",
      "Sydney Gonzalez",
      "Nathan Ryan",
      "Tyler Meyer",
      "Tiffany Estrada",
      "Amy Crawford",
      "Jennifer Hall",
      "Donald Wright",
      "Dawn Cantrell",
      "Dr. Vanessa Collins",
      "Laura Cortez",
      "Trevor Perkins",
      "Joshua York",
      "Alicia Leach",
      "Thomas Hudson",
      "Gregory Wilson",
      "Scott Diaz",
      "Taylor Hendrix",
      "Melissa Smith",
      "Angela Ballard",
      "Dana Horton",
      "Taylor Johnson",
      "Andrea Cooper",
      "Debra Hartman",
      "Laura Peterson",
      "Dr. Tanya Newman",
      "William Jones",
      "Thomas Thompson",
      "Jessica Willis",
      "Richard Simon",
      "Nicole Robles DDS",
      "Brian Maldonado",
      "Evan Gonzalez",
      "Michael Wells",
      "Shane Ramirez",
      "Sarah Thornton",
      "Michael Baker",
      "Kevin Barnett",
      "Christopher Snyder",
      "April Newman",
      "Cassandra Cruz",
      "Jeremiah Wade",
      "Lindsay Singleton",
      "Joshua Shaw",
      "Eduardo Sullivan",
      "Crystal Schneider",
      "Martha Spencer",
      "Jesus Gonzales",
      "Michael Barnes",
      "Todd Elliott",
      "Katrina Cooper",
      "Darin Lambert",
      "Brandi Valdez",
      "Sandra Johnson",
      "Jeffrey Durham",
      "Samantha Holmes",
      "Christopher Thomas",
      "Haley Mcgee",
      "Susan Reynolds",
      "Mrs. Amy Barnett",
      "Mia Young",
      "Kenneth Brock",
      "Elizabeth Wells",
      "Kathryn Bass",
      "Darren Harvey",
      "Erin Waters",
      "John Perkins",
      "Meagan Howard",
      "Troy Alvarado",
      "Nicholas Conrad",
      "Cynthia Flores",
      "John Garcia",
      "Dominic Burton",
      "David Mitchell",
      "Brandon Rogers",
      "Dustin Woodard",
      "Timothy Best",
      "Chase Waters",
      "Tracy Bennett",
      "Mrs. Angela Wheeler",
      "Christine Crosby",
      "Deanna Leach",
      "Adam Clarke",
      "John Nichols",
      "Roberto Jones",
      "Kenneth Thomas",
      "Danielle Terry",
      "Alyssa Taylor",
      "Rachel Atkins",
      "Katherine Greene",
      "Amy Lee",
      "Stacy Estrada",
      "Laura Williams",
      "Miranda Hardin",
      "David Miller",
      "Robert Thompson",
      "Danielle Browning",
      "Jasmine Anderson",
      "Meagan Clark",
      "Nicole Johnson"
    ]

 users.forEach(names => {
      it(`Enters ${names}`, () => {
        cy.get('input[class="input"]').type(names)
        cy.contains('Send')
        // cy.contains('See you in')
      });
  });
})