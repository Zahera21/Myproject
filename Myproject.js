const form = document.getElementById("morningForm");
const feelingSelect = document.getElementById("feeling");
const adviceSection = document.getElementById("adviceSection");
const adviceText = document.getElementById("adviceText");
const bookRecommendation = document.getElementById("bookRecommendation");

const recommendations ={
    happy: {
        advice: "Keep up the positive energy! Remember to spread the joy to those around you.",
        book:"Read 'The Happiness Project' by Gretchen Rubin to explore ways to sustain happiness."
    },
    sad: {
        advice: "It's okay to feel down sometimes. Consider journaling your feelings or talking to a friend.",
        book: "'The Power of Now' by Eckhart Tolle can be a great read to stay present and calm."
    },
    tired: {
        advice:  "Rest when you can and stay hydrated. Even short breaks can help recharge your energy.",
        book: "Check out 'Why We Sleep' by Matthew Walker for insights on the importance of rest."
    },
    excited: {
        advice:  "Channel your excitement into something creative or productive. Make the most of this energy!",
        book:"'Big Magic' by Elizabeth Gilbert is inspiring if you're in a creative mood."
    }

    

    
};

function checkTimeAndDisplayForm() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
  
    
    if (hours < 12) {
      morningForm.style.display = "block";
      eveningForm.style.display = "none";
    }

    else {
      morningForm.style.display = "none";
      eveningForm.style.display = "block";
    }
  }
checkTimeAndDisplayForm();

morningForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const feeling = feelingSelect.value ;

    if (recommendations[feeling]) {
        adviceText.textContent = recommendations[feeling].advice;
        bookRecommendation.textContent = recommendations[feeling].book;

        adviceSection.classList.remove("hidden");


    } else {
        adviceSection.classList.add("hidden");
    }
    morningForm.style.display = "none";
    eveningForm.style.display = "block";
    adviceSection.classList.add("hidden");
    
    
});


eveningForm.addEventListener("submit", function(event) {
    event.preventDefault();  

    const daySummary = document.getElementById("daySummary").value;
    const feedback = document.getElementById("feedback").value;

    if (daySummary && feedback) {
        alert(`Thank you for your feedback! Here's a summary of your day:\n\n${daySummary}\n\nYou are feeling: ${feedback}`);

        
        eveningForm.style.display = "none";
        
        eveningForm.reset();
    } else {
        alert("Please fill in both your day's summary and feedback!");
    }
});
