document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-rules-btn');
    const rulesSection = document.getElementById('rules-section');

    toggleButton.addEventListener('click', function() {
        if (rulesSection.style.display === 'none') {
            rulesSection.style.display = 'block';
            toggleButton.textContent = 'Hide Rules';
        } else {
            rulesSection.style.display = 'none';
            toggleButton.textContent = 'Show Rules';
        }
    });

    const generalRules = [
        "Students are expected to come to the college in neat, clean and simple clothes. They must conform to the high standards of modesty maintained by the institutions. They should not wear gaudy dresses.",
        "Students should not bring discredit to the college or to themselves. Insubordination and rude behavior of any kind inside or outside the college will be severely dealt with.",
        "Strict silence should be maintained during class hours in the Classrooms, Library, Laboratory, Examination halls and in the College premises.",
        "Student should not enter the office room, staff room or computer lab without permission.",
        "Monthly tests and model examinations are part of curriculum and student should be sincere in taking these tests. They should not indulge in any kind of malpractice during examinations or tests.",
        // Add additional general rules up to 60
    ];

    const libraryRules = [
        "Members entering the Library must carry ID cards.",
        "Books are issued on Borrower’s ID card only.",
        "Books are issued Monday – Friday 09.30 A.M. to 4.30 P.M. and on Saturday 9.30 A.M. to 1.00 P.M. on all working days.",
        "The Temporary Library card is issued to those who have not yet received Permanent ID Card from office, which is NOT TRANSFERABLE Sub-lending of books is a misuse of this privilege and is to be avoided.",
        "Special care should always be taken that the library card is not misplaced or lost. The loss it any is to be reported immediately to the librarian.",
        "Duplicate Library card will be issued at the discretion of the Librarian and on payment of Rs. 25/- only.",
        "Hand-books, Reference books, Textbooks, Periodicals, Encyclopedia, standards and other damaged books are not been issued. However, there books are to be consulted within the Library premises only.",
        "Do not ear mark the paper of pages of a book.",
        "Users of the library must respect the rights and privileges of all other users.",
        "These rules assume that students, staff, and faculty will take responsibility for abiding by the quiet policy. The library staff may speak to you about these policies, not to be the “noise police,” but to remind you of our shared responsibility to each other. Students and faculty do have the right to remind library staff of the policy as well!",
        "Creating a public disturbance, including disruptive noise. Obscene and/or abusive language or gestures, Harassing or threatening behavior is not permitted inside the library.",
        "Library is a complete SILENCE ZONE No discussions are entertained. All library patrons should pay special attention to those around them and report any sort of disturbance.",
        "if any problem occurs with librarian contact to principal of school directly."
    ];

    const labRules = [
        "Silence should be maintained inside the computer lab.",
        "Playing games and chatting are prohibited.",
        "Students should work only in their assigned systems and they are responsible for the given system.",
        "Chewable items are prohibited inside the lab.",
        "If a student damages the system i.e. either software or hardware component, the expense will be collected from him/her.",
        "Students should get permission while entering & leaving the lab.",
        "Students should get permission to use (Pendrives/CDs) inside the lab.",
        "Students should bring observation notebooks without fail.",
        "Scribbling on the walls or computer tables is not permitted.",
        "Chairs should be arranged properly before leaving the lab."
    ];

    const parentRules = [
        "Parents are specially requested to contact the college authorities periodically to get first-hand information about the attendance, academic progress, conduct, etc…, of their wards.",
        "Parents are reminded that they are not absolved of their responsibility in the education of their children once their daughters/sons are admitted to the college.",
        "They should follow the students’ progress in studies and her/his general conduct in and outside the college.",
        "Their co-operation is solicited especially to ensure regular attendance of classes."
    ];

    const generalRulesList = document.getElementById('general-rules');
    const libraryRulesList = document.getElementById('library-rules');
    const labRulesList = document.getElementById('lab-rules');
    const parentRulesList = document.getElementById('parent-rules');

    generalRules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        generalRulesList.appendChild(li);
    });

    libraryRules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        libraryRulesList.appendChild(li);
    });

    labRules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        labRulesList
