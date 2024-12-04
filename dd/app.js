// Example data
let leaderboard = [
    { name: "User1", score: 10 },
    { name: "User2", score: 5 },
    { name: "User3", score: 3 }
];

// Display leaderboard
function updateLeaderboard() {
    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = ""; // Clear existing entries
    leaderboard
        .sort((a, b) => b.score - a.score) // Sort by score
        .forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name}: ${user.score}`;
            leaderboardElement.appendChild(li);
        });
}

// Simulate user joining through a referral link
function userJoined(referrer) {
    const user = leaderboard.find(u => u.name === referrer);
    if (user) {
        user.score += 1;
    } else {
        leaderboard.push({ name: referrer, score: 1 });
    }
    updateLeaderboard();
}

// Copy referral link
function copyLink() {
    const link = document.getElementById("referralLink");
    link.select();
    document.execCommand("copy");
    alert("Referral link copied!");
}

// Initialize leaderboard
updateLeaderboard();

// Simulate a new user joining
setTimeout(() => userJoined("User1"), 3000); // Add 1 to User1 after 3 seconds
setTimeout(() => userJoined("User2"), 6000); // Add 1 to User2 after 6 seconds
