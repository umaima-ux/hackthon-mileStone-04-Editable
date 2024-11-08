// Add event listener for form submission
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    // Type assertions for input and textarea elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('technicalSkills') as HTMLTextAreaElement;
    
    // Check if all elements exist
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
    
        // Extract values from the elements
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handle the profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create resume output as HTML
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        // Insert the generated resume into the #resumeOutput element
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing.');
        }
    } else {
        console.error('One or more elements are missing.');
    }
});

    
    // Function to make elements editable
    function makeEditable(element: HTMLElement) {
         element.contentEditable = 'true';
         element.focus();
         element.addEventListener('blur', function () {
         // Save the edited content or handle blur event if needed
         element.contentEditable = 'false';
        });
        }