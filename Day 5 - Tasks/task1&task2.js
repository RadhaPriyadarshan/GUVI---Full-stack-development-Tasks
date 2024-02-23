const resume = 
{
    "personal_information": {
      "first_name": "Radha Priyadarshan",
      "last_name": "Jegadeesan",
      "address": "51, new salt colony",
      "email": "radhapriyan786@gmail.com"
    },
    "education": {
        "degree": "B.Tech in Information Technology",
        "college": "St.Joseph's college of Engineering",
        "graduation_year": 2023
    },
    "skills": {
      "Programming languages": "Java, Python, JavaScript, Flutter-Dart",
      "Web development": "HTML, CSS",
      "Version control": "Git",
    },
    "projects": [
      {
        "title": "College Department Website",
        "description": "Built a static responsive website using HTML,CSS,Javascript for St.Joseph's college of Engineering",
      },
      {
        "title": "Diabetic Retinopathy Detector ",
        "description": "Built a AI-based application for detecting the Diabetic Retinopathy using Ensemble-Learning.",
      },
      {
        "title": "Brain Tumor Detector",
        "description": "Built a AI-based application for detecting the Diabetic Brain Tumor using Image Classification.",
      },
      {
        "title": "Links Showcase Site",
        "description": "Built a static responsive website using HTML,CSS,Javascript for my own AI brand .",
      }
    ],
    "languages": {
        "language": "English",
        "proficiency": "Fluent"
    },
  
}
 
// Using 'for' loop
console.log("Using 'for' loop:");
for (var i = 0; i < Object.keys(resume).length; i++) {
  const key = Object.keys(resume)[i];
  const formattedValue = JSON.stringify(resume[key], null, 2).replace(/[{"}]/g, '');
  console.log(`${key}: ${formattedValue}`);
}

// Using 'for...in' loop
console.log("\nUsing 'for...in' loop:");
for (var key in resume) {
  if (resume.hasOwnProperty(key)) {
    const formattedValue = JSON.stringify(resume[key], null, 2).replace(/[{"}]/g, '');
    console.log(`${key}: ${formattedValue}`);
  }
}

// Using 'for...of' loop
console.log("\nUsing 'for...of' loop:");
for (const [key, value] of Object.entries(resume)) {
  const formattedValue = JSON.stringify(value, null, 2).replace(/[{"}]/g, '');
  console.log(`${key}: ${formattedValue}`);
}

// Using 'forEach' for arrays
console.log("\nUsing 'forEach' loop:");
Object.entries(resume).forEach(([key, value]) => {
  const formattedValue = JSON.stringify(value, null, 2).replace(/[{"}]/g, '');
  console.log(`${key}: ${formattedValue}`);
});


