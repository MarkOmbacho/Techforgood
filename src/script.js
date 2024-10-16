document.getElementById("skillForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    const skillName = document.getElementById("skillName").value.trim();
    const skillDescription = document.getElementById("skillDescription").value.trim();
 
    // Simulate AI insights generation (this would be replaced with actual API calls)
    const aiInsights = `
        You entered the skill "${skillName}". 
        Consider volunteering for community projects that require this skill:
        - Community Gardening
        - Local Tutoring Programs
        - Skills Workshops
    `;
 
    document.getElementById("aiInsights").innerHTML = aiInsights;
 
    // Clear the form fields after submission
    document.getElementById("skillForm").reset();
 });