describe('Form Submission 10', () => {
  beforeEach(() => {
    cy.visit('https://visitspandau.club/')
  })

  const users = [
    "Evan Gonzalez",
    "Sarah Jones",
    "Elizabeth Lucas",
    "William Kim",
    "Margaret Leonard",
    "Sarah Cooper",
    "April Crawford",
    "Morgan Gardner",
    "Bonnie Carrillo",
    "Lisa Austin",
    "Alicia Johnson",
    "Alyssa Castillo",
    "Deborah Mcdonald",
    "Sarah Willis DDS",
    "David Boyd",
    "Carol Anderson",
    "Meagan Mccormick",
    "Andrew Mcneil",
    "Robert Kim",
    "Mr. Kevin Mckenzie",
    "Dr. Brandon Dorsey",
    "Colin Hamilton",
    "Nicole Mitchell",
    "Anthony Taylor",
    "Sara Holmes",
    "Rachel Williams",
    "Kayla Lane",
    "David Lopez",
    "Allen Ward",
    "Lisa Cooper PhD",
    "Sierra Quinn",
    "Kathryn Chambers",
    "Rachel Wilkins",
    "Alyssa Anderson",
    "Michelle Reese",
    "Sheila Ward",
    "Paul Rich",
    "Gregory Atkinson",
    "Stephanie Nelson",
    "Shelby Robbins",
    "Joseph Ramirez",
    "Jody Arroyo",
    "Alan Foley",
    "Colleen Lowery",
    "John Robertson",
    "Destiny Holden",
    "Latoya Tucker",
    "Paul Silva",
    "David Henry",
    "Christopher Davis",
    "Laura Lopez",
    "Monique Travis",
    "Michael Burns",
    "William Ortega",
    "Michael Bowen",
    "Robert Cox",
    "Julie Gordon",
    "Kevin Brown",
    "Nicole Mathis",
    "Jeffery Ochoa",
    "Chad Haas",
    "Kristin Wolf",
    "Mary Shannon",
    "Nicole Petersen",
    "Jennifer Simpson",
    "Amber Gonzalez MD",
    "Heather West",
    "Ronald Warner",
    "Steven Terrell",
    "Lisa Davis",
    "Edward Chapman",
    "Steve Lewis",
    "Cathy Smith",
    "Mrs. Cindy Simmons MD",
    "Kelli Bell",
    "Samantha Harper",
    "Jamie Choi",
    "Angela Thomas",
    "Kevin Mclaughlin",
    "Annette Santana",
    "Janice Hurst",
    "Mrs. Michele Byrd DDS",
    "Louis Dunn",
    "Craig Garcia",
    "Dr. Anthony Jacobs",
    "Sharon Carroll",
    "Robert Hayes",
    "Amanda Oconnor",
    "Jorge Ray",
    "Shawn Le",
    "Jamie Berg",
    "Leslie James MD",
    "Stephanie Spencer",
    "Anthony Garcia",
    "Jasmine Keller",
    "Lori Reynolds",
    "Robert Miller",
    "Dawn Sanchez",
    "Sarah Byrd"
    ]

 users.forEach(names => {
      it(`Enters ${names}`, () => {
        cy.get('input[class="input"]').type(names)
        cy.contains('Send')
        // cy.contains('See you in')
      });
  });
})