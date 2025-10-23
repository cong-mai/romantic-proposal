// Romantic Proposal Website JavaScript

// Music variables
let backgroundMusic = null;
let isMusicPlaying = false;

document.addEventListener('DOMContentLoaded', function() {
    // Add some romantic sparkle effects
    createSparkles();
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize music functionality
    initializeMusic();
    
    // Create a subtle start overlay for music
    createMusicStartOverlay();
});

// Function to show the "Yes" response
function showYesResponse() {
    const yesResponse = document.getElementById('yesResponse');
    const noResponse = document.getElementById('noResponse');
    const buttons = document.querySelector('.buttons');
    
    // Hide buttons and no response
    buttons.style.display = 'none';
    if (noResponse.style.display === 'block') {
        noResponse.style.display = 'none';
    }
    
    // Show yes response with celebration
    yesResponse.style.display = 'block';
    
    // Create additional celebration effects
    createCelebrationHearts();
    createConfetti();
    
    // Add some romantic sound effects (visual feedback)
    showRomanticMessage("🎉 Congratulations! You've made someone very happy! 🎉");
}

// Function to show the "No" response
function showNoResponse() {
    const noResponse = document.getElementById('noResponse');
    const yesResponse = document.getElementById('yesResponse');
    const buttons = document.querySelector('.buttons');
    
    // Hide buttons and yes response
    buttons.style.display = 'none';
    if (yesResponse.style.display === 'block') {
        yesResponse.style.display = 'none';
    }
    
    // Show no response
    noResponse.style.display = 'block';
    
    // Show supportive message
    showRomanticMessage("💙 Your honesty is appreciated.💙");
}

// Function to create sparkle effects
function createSparkles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #fff;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle 3s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(sparkle);
    }
    
    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Function to create celebration hearts
function createCelebrationHearts() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.cssText = `
                position: fixed;
                font-size: 2rem;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight + 50}px;
                animation: celebrateHeart 3s ease-out forwards;
            `;
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 200);
    }
    
    // Add celebration heart animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrateHeart {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Function to create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffc0cb', '#ffb6c1', '#ff69b4'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * window.innerWidth}px;
                top: -10px;
                animation: confettiFall 4s ease-out forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 50);
    }
    
    // Add confetti animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(${window.innerHeight + 100}px) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Function to show romantic messages
function showRomanticMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 2000;
        text-align: center;
        animation: messageAppear 3s ease-out forwards;
    `;
    document.body.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
    
    // Add message animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            20%, 80% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add some romantic hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add some romantic typing effect for the main message
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const romanticTexts = document.querySelectorAll('.romantic-text');
    
    romanticTexts.forEach((text, index) => {
        const originalText = text.textContent;
        setTimeout(() => {
            typeWriter(text, originalText, 30);
        }, 1000 + (index * 2000));
    });
});

// Add some romantic sound effects (visual feedback)
function playRomanticSound() {
    // Create a visual sound wave effect
    const soundWave = document.createElement('div');
    soundWave.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        border: 3px solid #ff6b9d;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1500;
        animation: soundWave 1s ease-out forwards;
    `;
    document.body.appendChild(soundWave);
    
    setTimeout(() => {
        if (soundWave.parentNode) {
            soundWave.parentNode.removeChild(soundWave);
        }
    }, 1000);
    
    // Add sound wave animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes soundWave {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add click sound effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            playRomanticSound();
        });
    });
});

// Music functionality
let audioContext = null;

function initializeMusic() {
    // Initialize the audio element for MP3 playback
    backgroundMusic = new Audio('music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3; // Set volume to 30%
    backgroundMusic.preload = 'auto';
    
    console.log("🎵 Music ready - will start automatically!");
}

// Music control button removed - music plays automatically

// Toggle music function removed - music plays automatically

function playRomanticMusic() {
    // Use the global audioContext that was created on user interaction
    if (!audioContext) {
        console.error('AudioContext not initialized');
        return;
    }
    
    // Romantic melody notes (C major scale)
    const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]; // C4 to C5
    let currentNote = 0;
    
    function playNote() {
        if (!isMusicPlaying || !audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(notes[currentNote], audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.8);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.8);
        
        currentNote = (currentNote + 1) % notes.length;
        
        setTimeout(playNote, 1000); // Play next note after 1 second
    }
    
    playNote();
}

function stopRomanticMusic() {
    // Stop the MP3 file if it's playing
    if (backgroundMusic && !backgroundMusic.paused) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Reset to beginning
    }
    
    // Stop generated music by setting flag
    isMusicPlaying = false;
    console.log("🎵 Music stopped");
}

// Create a subtle music start overlay
function createMusicStartOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'music-start-overlay';
    overlay.innerHTML = `
        <div class="music-start-content">
            <div class="music-icon">🎵</div>
            <p>Click anywhere to start the romantic music</p>
        </div>
    `;
    
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
        animation: fadeIn 0.5s ease-out;
    `;
    
    // Add styles for the content
    const style = document.createElement('style');
    style.textContent = `
        .music-start-content {
            text-align: center;
            color: white;
            font-family: 'Poppins', sans-serif;
        }
        
        .music-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }
        
        .music-start-content p {
            font-size: 1.2rem;
            font-weight: 300;
            opacity: 0.9;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
    
    // Add click event to start music and remove overlay
    overlay.addEventListener('click', function() {
        autoPlayMusic();
        overlay.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 500);
    });
    
    // Add fadeOut animation
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(fadeOutStyle);
    
    document.body.appendChild(overlay);
    
    // Auto-remove overlay after 3 seconds if not clicked
    setTimeout(() => {
        if (overlay.parentNode) {
            overlay.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 500);
        }
    }, 3000);
}

// Auto-play music function
function autoPlayMusic() {
    if (!isMusicPlaying) {
        // Start playing the MP3 file automatically
        if (backgroundMusic) {
            backgroundMusic.play().then(() => {
                isMusicPlaying = true;
                console.log("🎵 Romantic music is now playing automatically!");
            }).catch(error => {
                console.error('Error auto-playing music:', error);
                // Fallback to generated music if MP3 fails
                playRomanticMusic();
                isMusicPlaying = true;
            });
        } else {
            // Fallback to generated music
            playRomanticMusic();
            isMusicPlaying = true;
        }
    }
}
